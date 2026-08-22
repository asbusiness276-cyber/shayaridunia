import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { CSSProperties } from "react";
import { CategoryExplorer } from "../components/CategoryExplorer";
import { QuoteGrid } from "../components/QuoteGrid";
import { SiteFooter, SiteHeader } from "../components/SiteHeader";
import {
  emotions,
  getFeaturedQuotes,
  isLanguage,
  languages,
  languageSlugs,
  SITE_URL,
} from "../../lib/shayari";

type PageProps = { params: Promise<{ language: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return languageSlugs.map((language) => ({ language }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { language } = await params;
  if (!isLanguage(language)) return {};
  const current = languages[language];
  const path = `/${language}`;
  return {
    title: current.collectionLabel,
    description: current.intro,
    alternates: {
      canonical: path,
      languages: {
        hi: "/hindi",
        pa: "/punjabi",
        en: "/english",
        "x-default": "/english",
      },
    },
    openGraph: {
      title: current.collectionLabel,
      description: current.intro,
      url: path,
      images: [{ url: `/card/${language}/love/1`, width: 1080, height: 1350 }],
    },
    twitter: {
      card: "summary_large_image",
      title: current.collectionLabel,
      description: current.intro,
      images: [`/card/${language}/love/1`],
    },
  };
}

export default async function LanguageHub({ params }: PageProps) {
  const { language } = await params;
  if (!isLanguage(language)) notFound();

  const current = languages[language];
  const quotes = getFeaturedQuotes(language);
  const hue = language === "hindi" ? 338 : language === "punjabi" ? 272 : 17;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: current.collectionLabel,
    description: current.intro,
    url: `${SITE_URL}/${language}`,
    inLanguage: current.code,
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: emotions.length,
      itemListElement: emotions.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.label[language],
        url: `${SITE_URL}/${language}/${item.slug}`,
      })),
    },
  };

  return (
    <>
      <SiteHeader />
      <main lang={current.code}>
        <section
          className="collection-hero hub-hero"
          style={{ "--mood-hue": hue } as CSSProperties}
        >
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link href="/">Shayari Dunia</Link><span>/</span><span>{current.nativeLabel}</span>
          </nav>
          <p className="eyebrow">{current.nativeLabel} · All emotions</p>
          <h1>{current.collectionLabel}</h1>
          <p>{current.intro}</p>
          <div className="collection-meta">
            <span>{emotions.length} emotions</span>
            <span>18 images per page</span>
            <span>Meaning included</span>
          </div>
        </section>

        <div className="collection-shell">
          <section className="hub-category-section" aria-label={`${current.label} categories`}>
            <CategoryExplorer
              emotions={emotions}
              initialLanguage={language}
              lockLanguage
            />
          </section>

          <section className="hub-featured" aria-labelledby="language-featured-title">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Editor’s selection</p>
                <h2 id="language-featured-title">18 featured {current.nativeLabel} quotes</h2>
              </div>
              <p>Different emotions, one clean collection. Read the meaning or download any image.</p>
            </div>
            <QuoteGrid quotes={quotes} languageLabel={current.label} />
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
