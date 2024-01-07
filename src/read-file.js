//Here's an example of reading a file asynchronously using callbacks
const fs = require('fs');

// Asynchronously read a file using a callback
fs.readFile('sample.txt', 'utf8', (error, data) => {
  if (error) {
    console.error('Error reading file:', error.message);
    return;
  }
  console.log('File content:', data);
});

console.log('Reading file asynchronously...');


//Here's an example of reading a file using promises
const fs1 = require('fs').promises;

// Asynchronously read a file using promises
fs1.readFile('sample.txt', 'utf8')
  .then((data) => {
    console.log('File content:', data);
  })
  .catch((error) => {
    console.error('Error reading file:', error.message);
  });

console.log('Reading file using promises...');

//Here's an example of reading a file using async/await
const fs2 = require('fs').promises;

// Asynchronously read a file using async/await
async function readFileAsync() {
  try {
    const data = await fs2.readFile('sample.txt', 'utf8');
    console.log('File content:', data);
  } catch (error) {
    console.error('Error reading file:', error.message);
  }
}

console.log('Reading file using async/await...');
readFileAsync();