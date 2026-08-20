export interface Collection {
  id: string;
  title: string;
  description: string;
  image: string;
  categories: string[];
}

export const collectionsData: Collection[] = [
  {
    id: 'whatsapp-status-attitude',
    title: 'WhatsApp Status & Attitude',
    description: 'The best short, punchy attitude shayaris and two-liners perfect for your daily WhatsApp and Instagram status.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953eb1b5ce?w=800&auto=format&fit=crop&q=80',
    categories: ['attitude', 'two-line']
  },
  {
    id: 'true-love-romance',
    title: 'True Love & Romance',
    description: 'Deep, emotional love shayaris to express your feelings and praise the beauty of your soulmate.',
    image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=80',
    categories: ['love', 'tareef']
  },
  {
    id: 'broken-heart-sad',
    title: 'Broken Heart & Sadness',
    description: 'A deeply emotional collection of sad quotes, separation, and missing someone you truly cared for.',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=80',
    categories: ['sad', 'judai', 'yaad']
  },
  {
    id: 'good-morning-vibes',
    title: 'Good Morning Vibes',
    description: 'Start your day with positivity, fresh nature, and a cup of chai. Beautiful good morning quotes to share.',
    image: 'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=80',
    categories: ['morning', 'chai', 'nature']
  },
  {
    id: 'friends-family-bonds',
    title: 'Friends & Family Bonds',
    description: 'Celebrate the unbreakable bonds of true friendship, childhood memories, and family love.',
    image: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=800&auto=format&fit=crop&q=80',
    categories: ['dosti', 'family', 'bachpan']
  }
];
