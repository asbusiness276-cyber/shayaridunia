import ShayariCard from '@/components/ShayariCard';
import shayariData from '@/data/shayaris.json';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { generateSlug, getIdFromSlug } from '@/utils/slugify';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const id = getIdFromSlug(resolvedParams.slug);
  const shayari = shayariData.find((s) => s.id === id);
  
  if (!shayari) {
    return { title: 'Shayari Not Found - Shayari Dunia' };
  }
  
  const langUpper = shayari.language.charAt(0).toUpperCase() + shayari.language.slice(1);
  const catUpper = shayari.category.charAt(0).toUpperCase() + shayari.category.slice(1);
  const firstLine = shayari.text.split('\n')[0].replace(/[^\w\s\u0900-\u097F]/gi, '').trim();

  return {
    title: `${firstLine} | Best ${langUpper} ${catUpper} Shayari & Status - Shayari Dunia`,
    description: `Read and download this beautiful ${langUpper} ${catUpper} Shayari: "${shayari.text.replace(/\n/g, ' ').slice(0, 100)}...". Share the best quotes on WhatsApp, Instagram, and Facebook.`,
    keywords: `${langUpper} shayari, ${catUpper} shayari in ${langUpper}, ${firstLine}, best ${catUpper} status, shayari dunia`,
    openGraph: {
      title: `${firstLine} | ${langUpper} ${catUpper} Shayari`,
      description: shayari.text.replace(/\n/g, ' '),
      images: [shayari.image],
      type: 'article',
    },
  };
}

export function generateStaticParams() {
  return shayariData.map((shayari) => ({
    slug: generateSlug(shayari),
  }));
}

export default async function ShayariDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const id = getIdFromSlug(resolvedParams.slug);
  const shayari = shayariData.find((s) => s.id === id);

  if (!shayari) {
    notFound();
  }

  const langUpper = shayari.language.charAt(0).toUpperCase() + shayari.language.slice(1);
  const catUpper = shayari.category.charAt(0).toUpperCase() + shayari.category.slice(1);
  const expectedSlug = generateSlug(shayari);

  // Generate JSON-LD Structured Data for Google Rich Snippets
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    'name': `${langUpper} ${catUpper} Shayari`,
    'text': shayari.text.replace(/\n/g, ' '),
    'inLanguage': shayari.language,
    'author': {
      '@type': 'Organization',
      'name': 'Shayari Dunia'
    },
    'image': shayari.image,
    'keywords': `${langUpper} shayari, ${catUpper} shayari`,
    'url': `https://shayariduniacom.vercel.app/shayari/${expectedSlug}`
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Inject JSON-LD into the head */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="mb-8 text-center">
        <span className="inline-block px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-bold uppercase tracking-widest mb-4">
          {langUpper} • {catUpper}
        </span>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
          {shayari.alt_text || `Beautiful ${langUpper} ${catUpper} Shayari`}
        </h1>
        <p className="text-gray-500 text-lg">
          Download and share this beautiful poetry with your loved ones.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <ShayariCard shayari={shayari} isDetail={true} />
      </div>
      
      <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Looking for more?</h3>
        <p className="text-gray-600 mb-6">
          Explore our massive collection of thousands of handpicked shayaris.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a href={`/${shayari.language}`} className="px-6 py-3 bg-pink-600 text-white font-bold rounded-lg hover:bg-pink-700 transition-colors">
            All {langUpper} Shayari
          </a>
          <a href={`/${shayari.language}/category/${shayari.category}`} className="px-6 py-3 bg-white border border-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-50 transition-colors">
            More {catUpper} Quotes
          </a>
        </div>
      </div>
    </div>
  );
}
