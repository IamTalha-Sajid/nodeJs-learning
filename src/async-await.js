// Import the 'fs' module to simulate asynchronous file operations
const fs = require('fs');

// Function to read a file asynchronously using Promises
function readFileAsync(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        reject(err); // Reject the Promise if an error occurs
      } else {
        resolve(data); // Resolve the Promise with the file data
      }
    });
  });
}

// Async function to demonstrate Promises and async/await
async function main() {
  try {
    const fileData = await readFileAsync('example.txt');
    console.log('File content:');
    console.log(fileData);
  } catch (error) {
    console.error('An error occurred:', error.message);
  }
}

// Call the async function
main();