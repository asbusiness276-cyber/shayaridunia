const fs = require('fs');
const path = require('path');
const { transliterate } = require('transliteration');

const moreShayaris = [
  // Hindi
  { text: "तेरी मुस्कान से ही तो मेरी दुनिया में रौशनी है,\nतू नहीं तो ये ज़िन्दगी भी कितनी अधूरी है।", category: 'love', language: 'hindi', alt_text: 'Hindi Love Shayari' },
  { text: "वक्त के साथ सब बदल जाते हैं,\nसिर्फ यादें हैं जो हमेशा साथ रहती हैं।", category: 'yaad', language: 'hindi', alt_text: 'Hindi Yaad Shayari' },
  { text: "हम वो नहीं जो किसी के पीछे खड़े हों,\nहमारी तो जगह ही सबसे आगे होती है।", category: 'attitude', language: 'hindi', alt_text: 'Hindi Attitude Status' },
  { text: "दोस्ती वो नहीं जो रोज़ मिले,\nदोस्ती वो है जो दिल से दिल मिलाये।", category: 'dosti', language: 'hindi', alt_text: 'Hindi Dosti Shayari' },
  { text: "सफर ज़िन्दगी का बहुत सुहाना है,\nअगर साथ चलने वाला कोई अपना है।", category: 'life', language: 'hindi', alt_text: 'Hindi Life Quotes' },
  
  // Punjabi
  { text: "ਤੇਰੇ ਬਿਨਾਂ ਇਹ ਦੁਨੀਆਂ ਫਿੱਕੀ ਲੱਗਦੀ ਐ,\nਤੂੰ ਹੀ ਤਾਂ ਮੇਰੀ ਜ਼ਿੰਦਗੀ ਦੀ ਰੌਣਕ ਐ।", category: 'love', language: 'punjabi', alt_text: 'Punjabi Love Shayari' },
  { text: "ਯਾਰਾਂ ਨਾਲ ਹੀ ਤਾਂ ਮਹਿਫ਼ਿਲਾਂ ਸਜਦੀਆਂ ਨੇ,\nਕੱਲੇ ਬਹਿ ਕੇ ਤਾਂ ਸਿਰਫ਼ ਯਾਦਾਂ ਆਉਂਦੀਆਂ ਨੇ।", category: 'dosti', language: 'punjabi', alt_text: 'Punjabi Dosti Shayari' },
  { text: "ਅਸੀਂ ਆਪਣੀ ਮਰਜ਼ੀ ਦੇ ਮਾਲਕ ਆਂ,\nਕਿਸੇ ਦੇ ਇਸ਼ਾਰਿਆਂ ਤੇ ਨੱਚਣਾ ਸਾਨੂੰ ਨਹੀਂ ਆਉਂਦਾ।", category: 'attitude', language: 'punjabi', alt_text: 'Punjabi Attitude Status' },
  { text: "ਜ਼ਿੰਦਗੀ ਦਾ ਹਰ ਪਲ ਖੁੱਲ ਕੇ ਜੀਓ,\nਕੱਲ੍ਹ ਦਾ ਕੀ ਪਤਾ ਕਿਸਨੇ ਵੇਖਿਆ ਐ।", category: 'life', language: 'punjabi', alt_text: 'Punjabi Life Quotes' },
  { text: "ਸਵੇਰ ਦੀ ਚਾਹ ਤੇ ਤੇਰੀ ਯਾਦ,\nਮੇਰੇ ਦਿਨ ਦੀ ਸ਼ੁਰੂਆਤ ਲਈ ਬਹੁਤ ਐ।", category: 'chai', language: 'punjabi', alt_text: 'Punjabi Chai Shayari' },

  // English
  { text: "In a sea of people,\nMy eyes will always search for you.", category: 'love', language: 'english', alt_text: 'English Love Quotes' },
  { text: "True friends are never apart,\nMaybe in distance but never in heart.", category: 'dosti', language: 'english', alt_text: 'English Friendship Quotes' },
  { text: "I don't have an attitude problem,\nI just have a personality you can't handle.", category: 'attitude', language: 'english', alt_text: 'English Attitude Status' },
  { text: "Life is what happens when you're busy making other plans.", category: 'life', language: 'english', alt_text: 'English Life Quotes' },
  { text: "Success is not final, failure is not fatal:\nIt is the courage to continue that counts.", category: 'motivational', language: 'english', alt_text: 'English Motivational Quotes' }
];

const unsplashImages = [
  'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1510253687831-0f8cdfeea9ab?w=800&auto=format&fit=crop&q=60'
];

const filePath = path.join(__dirname, 'src', 'data', 'shayaris.json');
const currentData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
const highestId = Math.max(...currentData.map(s => s.id));

const formattedNew = moreShayaris.map((item, index) => {
  let firstLine = item.text.split('\n')[0].trim();
  let baseSlug = '';
  
  if (item.language === 'punjabi') {
    baseSlug = `punjabi-${item.category}-${highestId + index}`;
  } else {
    firstLine = firstLine.replace(/[^\w\s\u0900-\u097F]/gi, '');
    baseSlug = transliterate(firstLine).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  }
  
  const id = highestId + 1 + index;
  
  return {
    id: id,
    language: item.language,
    text: item.text,
    author: 'Unknown',
    image: unsplashImages[index % unsplashImages.length],
    category: item.category,
    alt_text: item.alt_text,
    slug: `${baseSlug}-best-${item.category}-shayari-${item.language}-${id}`
  };
});

currentData.unshift(...formattedNew);

fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), 'utf8');
console.log(`Added ${formattedNew.length} new shayaris!`);
