'use client';
import { useMemo, useState } from 'react';
import Header from '../../components/Header';
import GeneratorCard from '../../components/GeneratorCard';
import QuoteDrawer from '../../components/QuoteDrawer';
import { generators, engineBrands } from '../../data/generators';

export default function GeneratorsPage(){
 const [brand,setBrand]=useState('All'); const [q,setQ]=useState('');
 const list=useMemo(()=>generators.filter(g=>(brand==='All'||g.engineBrand===brand)&&(q===''||g.model.toLowerCase().includes(q.toLowerCase())||String(g.standbyKva).includes(q))),[brand,q]);
 return <main><Header/><section className="page-hero"><span>PRODUCTS</span><h1>Diesel Generator Sets Catalog</h1><p>Filter by engine brand, series, or kVA.</p></section><section className="catalog-page"><aside className="filters"><label>Search<input value={q} onChange={e=>setQ(e.target.value)} placeholder="MKT MB20 or 20"/></label><label>Engine Brand<select value={brand} onChange={e=>setBrand(e.target.value)}><option>All</option>{engineBrands.map(b=><option key={b}>{b}</option>)}</select></label></aside><div className="grid results">{list.map(g=><GeneratorCard key={g.id} g={g}/>)}</div></section><QuoteDrawer/></main>
}
