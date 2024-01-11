const url = require('url');

// Example URL to parse
const urlString = 'http://www.example.com:8080/pathname/?search=test#hash';

// Parsing the URL
const parsedUrl = new URL(urlString);

// Logging different components of the URL
console.log('Href:', parsedUrl.href);
console.log('Protocol:', parsedUrl.protocol);
console.log('Host:', parsedUrl.host);
console.log('Hostname:', parsedUrl.hostname);
console.log('Port:', parsedUrl.port);
console.log('Pathname:', parsedUrl.pathname);
console.log('Search:', parsedUrl.search);
console.log('Hash:', parsedUrl.hash);

// If you want to get search parameters
console.log('Search Params:', parsedUrl.searchParams.get('search'));
