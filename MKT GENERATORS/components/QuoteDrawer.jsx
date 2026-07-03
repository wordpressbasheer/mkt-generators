'use client';
import { useEffect, useState } from 'react';
export default function QuoteDrawer() {
  const [open, setOpen] = useState(false); const [items,setItems]=useState([]);
  const load = () => setItems(JSON.parse(localStorage.getItem('mkt_quote_items') || '[]'));
  useEffect(()=>{ load(); window.addEventListener('mktQuoteUpdated', load); return()=>window.removeEventListener('mktQuoteUpdated', load);},[]);
  return <>
    <button className="floating-quote" onClick={()=>setOpen(true)}>Quote List <b>{items.length}</b></button>
    <aside className={`drawer ${open?'open':''}`}><div className="drawer-head"><h3>Quote Request</h3><button onClick={()=>setOpen(false)}>×</button></div>{items.length?items.map(i=><div className="quote-item" key={i.id}>{i.model}<small>{i.brand} · {i.kva} kVA</small></div>):<p>No generators selected.</p>}<a className="quote-submit" href="mailto:sales@mktgenerators.com">Send Inquiry</a></aside>
  </>;
}
