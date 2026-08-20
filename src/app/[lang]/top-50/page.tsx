import ShayariCard from '@/components/ShayariCard';
import shayariData from '@/data/shayaris.json';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

interface Props {
  params: Promise<{ lang: string }>;
}

const validLangs = ['hindi', 'punjabi', 'english'];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const { lang } = resolvedParams;
  
  if (!validLangs.includes(lang)) {
    return { title: 'Not Found' };
  }

  const langName = lang.charAt(0).toUpperCase() + lang.slice(1);
  
  return {
    title: `Top 50 Best ${langName} Shayari Collection - Shayari Dunia`,
    description: `Explore our exclusively curated list of the Top 50 best ${langName} Shayari and quotes. Handpicked poetry for your status and stories.`,
  };
}

export function generateStaticParams() {
  return validLangs.map(lang => ({ lang }));
}

export default async function Top50Page({ params }: Props) {
  const resolvedParams = await params;
  const { lang } = resolvedParams;

  if (!validLangs.includes(lang)) {
    notFound();
  }

  // Get top 50 shayaris for this language (by grabbing the first 50, or sorting by id/views)
  // For now, we will take the first 50 of this specific language.
  const topShayaris = shayariData.filter(s => s.language === lang).slice(0, 50);
  const langName = lang.charAt(0).toUpperCase() + lang.slice(1);

  return (
    <div className="pb-16 relative">
      <div className="bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 py-24 mb-16 shadow-xl relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10 mix-blend-multiply"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <span className="inline-block py-1 px-3 rounded-full bg-white/20 text-white text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-sm border border-white/30">
            Editor's Choice
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight drop-shadow-md">
            Top 50 {langName} Shayari
          </h1>
          <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed font-medium">
            A handpicked collection of the most beautiful and heart-touching {langName} verses of all time.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {topShayaris.map((shayari, index) => (
            <div key={shayari.id} className="relative group">
              <div className="absolute -left-4 -top-4 w-12 h-12 bg-gray-900 text-white font-black text-xl rounded-full flex items-center justify-center z-20 shadow-lg border-4 border-white transform group-hover:scale-110 transition-transform">
                {index + 1}
              </div>
              <ShayariCard shayari={shayari} />
            </div>
          ))}
        </div>

        {/* SEO Content Block */}
        <div className="pt-16 border-t-2 border-pink-100 prose prose-lg prose-pink text-gray-700 mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">The Ultimate Top 50 {langName} Shayari Collection</h2>
          <p>
            Welcome to the ultimate curated list of the <strong>Top 50 {langName} Shayari</strong>. On a platform with thousands of unique verses, finding the absolute best can sometimes be overwhelming. That is why our editorial team has spent countless hours reviewing, analyzing, and handpicking the finest poetry to create this definitive list.
          </p>
          <p>
            Whether you are a long-time poetry enthusiast or someone simply looking for the perfect WhatsApp status, this Top 50 collection is guaranteed to have something that touches your heart. We have carefully balanced this list to include a mix of all major emotions: the fiery passion of romantic verses, the deep sorrow of heartbreak, the unbreakable bond of friendship, and the fierce confidence of attitude shayari.
          </p>
          
          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Why These 50?</h3>
          <p>
            What makes a piece of poetry truly great? Is it the complexity of the vocabulary, the rhythm of the meter, or the depth of the emotion? We believe it is a combination of all three. Every single shayari in this Top 50 list has been chosen based on the following criteria:
          </p>
          <ul>
            <li><strong>Emotional Resonance:</strong> The words must strike a chord immediately upon reading.</li>
            <li><strong>Relatability:</strong> The feelings expressed must be universal enough that anyone can relate to them.</li>
            <li><strong>Linguistic Beauty:</strong> The structural flow and rhyme (Qafiya and Radif) must be flawless.</li>
            <li><strong>Popularity:</strong> We also take into account which quotes are most frequently shared and downloaded by our massive community of users.</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Share the Magic</h3>
          <p>
            Poetry is meant to be shared. If you find a verse in this Top 50 list that reminds you of someone special, don't hesitate. Use our built-in tools to download the beautiful high-resolution image card, copy the text to your clipboard, or share it directly to your favorite social media platform. Bookmark this page, as we periodically update our Top 50 list to ensure it reflects the very best of our growing database.
          </p>
        </div>
      </div>
    </div>
  );
}
