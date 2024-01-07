const fileOperations = require('./utils/file-operations');

const filePath = 'sample.txt';

// Create a new file with initial content
fileOperations.createFile(filePath, 'This is the initial content.\n');

// Append content to the existing file
fileOperations.appendToFile(filePath, 'Additional content appended.\n');

// Read and display the file's content
const content = fileOperations.readFileContent(filePath);

if (content) {
  console.log('File Content:');
  console.log(content);
} else {
  console.log('File content could not be read.');
}

// Delete the file (comment out if you want to keep the file)
// fileOperations.deleteFile(filePath);