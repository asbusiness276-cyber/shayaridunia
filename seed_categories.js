const fs = require('fs');
const path = require('path');
const { transliterate } = require('transliteration');

const newShayaris = [
  { text: "तेरे बिना ज़िन्दगी वीरान सी लगती है,\nहर महफ़िल अब सुनसान सी लगती है।", category: 'judai', language: 'hindi', alt_text: 'Judai Shayari Hindi' },
  { text: "तेरी यादों के सहारे ही तो जीते हैं,\nवरना इस दुनिया में रखा ही क्या है।", category: 'yaad', language: 'hindi', alt_text: 'Yaad Shayari' },
  { text: "चाँद भी छुप जाता है तुम्हें देखकर,\nतुम्हारी खूबसूरती का क्या जवाब दूँ।", category: 'tareef', language: 'hindi', alt_text: 'Tareef Shayari' },
  { text: "ज़िन्दगी एक सफ़र है सुहाना,\nयहाँ कल क्या हो किसने जाना।", category: 'life', language: 'hindi', alt_text: 'Life Quotes Hindi' },
  { text: "मंज़िलें उन्हीं को मिलती हैं,\nजिनके सपनों में जान होती है।", category: 'motivational', language: 'hindi', alt_text: 'Motivational Shayari' },
  { text: "प्रकृति की गोद में जो सुकून है,\nवो दुनिया के किसी कोने में नहीं।", category: 'nature', language: 'hindi', alt_text: 'Nature Shayari Hindi' },
  { text: "वो बचपन के दिन भी क्या दिन थे,\nन कोई फिक्र थी न कोई गम था।", category: 'bachpan', language: 'hindi', alt_text: 'Bachpan Memories Shayari' },
  { text: "बुढ़ापा वो किताब है,\nजिसके हर पन्ने पर तजुर्बा लिखा होता है।", category: 'buddapa', language: 'hindi', alt_text: 'Old Age Quotes' },
  { text: "बारिश की बूँदें और तुम्हारी याद,\nदोनों ही मुझे बहुत सताती हैं।", category: 'barish', language: 'hindi', alt_text: 'Barish Rain Shayari' },
  { text: "एक कप चाय और तुम्हारी यादें,\nमेरे हर दिन की शुरुआत बस यहीं से होती है।", category: 'chai', language: 'hindi', alt_text: 'Chai Lovers Shayari' },
  { text: "रात की खामोशी में एक अलग ही सुकून है,\nबस यादों का शोर होता है। शुभ रात्रि।", category: 'night', language: 'hindi', alt_text: 'Good Night Shayari' },
  { text: "परिवार से बड़ा कोई धन नहीं,\nऔर माता-पिता से बड़ा कोई भगवान नहीं।", category: 'family', language: 'hindi', alt_text: 'Family Relation Shayari' },
  { text: "देश के लिए मर मिटना ही असली शहादत है,\nमेरा भारत महान! जय हिन्द!", category: 'desh-prem', language: 'hindi', alt_text: 'Desh Prem Patriotic' },
  { text: "कहने को बहुत कुछ था,\nमगर तुम्हारी एक मुस्कान ने सब खामोश कर दिया।", category: 'two-line', language: 'hindi', alt_text: 'Two Line Shayari' },
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

const formattedNew = newShayaris.map((item, index) => {
  const firstLine = item.text.split('\n')[0].replace(/[^\w\s\u0900-\u097F]/gi, '').trim();
  const baseSlug = transliterate(firstLine).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
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
console.log(`Added ${formattedNew.length} new shayaris for the new categories!`);
