const fs = require('fs');

let navTsx = fs.readFileSync('src/components/Navbar.tsx', 'utf8');

// Desktop
navTsx = navTsx.replace(
  '<Link href="/about" className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">',
  '<Link href="/collections" className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">\n              Collections\n            </Link>\n            <Link href="/about" className="text-gray-700 hover:text-pink-600 px-3 py-2 rounded-md text-sm font-medium transition-colors">'
);

// Mobile
navTsx = navTsx.replace(
  '<Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">',
  '<Link href="/collections" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">\n                Collections\n              </Link>\n              <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50">'
);

fs.writeFileSync('src/components/Navbar.tsx', navTsx, 'utf8');
console.log('Navbar updated!');
