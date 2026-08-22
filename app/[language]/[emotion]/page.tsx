import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { QuoteGrid } from "../../components/QuoteGrid";
import { SiteFooter, SiteHeader } from "../../components/SiteHeader";
import {
  emotionHue,
  emotions,
  getEmotion,
  getPageDescription,
  getPageHeading,
  getQuotes,
  isLanguage,
  languages,
  languageSlugs,
  SITE_URL,
} from "../../../lib/shayari";

type PageProps = { params: Promise<{ language: string; emotion: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return languageSlugs.flatMap((language) =>
    emotions.map((item) => ({ language, emotion: item.slug })),
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { language, emotion } = await params;
  if (!isLanguage(language)) return {};
  const selectedEmotion = getEmotion(emotion);
  if (!selectedEmotion) return {};

  const heading = getPageHeading(language, selectedEmotion);
  const description = getPageDescription(language, selectedEmotion);
  const path = `/${language}/${selectedEmotion.slug}`;
  return {
    title: `${heading} with Images & Meaning`,
    description,
    alternates: {
      canonical: path,
      languages: {
        hi: `/hindi/${selectedEmotion.slug}`,
        pa: `/punjabi/${selectedEmotion.slug}`,
        en: `/english/${selectedEmotion.slug}`,
        "x-default": `/english/${selectedEmotion.slug}`,
      },
    },
    openGraph: {
      type: "article",
      title: heading,
      description,
      url: path,
      images: [
        {
          url: `/card/${language}/${selectedEmotion.slug}/1`,
          width: 1080,
          height: 1350,
          alt: `${heading} image`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: heading,
      description,
      images: [`/card/${language}/${selectedEmotion.slug}/1`],
    },
  };
}

export default async function EmotionCollection({ params }: PageProps) {
  const { language, emotion } = await params;
  if (!isLanguage(language)) notFound();
  const selectedEmotion = getEmotion(emotion);
  if (!selectedEmotion) notFound();

  const currentLanguage = languages[language];
  const heading = getPageHeading(language, selectedEmotion);
  const description = getPageDescription(language, selectedEmotion);
  const quotes = getQuotes(language, selectedEmotion);
  const related = emotions
    .filter((item) => item.slug !== selectedEmotion.slug)
    .slice(0, 8);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: heading,
        description,
        url: `${SITE_URL}/${language}/${selectedEmotion.slug}`,
        inLanguage: currentLanguage.code,
        dateModified: "2026-08-21",
        mainEntity: {
          "@type": "ItemList",
          numberOfItems: quotes.length,
          itemListElement: quotes.map((quote, index) => ({
            "@type": "ListItem",
            position: index + 1,
            item: {
              "@type": "CreativeWork",
              name: `${selectedEmotion.label[language]} ${index + 1}`,
              text: quote.text,
              inLanguage: currentLanguage.code,
              image: `${SITE_URL}${quote.imageUrl}`,
              url: `${SITE_URL}/${language}/${selectedEmotion.slug}#${quote.id}`,
              creator: { "@type": "Organization", name: "Shayari Dunia" },
            },
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Shayari Dunia", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: currentLanguage.collectionLabel, item: `${SITE_URL}/${language}` },
          { "@type": "ListItem", position: 3, name: selectedEmotion.label[language], item: `${SITE_URL}/${language}/${selectedEmotion.slug}` },
        ],
      },
    ],
  };

  return (
    <>
      <SiteHeader />
      <main lang={currentLanguage.code}>
        <section
          className="collection-hero"
          style={{ "--mood-hue": emotionHue(selectedEmotion.slug) } as CSSProperties}
        >
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Shayari Dunia</Link><span>/</span>
            <a href={`/${language}`}>{currentLanguage.nativeLabel}</a><span>/</span>
            <span>{selectedEmotion.label[language]}</span>
          </nav>
          <p className="eyebrow">{selectedEmotion.icon} {currentLanguage.nativeLabel} collection</p>
          <h1>{heading}</h1>
          <p>{description}</p>
          <div className="collection-meta">
            <span>18 original quotes</span>
            <span>18 downloadable images</span>
            <span>Meaning with every quote</span>
          </div>
        </section>

        <div className="collection-shell">
          <section className="collection-intro" aria-labelledby="collection-list-title">
            <div>
              <p className="eyebrow">Read · understand · share</p>
              <h2 id="collection-list-title">18 selected<br />{selectedEmotion.label[language]} lines</h2>
            </div>
            <div>
              <p>
                {currentLanguage.intro} This page keeps every quote, image and
                explanation together, so there is no duplicate detail-page clutter.
              </p>
              <nav className="language-switch" aria-label="Read this emotion in another language">
                {languageSlugs.map((item) => (
                  <a
                    aria-current={item === language ? "page" : undefined}
                    className={item === language ? "active" : ""}
                    href={`/${item}/${selectedEmotion.slug}`}
                    hrefLang={languages[item].code}
                    key={item}
                  >
                    {languages[item].code.toUpperCase()}
                  </a>
                ))}
              </nav>
            </div>
          </section>

          <QuoteGrid quotes={quotes} languageLabel={currentLanguage.label} />

          <section className="related-section" aria-labelledby="related-title">
            <div className="section-heading">
              <div><p className="eyebrow">Keep reading</p><h2 id="related-title">Related emotions</h2></div>
              <p>Har category me 18 image quotes aur unka clear meaning.</p>
            </div>
            <div className="related-grid">
              {related.map((item) => (
                <a href={`/${language}/${item.slug}`} key={item.slug}>
                  <span aria-hidden="true">{item.icon}</span>
                  <span>{item.label[language]}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ))}
            </div>
          </section>

          <section className="faq-section" aria-labelledby="collection-faq-title">
            <div><p className="eyebrow">About this collection</p><h2 id="collection-faq-title">Use, meaning and images.</h2></div>
            <div className="faq-list">
              <details open><summary>Is page par kitni images hain?</summary><p>Is collection me exactly 18 shayari images hain. Har image 1080 × 1350 ke 4:5 format me banayi gayi hai.</p></details>
              <details><summary>Explanation kahan milega?</summary><p>Har image ke neeche quote ka text aur Meaning section diya gaya hai. Meaning image ke andar छुपा nahi hai, isliye padhna आसान hai.</p></details>
              <details><summary>Kya same quote dusre URLs par repeat hota hai?</summary><p>Nahi. Is collection ka har text isi page ke ek permanent anchor se जुड़ा hai. Duplicate status, viral ya premium URLs nahi banaye gaye.</p></details>
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
