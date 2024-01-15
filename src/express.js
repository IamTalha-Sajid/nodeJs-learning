// app.js

const express = require('express');
const app = express();
const port = 3000;

// Middleware for parsing JSON and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Define a GET route for the home page
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js Introduction!');
});

// Define a GET route for the about page
app.get('/about', (req, res) => {
  res.send('This is the About page.');
});

// Define a POST route for submitting data
app.post('/submit', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  res.send('Data received successfully!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
