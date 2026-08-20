const fs = require('fs');
const path = require('path');
const { transliterate } = require('transliteration');

const moreShayaris = [
  // Punjabi
  { text: "ਤੇਰੇ ਬਿਨਾਂ ਜ਼ਿੰਦਗੀ ਵੀਰਾਨ ਜਿਹੀ ਲੱਗਦੀ ਹੈ,\nਹਰ ਮਹਿਫ਼ਿਲ ਹੁਣ ਸੁੰਨਸਾਨ ਜਿਹੀ ਲੱਗਦੀ ਹੈ।", category: 'judai', language: 'punjabi', alt_text: 'Punjabi Judai Shayari' },
  { text: "ਤੇਰੀਆਂ ਯਾਦਾਂ ਦੇ ਸਹਾਰੇ ਹੀ ਤਾਂ ਜਿਉਂਦੇ ਹਾਂ,\nਨਹੀਂ ਤਾਂ ਇਸ ਦੁਨੀਆਂ ਵਿੱਚ ਰੱਖਿਆ ਹੀ ਕੀ ਹੈ।", category: 'yaad', language: 'punjabi', alt_text: 'Punjabi Yaad Shayari' },
  { text: "ਚੰਨ ਵੀ ਲੁਕ ਜਾਂਦਾ ਹੈ ਤੈਨੂੰ ਵੇਖ ਕੇ,\nਤੇਰੀ ਖੂਬਸੂਰਤੀ ਦਾ ਕੀ ਜਵਾਬ ਦਿਆਂ।", category: 'tareef', language: 'punjabi', alt_text: 'Punjabi Tareef Shayari' },
  { text: "ਜ਼ਿੰਦਗੀ ਇੱਕ ਸਫ਼ਰ ਹੈ ਸੁਹਾਨਾ,\nਇੱਥੇ ਕੱਲ੍ਹ ਕੀ ਹੋਵੇ ਕਿਸਨੇ ਜਾਣਾ।", category: 'life', language: 'punjabi', alt_text: 'Punjabi Life Quotes' },
  { text: "ਮੰਜ਼ਿਲਾਂ ਉਹਨਾਂ ਨੂੰ ਹੀ ਮਿਲਦੀਆਂ ਨੇ,\nਜਿਹਨਾਂ ਦੇ ਸੁਪਨਿਆਂ ਵਿੱਚ ਜਾਨ ਹੁੰਦੀ ਹੈ।", category: 'motivational', language: 'punjabi', alt_text: 'Punjabi Motivational Quotes' },
  { text: "ਕੁਦਰਤ ਦੀ ਗੋਦ ਵਿੱਚ ਜੋ ਸਕੂਨ ਹੈ,\nਉਹ ਦੁਨੀਆਂ ਦੇ ਕਿਸੇ ਕੋਨੇ ਵਿੱਚ ਨਹੀਂ।", category: 'nature', language: 'punjabi', alt_text: 'Punjabi Nature Shayari' },
  { text: "ਉਹ ਬਚਪਨ ਦੇ ਦਿਨ ਵੀ ਕੀ ਦਿਨ ਸੀ,\nਨਾ ਕੋਈ ਫਿਕਰ ਸੀ ਨਾ ਕੋਈ ਗਮ ਸੀ।", category: 'bachpan', language: 'punjabi', alt_text: 'Punjabi Bachpan Shayari' },
  { text: "ਬੁਢਾਪਾ ਉਹ ਕਿਤਾਬ ਹੈ,\nਜਿਸਦੇ ਹਰ ਪੰਨੇ ਤੇ ਤਜਰਬਾ ਲਿਖਿਆ ਹੁੰਦਾ ਹੈ।", category: 'buddapa', language: 'punjabi', alt_text: 'Punjabi Buddapa Quotes' },
  { text: "ਮੀਂਹ ਦੀਆਂ ਬੂੰਦਾਂ ਤੇ ਤੇਰੀ ਯਾਦ,\nਦੋਵੇਂ ਹੀ ਮੈਨੂੰ ਬਹੁਤ ਸਤਾਉਂਦੀਆਂ ਨੇ।", category: 'barish', language: 'punjabi', alt_text: 'Punjabi Barish Shayari' },
  { text: "ਇੱਕ ਕੱਪ ਚਾਹ ਤੇ ਤੇਰੀਆਂ ਯਾਦਾਂ,\nਮੇਰੇ ਹਰ ਦਿਨ ਦੀ ਸ਼ੁਰੂਆਤ ਬਸ ਇੱਥੋਂ ਹੀ ਹੁੰਦੀ ਹੈ।", category: 'chai', language: 'punjabi', alt_text: 'Punjabi Chai Shayari' },
  { text: "ਰਾਤ ਦੀ ਚੁੱਪ ਵਿੱਚ ਇੱਕ ਵੱਖਰਾ ਹੀ ਸਕੂਨ ਹੈ,\nਬਸ ਯਾਦਾਂ ਦਾ ਸ਼ੋਰ ਹੁੰਦਾ ਹੈ।", category: 'night', language: 'punjabi', alt_text: 'Punjabi Good Night Quotes' },
  { text: "ਪਰਿਵਾਰ ਤੋਂ ਵੱਡਾ ਕੋਈ ਧਨ ਨਹੀਂ,\nਤੇ ਮਾਂ-ਬਾਪ ਤੋਂ ਵੱਡਾ ਕੋਈ ਰੱਬ ਨਹੀਂ।", category: 'family', language: 'punjabi', alt_text: 'Punjabi Family Quotes' },
  { text: "ਦੇਸ਼ ਲਈ ਮਰ ਮਿਟਣਾ ਹੀ ਅਸਲੀ ਸ਼ਹਾਦਤ ਹੈ,\nਮੇਰਾ ਭਾਰਤ ਮਹਾਨ!", category: 'desh-prem', language: 'punjabi', alt_text: 'Punjabi Desh Prem' },
  { text: "ਕਹਿਣ ਨੂੰ ਬਹੁਤ ਕੁਝ ਸੀ,\nਪਰ ਤੇਰੀ ਇੱਕ ਮੁਸਕਾਨ ਨੇ ਸਭ ਖਾਮੋਸ਼ ਕਰ ਦਿੱਤਾ।", category: 'two-line', language: 'punjabi', alt_text: 'Punjabi Two Line Shayari' },

  // English
  { text: "Life feels so empty without you,\nEvery gathering now feels so lonely.", category: 'judai', language: 'english', alt_text: 'English Separation Quotes' },
  { text: "I survive only on the support of your memories,\nOtherwise, what is left in this world for me.", category: 'yaad', language: 'english', alt_text: 'English Missing You Quotes' },
  { text: "Even the moon hides when it sees you,\nHow can I ever describe your immense beauty.", category: 'tareef', language: 'english', alt_text: 'English Praise Quotes' },
  { text: "Life is a beautiful journey,\nWho knows what tomorrow will bring.", category: 'life', language: 'english', alt_text: 'English Life Quotes' },
  { text: "Destinations are reached only by those,\nWhose dreams have life and passion.", category: 'motivational', language: 'english', alt_text: 'English Motivational Quotes' },
  { text: "The peace found in the lap of nature,\nCannot be found in any corner of the world.", category: 'nature', language: 'english', alt_text: 'English Nature Quotes' },
  { text: "Those days of childhood were the best,\nNeither any worries nor any sorrows.", category: 'bachpan', language: 'english', alt_text: 'English Childhood Quotes' },
  { text: "Old age is that book,\nOn whose every page experience is written.", category: 'buddapa', language: 'english', alt_text: 'English Old Age Quotes' },
  { text: "The raindrops and your memories,\nBoth torment me a lot.", category: 'barish', language: 'english', alt_text: 'English Rain Quotes' },
  { text: "A cup of tea and your memories,\nEvery day of mine starts right from here.", category: 'chai', language: 'english', alt_text: 'English Tea Lovers Quotes' },
  { text: "There is a different peace in the silence of the night,\nOnly the noise of memories exists. Good night.", category: 'night', language: 'english', alt_text: 'English Good Night Quotes' },
  { text: "There is no wealth greater than family,\nAnd no God greater than parents.", category: 'family', language: 'english', alt_text: 'English Family Quotes' },
  { text: "Sacrificing oneself for the country is true martyrdom,\nJai Hind!", category: 'desh-prem', language: 'english', alt_text: 'English Patriotism Quotes' },
  { text: "There was so much to say,\nBut your one smile silenced everything.", category: 'two-line', language: 'english', alt_text: 'English Two Line Quotes' }
];

const unsplashImages = [
  'https://images.unsplash.com/photo-1518199266791-5375a83190b7?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=800&auto=format&fit=crop&q=60',
  'https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&auto=format&fit=crop&q=60'
];

const filePath = path.join(__dirname, 'src', 'data', 'shayaris.json');
const currentData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
const highestId = Math.max(...currentData.map(s => s.id));

const formattedNew = moreShayaris.map((item, index) => {
  let firstLine = item.text.split('\n')[0].trim();
  let baseSlug = '';
  
  if (item.language === 'punjabi') {
    // Basic transliteration for slug since 'transliterate' might not handle Gurmukhi perfectly
    baseSlug = `punjabi-${item.category}-${index}`;
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
console.log(`Added ${formattedNew.length} new shayaris in Punjabi and English!`);
