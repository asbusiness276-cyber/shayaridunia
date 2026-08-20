import ShayariCard from '@/components/ShayariCard';
import shayariData from '@/data/shayaris.json';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const shayari = shayariData.find((s) => s.id === parseInt(resolvedParams.id));
  
  if (!shayari) {
    return { title: 'Shayari Not Found - Shayari Dunia' };
  }
  
  return {
    title: `${shayari.alt_text} - Shayari Dunia`,
    description: shayari.text.replace(/\n/g, ' ').slice(0, 150) + '...',
  };
}

// Generate static params for all shayaris so they are pre-built
export function generateStaticParams() {
  return shayariData.map((shayari) => ({
    id: shayari.id.toString(),
  }));
}

export default async function ShayariDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const shayari = shayariData.find((s) => s.id === parseInt(resolvedParams.id));

  if (!shayari) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {shayari.alt_text}
        </h1>
        <p className="text-gray-500">
          A beautiful {shayari.language} shayari. Read, share, and download.
        </p>
      </div>
      
      <div className="max-w-2xl mx-auto">
        <ShayariCard shayari={shayari} isDetail={true} />
      </div>
      
      <div className="mt-12 text-center">
        <a href={`/${shayari.language}`} className="text-pink-600 font-medium hover:underline">
          &larr; Back to more {shayari.language} shayaris
        </a>
      </div>
    </div>
  );
}
