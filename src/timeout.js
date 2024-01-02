// Import the 'http' module
const http = require('http');

// Create a simple web server
const server = http.createServer((req, res) => {
  // Set the response header
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Simulate a time-consuming task (non-blocking I/O)
  setTimeout(() => {
    // Send a response to the client
    res.end('Hello, World after 10 Seconds!\n');
  }, 10000); // Delayed response to simulate non-blocking behavior
});

// Listen on port 3000
const PORT = 3000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
