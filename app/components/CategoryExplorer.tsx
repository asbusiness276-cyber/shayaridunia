"use client";

import { useMemo, useState } from "react";
import type { Emotion, LanguageSlug } from "../../lib/shayari";

type CategoryExplorerProps = {
  emotions: Emotion[];
  initialLanguage?: LanguageSlug;
  lockLanguage?: boolean;
};

const languageOptions: Array<{ slug: LanguageSlug; label: string }> = [
  { slug: "hindi", label: "हिंदी" },
  { slug: "punjabi", label: "ਪੰਜਾਬੀ" },
  { slug: "english", label: "English" },
];

export function CategoryExplorer({
  emotions,
  initialLanguage = "hindi",
  lockLanguage = false,
}: CategoryExplorerProps) {
  const [language, setLanguage] = useState<LanguageSlug>(initialLanguage);
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const normalized = query.trim().toLocaleLowerCase();
    if (!normalized) return emotions;
    return emotions.filter((item) =>
      `${item.label.hindi} ${item.label.punjabi} ${item.label.english} ${item.slug}`
        .toLocaleLowerCase()
        .includes(normalized),
    );
  }, [emotions, query]);

  return (
    <section className="explorer" aria-labelledby="explore-title">
      <div className="section-heading explorer-heading">
        <div>
          <p className="eyebrow">Explore every feeling</p>
          <h2 id="explore-title">Apna mood choose karein</h2>
        </div>
        <label className="search-field">
          <span className="sr-only">Search emotions</span>
          <span aria-hidden="true">⌕</span>
          <input
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Love, sad, yaari…"
            type="search"
            value={query}
          />
        </label>
      </div>

      {!lockLanguage && (
        <div className="language-tabs" aria-label="Choose language" role="tablist">
          {languageOptions.map((item) => (
            <button
              aria-selected={language === item.slug}
              className={language === item.slug ? "active" : ""}
              key={item.slug}
              onClick={() => setLanguage(item.slug)}
              role="tab"
              type="button"
            >
              {item.label}
            </button>
          ))}
        </div>
      )}

      <div className="category-grid">
        {visible.map((item) => (
          <a href={`/${language}/${item.slug}`} key={item.slug}>
            <span className="category-icon" aria-hidden="true">
              {item.icon}
            </span>
            <span>
              <strong>{item.label[language]}</strong>
              <small>18 images · meaning</small>
            </span>
            <span className="category-arrow" aria-hidden="true">↗</span>
          </a>
        ))}
      </div>

      {visible.length === 0 && (
        <p className="empty-state">Is search ke liye category nahi mili.</p>
      )}
    </section>
  );
}
