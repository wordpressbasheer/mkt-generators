'use client';
import { useState } from 'react';
import Header from '../../components/Header';
import { generators } from '../../data/generators';

export default function AdminPage(){
 const [items,setItems]=useState(generators);
 return <main><Header/><section className="page-hero"><span>ADMIN PREVIEW</span><h1>MKT Generator Manager</h1><p>This is the first dashboard screen. Next step connects it to Supabase so you can add/edit generators without code.</p></section><section className="admin-wrap"><div className="admin-note"><b>Branding rules active:</b> Full → MKT, FB→MB, FP→MP, FC→MC, D300→Deep Sea.</div><table className="admin-table"><thead><tr><th>Model</th><th>Brand</th><th>Prime</th><th>Standby</th><th>Controller</th></tr></thead><tbody>{items.map(g=><tr key={g.id}><td>{g.model}</td><td>{g.engineBrand}</td><td>{g.primeKva} kVA</td><td>{g.standbyKva} kVA</td><td>{g.controller}</td></tr>)}</tbody></table></section></main>
}
