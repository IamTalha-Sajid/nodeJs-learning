const stringUtils = require('./utils/string');

const sampleString = "Hello World!";

console.log("Original String:", sampleString);
console.log("Reversed String:", stringUtils.reverseString(sampleString));
console.log("Uppercase String:", stringUtils.toUpperCase(sampleString));
console.log("Lowercase String:", stringUtils.toLowerCase(sampleString));