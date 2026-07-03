'use client';
import {useMemo,useState,useEffect} from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import GeneratorCard from '../../components/GeneratorCard';
import QuoteDrawer from '../../components/QuoteDrawer';
import {generators, engineBrands, powerGroups} from '../../data/generators';
export default function GeneratorsPage(){
 const [brand,setBrand]=useState('All'),[power,setPower]=useState('All'),[type,setType]=useState('All'),[q,setQ]=useState('');
 useEffect(()=>{const p=new URLSearchParams(location.search); if(p.get('brand')) setBrand(p.get('brand'))},[]);
 const list=useMemo(()=>generators.filter(g=>{const needle=q.toLowerCase().trim(); return (brand==='All'||g.engineBrand===brand)&&(power==='All'||g.powerGroup===power)&&(type==='All'||g.type.includes(type))&&(!needle||[g.model,g.shortModel,g.sourceCode,g.engineBrand,g.engineModel,g.series,String(g.standbyKva)].join(' ').toLowerCase().includes(needle));}),[brand,power,type,q]);
 return <main><Header/><section className="page-hero"><span>PRODUCTS</span><h1>MKT Diesel Generator Sets</h1><p>Filter by engine brand, kVA range, generator type, or model code.</p></section><section className="catalog-page"><aside className="filters"><h3>Filter Catalog</h3><label>Search<input value={q} onChange={e=>setQ(e.target.value)} placeholder="MKT MB250 / Cummins / 250"/></label><label>Engine Brand<select value={brand} onChange={e=>setBrand(e.target.value)}><option>All</option>{engineBrands.map(b=><option key={b}>{b}</option>)}</select></label><label>Power Range<select value={power} onChange={e=>setPower(e.target.value)}><option>All</option>{powerGroups.map(p=><option key={p}>{p}</option>)}</select></label><label>Type<select value={type} onChange={e=>setType(e.target.value)}><option>All</option><option>Silent</option><option>Open</option></select></label><div className="filter-count"><b>{list.length}</b> models found</div></aside><div className="grid results">{list.map(g=><GeneratorCard key={g.id} g={g}/>)}</div></section><QuoteDrawer/><Footer/></main>
}
