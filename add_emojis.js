const fs = require('fs');

const data = JSON.parse(fs.readFileSync('src/data/shayaris.json', 'utf8'));

const emojiMap = {
  love: ' ❤️✨',
  sad: ' 💔😢',
  attitude: ' 😎🔥',
  dosti: ' 🤝🫂',
  judai: ' 🚶‍♂️💔',
  yaad: ' 💭🥀',
  chai: ' ☕❤️',
  barish: ' 🌧️☔',
  life: ' 🍃✨',
  motivational: ' 🚀💪',
  nature: ' 🌿🌻',
  bachpan: ' 🧸🎈',
  family: ' 🏡❤️',
  'desh-prem': ' 🇮🇳🫡',
  tareef: ' 😍✨',
  night: ' 🌙✨',
  morning: ' 🌅☀️',
  buddapa: ' 👴❤️',
  festival: ' 🎉🎆',
  'two-line': ' ✍️💯'
};

data.forEach(s => {
  const emoji = emojiMap[s.category];
  if (emoji && !s.text.includes(emoji.trim())) {
    s.text = s.text.trim() + emoji;
  }
});

fs.writeFileSync('src/data/shayaris.json', JSON.stringify(data, null, 2), 'utf8');
console.log('Added emojis to 1000+ shayaris!');
