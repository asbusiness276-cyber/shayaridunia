import Link from 'next/link';
import { Metadata } from 'next';
import { collectionsData } from '@/data/collections';
import { Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Curated Shayari Collections - Shayari Dunia',
  description: 'Explore our specially curated collections of Shayaris, grouping the best verses for WhatsApp status, true love, broken hearts, and more.',
};

export default function CollectionsPage() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header Section */}
      <div className="bg-white py-16 border-b border-gray-100 shadow-sm mb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center justify-center p-3 bg-pink-100 text-pink-600 rounded-full mb-6">
            <Layers className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">
            Curated Collections
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We have handpicked and grouped the best shayaris across different themes and categories so you can find exactly what you need in one place.
          </p>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collectionsData.map((collection) => (
            <Link 
              key={collection.id} 
              href={`/collections/${collection.id}`}
              className="group relative rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-[400px]"
            >
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url('${collection.image}')` }}
              ></div>
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
              
              <div className="relative z-10 p-8 flex flex-col justify-end h-full">
                <div className="mb-3 flex flex-wrap gap-2">
                  {collection.categories.map(cat => (
                    <span key={cat} className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold uppercase tracking-wider rounded-full border border-white/30">
                      {cat}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl font-extrabold text-white mb-3 leading-tight">{collection.title}</h2>
                <p className="text-gray-200 text-sm leading-relaxed">{collection.description}</p>
                <div className="mt-6 flex items-center text-pink-400 font-bold group-hover:text-pink-300 transition-colors">
                  Explore Collection 
                  <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-2 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
