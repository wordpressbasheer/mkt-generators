import Header from '../components/Header';
import Hero3D from '../components/Hero3D';
import GeneratorCard from '../components/GeneratorCard';
import KvaCalculator from '../components/KvaCalculator';
import QuoteDrawer from '../components/QuoteDrawer';
import { generators } from '../data/generators';

export default function Home() {
  return <main>
    <Header />
    <section className="hero">
      <div className="hero-copy"><span>MKT GENERATORS</span><h1>Industrial Diesel Power Solutions</h1><p>Diesel generator sets engineered for standby, prime power, export projects, and demanding industrial applications.</p><div className="hero-actions"><a href="/generators">Browse Catalog</a><a href="#contact">Request Quote</a></div><div className="metrics"><div><b>5-3000</b><small>kVA Range</small></div><div><b>50/60</b><small>Hz Options</small></div><div><b>3</b><small>Engine Series</small></div></div></div>
      <Hero3D />
    </section>
    <section className="catalog-preview"><div className="section-head"><span>PRODUCT RANGE</span><h2>Generator Catalog by Engine Brand</h2><p>Baudouin MB Series, Perkins MP Series, and Cummins MC Series — fully rebranded for MKT.</p></div><div className="grid">{generators.map(g=><GeneratorCard key={g.id} g={g} />)}</div></section>
    <KvaCalculator />
    <section className="contact" id="contact"><h2>Request a Quotation</h2><p>Send selected models and project details to the MKT sales team.</p><a href="mailto:sales@mktgenerators.com">sales@mktgenerators.com</a></section>
    <QuoteDrawer />
  </main>;
}
