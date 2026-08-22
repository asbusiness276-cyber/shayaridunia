import Link from "next/link";
import { CategoryExplorer } from "./components/CategoryExplorer";
import { QuoteGrid } from "./components/QuoteGrid";
import { SiteFooter, SiteHeader } from "./components/SiteHeader";
import { HomeSEOContent } from "./components/HomeSEOContent";
import {
  emotions,
  getFeaturedQuotes,
  languages,
  SITE_URL,
} from "../lib/shayari";

export default function Home() {
  const featured = getFeaturedQuotes();
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: "Shayari Dunia",
        url: SITE_URL,
        inLanguage: ["hi", "pa", "en"],
        description:
          "Original Hindi shayari, Punjabi status and English quotes with images and meanings.",
      },
      {
        "@type": "Organization",
        name: "Shayari Dunia",
        url: SITE_URL,
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main>
        <section className="hero">
          <div className="hero-copy">
            <p className="eyebrow"><span>✦</span> Shayari · Status · Quotes</p>
            <h1>
              Har ehsaas ko milen
              <span>khoobsurat alfaaz.</span>
            </h1>
            <p className="hero-lede">
              Original Hindi shayari, authentic Punjabi status aur meaningful
              English quotes. Har quote ke saath share-ready image aur simple
              explanation.
            </p>
            <div className="hero-actions">
              <a className="button primary" href="#emotions">Explore emotions <span>↓</span></a>
              <Link className="button secondary" href="/hindi/love">Love Shayari <span>♡</span></Link>
            </div>
            <dl className="hero-stats">
              <div><dt>03</dt><dd>Languages</dd></div>
              <div><dt>{String(emotions.length).padStart(2, "0")}</dt><dd>Emotions</dd></div>
              <div><dt>18</dt><dd>Images per page</dd></div>
            </dl>
          </div>

          <div className="hero-gallery" aria-label="Featured quote cards">
            <article className="floating-card card-one" lang="hi">
              <span className="floating-label">हिंदी · प्यार</span>
              <blockquote>कुछ रिश्ते नाम से नहीं,<br />एहसास से पहचाने जाते हैं।</blockquote>
              <small>Shayari Dunia</small>
            </article>
            <article className="floating-card card-two" lang="pa">
              <span className="floating-label">ਪੰਜਾਬੀ · ਯਾਰੀ</span>
              <blockquote>ਸੱਚੇ ਯਾਰ ਰਾਹ ਨਹੀਂ ਪੁੱਛਦੇ,<br />ਬਸ ਨਾਲ ਤੁਰ ਪੈਂਦੇ ਨੇ।</blockquote>
              <small>Shayari Dunia</small>
            </article>
            <article className="floating-card card-three" lang="en">
              <span className="floating-label">English · Life</span>
              <blockquote>Grow quietly.<br />Let your peace make the noise.</blockquote>
              <small>Shayari Dunia</small>
            </article>
            <span className="hero-orbit orbit-one" aria-hidden="true">♡</span>
            <span className="hero-orbit orbit-two" aria-hidden="true">✦</span>
          </div>
        </section>

        <section className="language-strip" aria-label="Language collections">
          {Object.values(languages).map((language, index) => (
            <a href={`/${language.slug}`} key={language.slug}>
              <span className="language-index">0{index + 1}</span>
              <span>
                <strong>{language.collectionLabel}</strong>
                <small>{language.nativeLabel} collection</small>
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </section>

        <HomeSEOContent />

        <div id="emotions" className="page-shell">
          <CategoryExplorer emotions={emotions} />

          <section className="featured-section" aria-labelledby="featured-title">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Freshly written</p>
                <h2 id="featured-title">Aaj ke 18 featured ehsaas</h2>
              </div>
              <p>Hindi, Punjabi aur English se handpicked image quotes.</p>
            </div>
            <QuoteGrid quotes={featured} />
          </section>

          <section className="promise-section">
            <div className="promise-intro">
              <p className="eyebrow">Why Shayari Dunia</p>
              <h2>Sirf lines nahi.<br />Har line ka matlab.</h2>
            </div>
            <div className="promise-grid">
              <article><span>01</span><h3>Original writing</h3><p>Har collection ke liye alag shayari. Ek hi quote ko multiple URLs par repeat nahi kiya gaya.</p></article>
              <article><span>02</span><h3>Image ready</h3><p>Har shayari ka 4:5 share card, Instagram, WhatsApp aur stories ke liye ready.</p></article>
              <article><span>03</span><h3>Clear meaning</h3><p>Har quote ke neeche simple explanation, taaki lafzon ka context bhi samajh aaye.</p></article>
            </div>
          </section>

          <section className="faq-section" aria-labelledby="faq-title">
            <div>
              <p className="eyebrow">Common questions</p>
              <h2 id="faq-title">Shayari share karna ab simple hai.</h2>
            </div>
            <div className="faq-list">
              <details open><summary>Kya images free download ho sakti hain?</summary><p>Haan. Har shayari card par Image button se 1080 × 1350 share card download kiya ja sakta hai.</p></details>
              <details><summary>Kya Hindi, Punjabi aur English teeno available hain?</summary><p>Haan. Har major emotion ke liye teeno languages me dedicated collection pages hain.</p></details>
              <details><summary>Ek page par kitni shayari hain?</summary><p>Har collection page par 18 shayari images hain, jisse page fast aur comfortable rehta hai.</p></details>
            </div>
          </section>
        </div>
      </main>
      <SiteFooter />
      <script
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        type="application/ld+json"
      />
    </>
  );
}
