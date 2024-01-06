const fs = require('fs');

// Function to create a new file with initial content
const createFile = (filePath, initialContent) => {
  try {
    fs.writeFileSync(filePath, initialContent, 'utf8');
    console.log(`File "${filePath}" created with initial content.`);
  } catch (error) {
    console.error('Error creating file:', error.message);
  }
};

// Function to append content to an existing file
const appendToFile = (filePath, contentToAppend) => {
  try {
    fs.appendFileSync(filePath, contentToAppend, 'utf8');
    console.log(`Content appended to "${filePath}".`);
  } catch (error) {
    console.error('Error appending to file:', error.message);
  }
};

// Function to delete a file
const deleteFile = (filePath) => {
  try {
    fs.unlinkSync(filePath);
    console.log(`File "${filePath}" deleted.`);
  } catch (error) {
    console.error('Error deleting file:', error.message);
  }
};


// Function to read file content
const readFileContent = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    console.error('Error reading file:', error.message);
    return null;
  }
};

module.exports = {
  createFile,
  appendToFile,
  deleteFile,
  readFileContent,
};
