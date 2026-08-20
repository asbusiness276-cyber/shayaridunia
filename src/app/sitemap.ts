import { MetadataRoute } from 'next';
import shayariData from '@/data/shayaris.json';

const BASE_URL = 'https://shayariduniacom.vercel.app';

export default function sitemap(): MetadataRoute.Sitemap {
  const sitemapData: MetadataRoute.Sitemap = [];

  // 1. Static Pages
  const staticPages = ['', '/about', '/contact', '/privacy', '/terms'];
  staticPages.forEach((page) => {
    sitemapData.push({
      url: `${BASE_URL}${page}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: page === '' ? 1.0 : 0.6,
    });
  });

  // 2. Language & Top-50 Pages
  const languages = ['hindi', 'punjabi', 'english'];
  languages.forEach((lang) => {
    sitemapData.push({
      url: `${BASE_URL}/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    });
    sitemapData.push({
      url: `${BASE_URL}/${lang}/top-50`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    });
  });

  // 3. Category Pages
  const categories = ['love', 'sad', 'attitude', 'dosti', 'morning', 'festival'];
  languages.forEach((lang) => {
    categories.forEach((cat) => {
      sitemapData.push({
        url: `${BASE_URL}/${lang}/category/${cat}`,
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      });
    });
  });

  // 4. Individual Shayari Pages (900+ Pages)
  shayariData.forEach((shayari) => {
    sitemapData.push({
      url: `${BASE_URL}/shayari/${shayari.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    });
  });

  return sitemapData;
}
