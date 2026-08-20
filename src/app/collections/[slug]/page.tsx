import ShayariCard from '@/components/ShayariCard';
import shayariData from '@/data/shayaris.json';
import { collectionsData } from '@/data/collections';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const collection = collectionsData.find(c => c.id === resolvedParams.slug);
  
  if (!collection) {
    return { title: 'Not Found' };
  }

  return {
    title: `${collection.title} - Shayari Dunia`,
    description: collection.description,
  };
}

export function generateStaticParams() {
  return collectionsData.map(c => ({
    slug: c.id
  }));
}

export default async function SingleCollectionPage({ params }: Props) {
  const resolvedParams = await params;
  const collection = collectionsData.find(c => c.id === resolvedParams.slug);

  if (!collection) {
    notFound();
  }

  // Filter shayaris based on the collection's categories
  // Note: We show across all languages (Hindi, Punjabi, English) since it's a unified collection
  const collectionShayaris = shayariData.filter(s => collection.categories.includes(s.category));

  return (
    <div className="bg-gray-50 min-h-screen pb-16">
      {/* Hero Header */}
      <div 
        className="relative py-24 mb-12 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('${collection.image}')` }}
      >
        <div className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="mb-6 flex justify-center">
             <Link href="/collections" className="inline-flex items-center text-white/80 hover:text-white transition-colors bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/20 backdrop-blur-md">
               <ArrowLeft className="w-4 h-4 mr-2" /> Back to Collections
             </Link>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg tracking-tight">
            {collection.title}
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed drop-shadow">
            {collection.description}
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {collectionShayaris.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {collectionShayaris.map((shayari) => (
              <ShayariCard key={shayari.id} shayari={shayari} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-500 bg-white rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-2">No Shayaris Found</h3>
            <p>We are still adding content to this collection. Check back soon!</p>
          </div>
        )}
      </div>
    </div>
  );
}
