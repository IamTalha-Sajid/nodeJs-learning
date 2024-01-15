// app.js

const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); // To serve static files from 'public' directory

// Serve an HTML page with a form
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

// Handle form submission
app.post('/submit-form', (req, res) => {
  const name = req.body.name;
  const message = req.body.message;
  console.log(`Name: ${name}, Message: ${message}`);
  res.send(`Received your message, ${name}!`);
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
