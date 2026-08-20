const fs = require('fs');
let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

content = content.replace(
  'Collections <ChevronDown className="w-4 h-4" />',
  'Categories <ChevronDown className="w-4 h-4" />'
);

content = content.replace(
  '<div className="py-2 font-bold text-pink-600 border-b border-gray-100 mb-2">Collections</div>',
  '<div className="py-2 font-bold text-pink-600 border-b border-gray-100 mb-2">Categories</div>'
);

fs.writeFileSync('src/components/Navbar.tsx', content, 'utf8');
console.log('Fixed Categories label!');
