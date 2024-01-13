const http = require('http'); // Import the http module

const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  const { url } = req; // Get the URL from the request

  // Basic routing
  if (url === '/') {
    // Respond with HTML content for the root URL
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Welcome to the Home Page</h1>');
  } else if (url === '/about') {
    // Respond with plain text for the /about URL
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('This is the About page');
  } else {
    // Handle 404 Not Found
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('404 Not Found');
  }
});

// Server listens on specified port and hostname
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
