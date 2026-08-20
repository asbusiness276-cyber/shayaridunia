const fs = require('fs');
const path = require('path');
const { transliterate } = require('transliteration');

const moreShayaris = [
  // Hindi
  { text: "आज मौसम में अजीब सी बात है,\nलगता है जैसे तुम्हारी यादों की बारात है।", category: 'barish', language: 'hindi', alt_text: 'Hindi Barish Shayari' },
  { text: "बचपन की वो गलियां बहुत याद आती हैं,\nजहाँ हम बिना किसी फिक्र के खेलते थे।", category: 'bachpan', language: 'hindi', alt_text: 'Hindi Bachpan Shayari' },
  { text: "सुबह की ठंडी हवा और एक कप चाय,\nज़िन्दगी का असली मज़ा तो इसी में है।", category: 'chai', language: 'hindi', alt_text: 'Hindi Chai Quotes' },
  { text: "परिवार से बड़ा कोई धन नहीं,\nऔर माँ-बाप के आशीर्वाद से बड़ा कोई वरदान नहीं।", category: 'family', language: 'hindi', alt_text: 'Hindi Family Shayari' },
  { text: "देश के लिए मर मिटना ही सच्ची शहादत है,\nमेरा भारत हमेशा महान रहेगा।", category: 'desh-prem', language: 'hindi', alt_text: 'Hindi Desh Prem Shayari' },
  
  // Punjabi
  { text: "ਸੱਚਾ ਪਿਆਰ ਕਦੇ ਖਤਮ ਨਹੀਂ ਹੁੰਦਾ,\nਬਸ ਵਕਤ ਦੇ ਨਾਲ ਹੋਰ ਗੂੜ੍ਹਾ ਹੋ ਜਾਂਦਾ ਹੈ।", category: 'love', language: 'punjabi', alt_text: 'Punjabi Love Quotes' },
  { text: "ਜੁਦਾਈ ਦਾ ਦਰਦ ਉਹੀ ਜਾਣਦਾ ਹੈ,\nਜਿਸਨੇ ਆਪਣਾ ਕੋਈ ਪਿਆਰਾ ਗਵਾਇਆ ਹੋਵੇ।", category: 'judai', language: 'punjabi', alt_text: 'Punjabi Judai Shayari' },
  { text: "ਤੇਰੀ ਤਾਰੀਫ਼ ਵਿੱਚ ਕੀ ਕਹਾਂ,\nਲਫ਼ਜ਼ ਵੀ ਘੱਟ ਪੈ ਜਾਂਦੇ ਨੇ ਤੇਰਾ ਹੁਸਨ ਬਿਆਨ ਕਰਨ ਲਈ।", category: 'tareef', language: 'punjabi', alt_text: 'Punjabi Tareef Shayari' },
  { text: "ਬਚਪਨ ਦੀਆਂ ਉਹ ਮਿੱਠੀਆਂ ਯਾਦਾਂ,\nਅੱਜ ਵੀ ਮੇਰੇ ਚਿਹਰੇ ਤੇ ਮੁਸਕਾਨ ਲੈ ਆਉਂਦੀਆਂ ਨੇ।", category: 'bachpan', language: 'punjabi', alt_text: 'Punjabi Childhood Memories' },
  { text: "ਰਾਤ ਦੀ ਚਾਨਣੀ ਵਿੱਚ ਤੇਰੀ ਯਾਦ ਦਾ ਸਹਾਰਾ ਹੈ,\nਬਸ ਇਹੋ ਮੇਰੀ ਜ਼ਿੰਦਗੀ ਦਾ ਗੁਜ਼ਾਰਾ ਹੈ।", category: 'night', language: 'punjabi', alt_text: 'Punjabi Good Night Shayari' },

  // English
  { text: "The rain reminds me of the tears we shed,\nBut also of the rainbows that lie ahead.", category: 'barish', language: 'english', alt_text: 'English Rain Quotes' },
  { text: "Childhood is the most beautiful of all life's seasons.", category: 'bachpan', language: 'english', alt_text: 'English Childhood Quotes' },
  { text: "A cup of tea solves everything.", category: 'chai', language: 'english', alt_text: 'English Tea Lovers Quotes' },
  { text: "Family is not an important thing,\nIt is everything.", category: 'family', language: 'english', alt_text: 'English Family Quotes' },
  { text: "Patriotism is not short, frenzied outbursts of emotion,\nBut the tranquil and steady dedication of a lifetime.", category: 'desh-prem', language: 'english', alt_text: 'English Patriotism Quotes' }
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
