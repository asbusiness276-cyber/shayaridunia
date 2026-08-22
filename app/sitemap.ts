import type { MetadataRoute } from "next";
import {
  CONTENT_UPDATED_AT,
  emotions,
  languageSlugs,
  SITE_URL,
} from "../lib/shayari";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date(CONTENT_UPDATED_AT);
  const languagePages: MetadataRoute.Sitemap = languageSlugs.map((language) => ({
    url: `${SITE_URL}/${language}`,
    lastModified,
    changeFrequency: "weekly",
    priority: 0.9,
    alternates: {
      languages: {
        hi: `${SITE_URL}/hindi`,
        pa: `${SITE_URL}/punjabi`,
        en: `${SITE_URL}/english`,
      },
    },
  }));

  const collections: MetadataRoute.Sitemap = languageSlugs.flatMap((language) =>
    emotions.map((item) => ({
      url: `${SITE_URL}/${language}/${item.slug}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: {
        languages: {
          hi: `${SITE_URL}/hindi/${item.slug}`,
          pa: `${SITE_URL}/punjabi/${item.slug}`,
          en: `${SITE_URL}/english/${item.slug}`,
        },
      },
    })),
  );

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "daily",
      priority: 1,
    },
    ...languagePages,
    ...collections,
  ];
}
