'use client';
export default function GeneratorCard({ g }) {
  function addQuote() {
    const items = JSON.parse(localStorage.getItem('mkt_quote_items') || '[]');
    if (!items.find(i => i.id === g.id)) items.push({ id: g.id, model: g.model, brand: g.engineBrand, kva: g.standbyKva });
    localStorage.setItem('mkt_quote_items', JSON.stringify(items));
    window.dispatchEvent(new Event('mktQuoteUpdated'));
  }
  return (
    <article className="gen-card">
      <img src={g.image} alt={g.model} />
      <div className="gen-card-body">
        <span>{g.series} · {g.engineBrand}</span>
        <h3>{g.model}</h3>
        <dl>
          <div><dt>Standby</dt><dd>{g.standbyKva} kVA</dd></div>
          <div><dt>Prime</dt><dd>{g.primeKva} kVA</dd></div>
          <div><dt>Engine</dt><dd>{g.engineModel}</dd></div>
          <div><dt>Controller</dt><dd>{g.controller}</dd></div>
        </dl>
        <div className="card-actions">
          <a href={`/generators/${g.slug}`}>View Details</a>
          <button onClick={addQuote}>Add to Quote</button>
        </div>
      </div>
    </article>
  );
}
