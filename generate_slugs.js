const fs = require('fs');
const path = require('path');
const { transliterate } = require('transliteration');

const filePath = path.join(__dirname, 'src', 'data', 'shayaris.json');
const currentData = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const usedSlugs = new Set();

const modifiers = ['', '-status', '-quotes', '-poetry', '-lines', '-thoughts', '-vibes', '-collection', '-daily', '-top', '-best', '-premium', '-share', '-post', '-story'];

currentData.forEach(item => {
  let firstLine = item.text.split('\n')[0].replace(/[^\w\s\u0900-\u097F\u0A00-\u0A7F]/gi, '').trim();
  
  // Convert Hindi/Punjabi to English letters
  let romanized = transliterate(firstLine).toLowerCase().replace(/[^a-z0-9\s]/g, '');
  let words = romanized.split(/\s+/).filter(w => w.length > 0).slice(0, 6).join('-');
  
  if (!words) {
    words = 'beautiful';
  }

  let baseSlug = `${words}-best-${item.category}-shayari-${item.language}`;
  
  let finalSlug = baseSlug;
  let modIndex = 0;
  
  while (usedSlugs.has(finalSlug)) {
    modIndex++;
    if (modIndex < modifiers.length) {
      finalSlug = baseSlug + modifiers[modIndex];
    } else {
       // if we somehow have more than 15 identical first lines, append a random word
       const randomWords = ['epic', 'legendary', 'pure', 'true', 'deep', 'heart', 'soul', 'real', 'famous', 'viral'];
       finalSlug = baseSlug + '-' + randomWords[modIndex % randomWords.length] + '-' + modIndex;
    }
  }
  
  usedSlugs.add(finalSlug);
  item.slug = finalSlug;
});

fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), 'utf8');
console.log('Successfully generated unique English keyword slugs for all ' + currentData.length + ' shayaris!');
