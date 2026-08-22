import Link from "next/link";
import { languages } from "../../lib/shayari";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Shayari Dunia home" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
        <img src="/logo.jpg" alt="Logo" style={{ width: "56px", height: "56px", borderRadius: "20%", objectFit: "cover", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }} />
        <span>
          <strong>Shayari Dunia</strong>
          <small>Har ehsaas, khoobsurat alfaaz</small>
        </span>
      </Link>

      <nav aria-label="Main navigation">
        {Object.values(languages).map((language) => (
          <Link href={`/${language.slug}`} key={language.slug}>
            {language.nativeLabel}
          </Link>
        ))}
        <Link href="/#emotions">Emotions</Link>
      </nav>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div>
        <Link className="brand footer-brand" href="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <img src="/logo.jpg" alt="Logo" style={{ width: "48px", height: "48px", borderRadius: "20%", objectFit: "cover" }} />
          <span><strong style={{ fontSize: '1.2rem' }}>Shayari Dunia</strong><small>Words worth sharing.</small></span>
        </Link>
        <p>Original Hindi shayari, Punjabi status and English quotes with images and clear meanings.</p>
      </div>
      <div className="footer-links">
        <Link href="/hindi">Hindi Shayari</Link>
        <Link href="/punjabi">Punjabi Status</Link>
        <Link href="/english">English Quotes</Link>
        <Link href="/#emotions">All emotions</Link>
      </div>
      <div className="footer-links" style={{marginTop: "1rem"}}>
        <Link href="/about">About Us</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms & Conditions</Link>
      </div>
      <p className="copyright">© 2026 Shayari Dunia</p>
    </footer>
  );
}
