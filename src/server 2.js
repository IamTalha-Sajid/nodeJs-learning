const http = require('http');
const { StringDecoder } = require('string_decoder');

const hostname = '127.0.0.1';
const port = 3000;

// Simulated database of books
let books = [
  { id: 1, title: 'Node.js Basics', author: 'John Doe' },
  { id: 2, title: 'Node.js Advanced', author: 'Jane Doe' }
];

// Create an HTTP server
const server = http.createServer((req, res) => {
  const { method, url } = req;

  // Handle GET Request - Retrieve books
  if (method === 'GET' && url === '/books') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(books));
  }
  // Handle POST Request - Add a new book
  else if (method === 'POST' && url === '/books') {
    const decoder = new StringDecoder('utf-8');
    let buffer = '';
    req.on('data', (data) => {
      buffer += decoder.write(data);
    });
    req.on('end', () => {
      buffer += decoder.end();
      const newBook = JSON.parse(buffer);
      books.push(newBook); // Add the new book to the array (simulate database insert)
      res.writeHead(201, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(newBook));
    });
  }
  // Handle Not Found
  else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

// Server listens on specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
