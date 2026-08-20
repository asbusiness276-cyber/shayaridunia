const fs = require('fs');

let content = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// The dropdown was called "Categories" after my fix script, let's change it to "Top 50"
content = content.replace(
  'Categories <ChevronDown className="w-4 h-4" />',
  'Top 50 <ChevronDown className="w-4 h-4" />'
);

content = content.replace(
  '<div className="py-2 font-bold text-pink-600 border-b border-gray-100 mb-2">Categories</div>',
  '<div className="py-2 font-bold text-pink-600 border-b border-gray-100 mb-2">Top 50</div>'
);

fs.writeFileSync('src/components/Navbar.tsx', content, 'utf8');
console.log('Renamed dropdown to Top 50');
