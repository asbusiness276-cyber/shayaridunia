const { google } = require('googleapis');
const fs = require('fs');

const jwtClient = new google.auth.JWT({
  keyFile: './indexing-key.json',
  scopes: ['https://www.googleapis.com/auth/indexing'],
});

const indexing = google.indexing({
  version: 'v3',
  auth: jwtClient,
});

async function submitUrl(url) {
  try {
    const response = await indexing.urlNotifications.publish({
      requestBody: {
        url: url,
        type: 'URL_UPDATED',
      },
    });
    console.log(`Successfully submitted: ${url}`);
    return response.data;
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
        console.error(`Error submitting ${url}:`, error.response.data.error.message);
    } else {
        console.error(`Error submitting ${url}:`, error.message);
    }
  }
}

async function run() {
  console.log('Authenticating with Google Indexing API...');
  await jwtClient.authorize();
  console.log('Authenticated successfully!\n');

  // Load shayaris
  const data = JSON.parse(fs.readFileSync('src/data/shayaris.json', 'utf8'));
  
  // Submit the main pages
  const urlsToSubmit = [
    'https://shayaridunia.com/',
    'https://shayaridunia.com/hindi',
    'https://shayaridunia.com/punjabi',
    'https://shayaridunia.com/english',
    'https://shayaridunia.com/categories',
    'https://shayaridunia.com/collections',
  ];

  // Add the 10 most recently added shayaris
  const latestShayaris = data.slice(-10);
  latestShayaris.forEach(s => {
    urlsToSubmit.push(`https://shayaridunia.com/shayari/${s.slug}`);
  });

  console.log(`Found ${urlsToSubmit.length} priority URLs to index.`);
  
  for (const url of urlsToSubmit) {
    await submitUrl(url);
    // Add a small delay between requests
    await new Promise(resolve => setTimeout(resolve, 500));
  }
  
  console.log('\nIndexing request completed! Google bot will crawl these URLs shortly.');
}

run().catch(console.error);
