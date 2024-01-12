// Function to reverse a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// Function to convert a string to uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}

// Function to convert a string to lowercase
function toLowerCase(str) {
    return str.toLowerCase();
}

// Exporting the functions
module.exports = {
    reverseString,
    toUpperCase,
    toLowerCase
};