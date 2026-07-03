import Header from '../../../components/Header';
import QuoteDrawer from '../../../components/QuoteDrawer';
import { generators } from '../../../data/generators';

export function generateStaticParams(){ return generators.map(g=>({slug:g.slug})); }
export function generateMetadata({params}){ const g=generators.find(x=>x.slug===params.slug); return { title: `${g?.model || 'MKT'} Diesel Generator | MKT Generators` }; }
export default function GeneratorDetail({params}){
 const g=generators.find(x=>x.slug===params.slug);
 if(!g) return <main><Header/><section className="page-hero"><h1>Generator not found</h1></section></main>;
 return <main><Header/><section className="detail-hero"><div><span>{g.series} · {g.engineBrand}</span><h1>{g.model} Diesel Generator</h1><p>{g.primeKva} kVA Prime / {g.standbyKva} kVA Standby, {g.frequency}, Deep Sea Controller.</p><a href={g.datasheet}>Download MKT Datasheet</a></div><img src={g.image} alt={g.model}/></section><section className="specs"><h2>Technical Specifications</h2><table><tbody>{Object.entries({Model:g.model,'Engine Brand':g.engineBrand,'Engine Model':g.engineModel,'Prime Power':`${g.primeKva} kVA`,'Standby Power':`${g.standbyKva} kVA`,Frequency:g.frequency,Voltage:g.voltage,Controller:g.controller,'Fuel Tank':g.fuelTank || '-','Canopy Dimensions':g.dimensions?.canopy || '-','Open Dimensions':g.dimensions?.open || '-'}).map(([k,v])=><tr key={k}><th>{k}</th><td>{v}</td></tr>)}</tbody></table></section><QuoteDrawer/></main>
}
