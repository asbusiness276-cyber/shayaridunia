const fs = require('fs');

// Fix page.tsx
let pageTsx = fs.readFileSync('src/app/page.tsx', 'utf8');
pageTsx = pageTsx.replace('<a href="/categories"', '<Link href="/categories"');
pageTsx = pageTsx.replace('</a>\r\n        </div>\r\n      </div>\r\n\r\n      {/* Latest Shayaris Grid', '</Link>\r\n        </div>\r\n      </div>\r\n\r\n      {/* Latest Shayaris Grid');
fs.writeFileSync('src/app/page.tsx', pageTsx, 'utf8');

// Fix shayari/[slug]/page.tsx
let slugTsx = fs.readFileSync('src/app/shayari/[slug]/page.tsx', 'utf8');
slugTsx = slugTsx.replace('<a href={`/${shayari.language}`}', '<Link href={`/${shayari.language}`}');
slugTsx = slugTsx.replace('</a>\n          <a href={`/${shayari.language}/category/${shayari.category}`}', '</Link>\n          <Link href={`/${shayari.language}/category/${shayari.category}`}');
slugTsx = slugTsx.replace('More from this Category\n          </a>', 'More from this Category\n          </Link>');
fs.writeFileSync('src/app/shayari/[slug]/page.tsx', slugTsx, 'utf8');

console.log('Internal linking fixed!');
