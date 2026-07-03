import Header from '../components/Header';
import Footer from '../components/Footer';
import Hero3D from '../components/Hero3D';
import GeneratorCard from '../components/GeneratorCard';
import KvaCalculator from '../components/KvaCalculator';
import QuoteDrawer from '../components/QuoteDrawer';
import {generators, engineBrands} from '../data/generators';

export default function Home(){
 const featured=[generators.find(g=>g.shortModel==='MB250'),generators.find(g=>g.shortModel==='MP250'),generators.find(g=>g.shortModel==='MC250')].filter(Boolean);
 return <main><Header/><section className="hero"><div className="hero-copy"><span>MKT GENERATORS</span><h1>Industrial Diesel Power Solutions</h1><p>Diesel generator sets from 10 kVA to 3000 kVA, organized by engine brand, power range, and application. Built for B2B export, factories, infrastructure, and standby power projects.</p><div className="hero-actions"><a href="/generators">Browse Catalog</a><a href="/rfq">Request Quote</a></div><div className="metrics"><div><b>10–3000</b><small>kVA Range</small></div><div><b>50/60</b><small>Hz Options</small></div><div><b>{engineBrands.length}</b><small>Engine Brands</small></div></div></div><Hero3D/></section><section className="brand-strip">{engineBrands.map(b=><a href={`/generators?brand=${b}`} key={b}>{b}</a>)}</section><section className="catalog-preview"><div className="section-head"><span>PRODUCT RANGE</span><h2>Catalog by Engine Brand</h2><p>Baudouin MB Series, Perkins MP Series, and Cummins MC Series. Public branding is always MKT.</p></div><div className="grid">{featured.map(g=><GeneratorCard key={g.id} g={g}/>)}</div></section><section className="why"><div><span>WHY MKT</span><h2>Built for serious power projects</h2></div><div className="why-grid"><article><b>01</b><h3>Premium Components</h3><p>Configurable with leading engines, alternators, and Deep Sea controllers.</p></article><article><b>02</b><h3>Fast RFQ Flow</h3><p>Select models, add them to the RFQ list, and send one clean request.</p></article><article><b>03</b><h3>Export Ready</h3><p>Catalog structure supports distributors, contractors, and international buyers.</p></article></div></section><KvaCalculator/><section className="contact"><h2>Need a quotation?</h2><p>Send project details and selected models to the MKT sales team.</p><a href="/rfq">Open RFQ Form</a></section><QuoteDrawer/><Footer/></main>
}
