const fs = require('fs');
let content = fs.readFileSync('src/app/shayari/[slug]/page.tsx', 'utf8');

const relatedCode = `
      {/* Related Shayaris */}
      <div className="mt-20">
        <h3 className="text-2xl font-extrabold text-gray-900 mb-8 flex items-center">
          <span className="w-8 h-1 bg-pink-500 rounded-full mr-4"></span>
          More {catUpper} Shayaris
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {shayariData
            .filter(s => s.category === shayari.category && s.id !== shayari.id)
            .slice(0, 3)
            .map(related => (
              <ShayariCard key={related.id} shayari={related} />
            ))
          }
        </div>
      </div>
      
      <div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">
`;

content = content.replace(
  '<div className="mt-16 text-center bg-gray-50 rounded-2xl p-8 border border-gray-100">',
  relatedCode
);

fs.writeFileSync('src/app/shayari/[slug]/page.tsx', content, 'utf8');
console.log('Added related shayaris!');
