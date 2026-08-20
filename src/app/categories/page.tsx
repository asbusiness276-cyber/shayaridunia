import Link from 'next/link';
import { Metadata } from 'next';
import { Heart, Frown, Sparkles, Users, UserMinus, Clock, Star, Flame, Droplets, Coffee, MapPin, Home, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'All Shayari Categories - Shayari Dunia',
  description: 'Browse all shayari categories including Love, Sad, Attitude, Dosti, Chai, Barish, Life, and many more. The ultimate collection of Hindi and Punjabi poetry.',
};

const categoryGroups = [
  {
    title: "Emotions & Feelings",
    description: "Express what's in your heart with these deep emotional verses.",
    items: [
      { id: 'love', name: 'Love Shayari', icon: Heart, color: 'text-red-500', bg: 'bg-red-50' },
      { id: 'sad', name: 'Sad Shayari', icon: Frown, color: 'text-blue-500', bg: 'bg-blue-50' },
      { id: 'attitude', name: 'Attitude Status', icon: Flame, color: 'text-orange-500', bg: 'bg-orange-50' },
      { id: 'dosti', name: 'Dosti & Friendship', icon: Users, color: 'text-green-500', bg: 'bg-green-50' },
      { id: 'judai', name: 'Judai (Separation)', icon: UserMinus, color: 'text-indigo-500', bg: 'bg-indigo-50' },
      { id: 'yaad', name: 'Yaad (Missing You)', icon: Clock, color: 'text-purple-500', bg: 'bg-purple-50' },
      { id: 'tareef', name: 'Tareef (Praise)', icon: Star, color: 'text-yellow-500', bg: 'bg-yellow-50' }
    ]
  },
  {
    title: "Life & Nature",
    description: "Poetry that reflects on the journey of life and the beauty of nature.",
    items: [
      { id: 'life', name: 'Life (Zindagi)', icon: BookOpen, color: 'text-teal-500', bg: 'bg-teal-50' },
      { id: 'motivational', name: 'Motivational', icon: Sparkles, color: 'text-yellow-600', bg: 'bg-yellow-50' },
      { id: 'nature', name: 'Nature Shayari', icon: Droplets, color: 'text-emerald-500', bg: 'bg-emerald-50' },
      { id: 'bachpan', name: 'Bachpan (Childhood)', icon: Heart, color: 'text-pink-500', bg: 'bg-pink-50' },
      { id: 'buddapa', name: 'Buddapa (Old Age)', icon: Clock, color: 'text-gray-500', bg: 'bg-gray-50' },
      { id: 'barish', name: 'Barish (Rain)', icon: Droplets, color: 'text-blue-400', bg: 'bg-blue-50' },
      { id: 'chai', name: 'Chai (Tea Lovers)', icon: Coffee, color: 'text-amber-700', bg: 'bg-amber-50' }
    ]
  },
  {
    title: "Greetings, Events & More",
    description: "Perfect wishes for every occasion and relationship.",
    items: [
      { id: 'morning', name: 'Good Morning', icon: Star, color: 'text-orange-400', bg: 'bg-orange-50' },
      { id: 'night', name: 'Good Night', icon: Star, color: 'text-indigo-800', bg: 'bg-indigo-50' },
      { id: 'festival', name: 'Festival Wishes', icon: Sparkles, color: 'text-red-600', bg: 'bg-red-50' },
      { id: 'family', name: 'Family Relations', icon: Home, color: 'text-cyan-600', bg: 'bg-cyan-50' },
      { id: 'desh-prem', name: 'Desh Prem (Patriotism)', icon: MapPin, color: 'text-green-700', bg: 'bg-green-50' },
      { id: 'two-line', name: 'Two Line Shayari', icon: BookOpen, color: 'text-gray-800', bg: 'bg-gray-100' }
    ]
  }
];

export default function CategoriesPage() {
  return (
    <div className="pb-16 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-br from-pink-600 to-purple-700 py-20 mb-12 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&q=80')] bg-cover opacity-10 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">Browse All Categories</h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Discover thousands of beautiful shayaris neatly organized into {categoryGroups.reduce((acc, curr) => acc + curr.items.length, 0)} handpicked categories.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {categoryGroups.map((group, groupIdx) => (
          <div key={groupIdx} className="mb-16">
            <div className="mb-8 border-b border-gray-200 pb-4">
              <h2 className="text-3xl font-bold text-gray-900">{group.title}</h2>
              <p className="text-gray-600 mt-2">{group.description}</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {group.items.map((cat) => (
                <div key={cat.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 overflow-hidden group">
                  <div className={`p-6 ${cat.bg} h-full flex flex-col items-center text-center`}>
                    <div className={`w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 transform group-hover:scale-110 transition-transform ${cat.color}`}>
                      <cat.icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{cat.name}</h3>
                    <div className="mt-4 flex gap-2 w-full justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <Link href={`/hindi/category/${cat.id}`} className="px-3 py-1 bg-white text-gray-700 text-xs font-bold rounded-full shadow hover:text-pink-600">Hindi</Link>
                      <Link href={`/punjabi/category/${cat.id}`} className="px-3 py-1 bg-white text-gray-700 text-xs font-bold rounded-full shadow hover:text-pink-600">Punjabi</Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
