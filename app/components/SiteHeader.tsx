import Link from "next/link";
import { languages } from "../../lib/shayari";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Shayari Dunia home">
        <span className="brand-mark" aria-hidden="true">श</span>
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
        <Link className="brand footer-brand" href="/">
          <span className="brand-mark" aria-hidden="true">श</span>
          <span><strong>Shayari Dunia</strong><small>Words worth sharing.</small></span>
        </Link>
        <p>Original Hindi shayari, Punjabi status and English quotes with images and clear meanings.</p>
      </div>
      <div className="footer-links">
        <Link href="/hindi">Hindi Shayari</Link>
        <Link href="/punjabi">Punjabi Status</Link>
        <Link href="/english">English Quotes</Link>
        <Link href="/#emotions">All emotions</Link>
      </div>
      <p className="copyright">© 2026 Shayari Dunia</p>
    </footer>
  );
}
