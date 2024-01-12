const fs = require('fs');

// File paths
const inputFile = 'input.txt';
const outputFile = 'output.txt';

// Read the file asynchronously
fs.readFile(inputFile, 'utf8', (err, data) => {
    if (err) {
        console.error(`Error reading the file: ${err.message}`);
        return;
    }

    // Modify the content by appending a timestamp
    const timestamp = new Date().toISOString();
    const modifiedContent = `${data}\nModified on: ${timestamp}`;

    // Write the modified content to a new file
    fs.writeFile(outputFile, modifiedContent, 'utf8', (err) => {
        if (err) {
            console.error(`Error writing to the file: ${err.message}`);
            return;
        }

        console.log(`File has been written with new content to ${outputFile}`);
    });
});
