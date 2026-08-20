import ShayariCard from '@/components/ShayariCard';
import shayariData from '@/data/shayaris.json';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

const validLangs = ['hindi', 'punjabi', 'english'];
const categoryNames: Record<string, string> = {
  love: 'Love',
  sad: 'Sad',
  attitude: 'Attitude',
  dosti: 'Dosti',
  morning: 'Good Morning',
  festival: 'Festival'
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { lang, slug } = resolvedParams;
  
  if (!validLangs.includes(lang) || !categoryNames[slug]) {
    return { title: 'Not Found' };
  }

  const catName = categoryNames[slug];
  const langName = lang.charAt(0).toUpperCase() + lang.slice(1);
  
  return {
    title: `Best ${catName} Shayari in ${langName} - Shayari Dunia`,
    description: `Explore our top collection of ${catName} Shayari in ${langName}. Heart touching poetry to express your feelings.`,
  };
}

export function generateStaticParams() {
  const params: { lang: string; slug: string }[] = [];
  for (const lang of validLangs) {
    for (const slug of Object.keys(categoryNames)) {
      params.push({ lang, slug });
    }
  }
  return params;
}

export default async function CategoryPage({ params }: Props) {
  const resolvedParams = await params;
  const { lang, slug } = resolvedParams;

  if (!validLangs.includes(lang) || !categoryNames[slug]) {
    notFound();
  }

  const categoryShayaris = shayariData.filter(s => s.language === lang && s.category === slug);
  const catName = categoryNames[slug];
  const langName = lang.charAt(0).toUpperCase() + lang.slice(1);

  return (
    <div className="bg-white pb-16">
      <div className="bg-pink-50 py-16 border-b border-pink-100 mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            {catName} Shayari in {langName}
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Beautiful and deep {catName.toLowerCase()} poetry expressed in {langName}. Read, share, and download the best collection for your status and stories.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categoryShayaris.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {categoryShayaris.map((shayari) => (
              <ShayariCard key={shayari.id} shayari={shayari} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500">
            No shayaris found in this category yet.
          </div>
        )}
      </div>
    </div>
  );
}
