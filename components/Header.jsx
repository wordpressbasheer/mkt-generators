export default function Header() {
  return (
    <header className="site-header">
      <a className="brand" href="/">
        <img src="/images/mkt-logo.png" alt="MKT Generators" />
        <span>GENERATORS</span>
      </a>
      <nav>
        <a href="/">Home</a>
        <a href="/generators">Products</a>
        <a href="/admin">Admin</a>
        <a href="#downloads">Downloads</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="quote-btn" href="#contact">Request Quote</a>
    </header>
  );
}
