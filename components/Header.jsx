'use client';
import { useState } from 'react';
export default function Header(){
 const [open,setOpen]=useState(false);
 const nav=[['/','Home'],['/generators','Products'],['/downloads','Downloads'],['/about','About'],['/rfq','RFQ']];
 return <header className="site-header"><a className="brand" href="/"><img src="/images/mkt-logo.png" alt="MKT"/><span>GENERATORS</span></a><button className="menu" onClick={()=>setOpen(!open)}>☰</button><nav className={open?'open':''}>{nav.map(([u,t])=><a key={u} href={u}>{t}</a>)}<a className="quote-btn" href="/rfq">Request Quote</a></nav></header>
}
