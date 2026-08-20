const fs = require('fs');

// Fix shayari/[slug]/page.tsx
let slugTsx = fs.readFileSync('src/app/shayari/[slug]/page.tsx', 'utf8');
slugTsx = slugTsx.replace('          </a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n', '          </Link>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  );\r\n}\r\n');
slugTsx = slugTsx.replace('          </a>\n        </div>\n      </div>\n    </div>\n  );\n}\n', '          </Link>\n        </div>\n      </div>\n    </div>\n  );\n}\n');
fs.writeFileSync('src/app/shayari/[slug]/page.tsx', slugTsx, 'utf8');

console.log('Fixed unmatched tag!');
