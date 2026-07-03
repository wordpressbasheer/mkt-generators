'use client';
import { useState } from 'react';
const brackets = [20,30,50,80,100,150,200,250,300,350,400,500,600,800,1000,1250,1500,2000,2500,3000];
export default function KvaCalculator() {
  const [load, setLoad] = useState('');
  const [factor, setFactor] = useState(1.25);
  const [pf, setPf] = useState(0.8);
  const kva = load ? Math.ceil((Number(load) / Number(pf)) * Number(factor)) : 0;
  const bracket = kva ? (brackets.find(b => b >= kva) || 'Custom') : null;
  return (
    <section className="calculator" id="calculator">
      <div className="section-head"><span>POWER SIZING</span><h2>kVA Calculator</h2><p>Fast estimate for quotation stage.</p></div>
      <div className="calc-box">
        <label>Application<select value={factor} onChange={e=>setFactor(e.target.value)}><option value="1.2">Commercial</option><option value="1.25">Factory / Industrial</option><option value="1.35">Hospital</option><option value="1.3">Data Center</option><option value="1.45">Mining</option></select></label>
        <label>Estimated Load kW<input value={load} onChange={e=>setLoad(e.target.value)} type="number" placeholder="Example: 180" /></label>
        <label>Power Factor<input value={pf} onChange={e=>setPf(e.target.value)} type="number" step="0.01" /></label>
        <div className="calc-result">{bracket ? <>Recommended: <strong>{bracket} kVA</strong> <small>Calculated demand: {kva} kVA</small></> : 'Enter load to calculate.'}</div>
      </div>
    </section>
  );
}
