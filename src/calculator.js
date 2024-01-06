// app.js
const mathOperations = require('./utils/mathematic-operations');

console.log('Addition:', mathOperations.add(5, 3)); // Output: Addition: 8
console.log('Subtraction:', mathOperations.subtract(10, 4)); // Output: Subtraction: 6
console.log('Multiplication:', mathOperations.multiply(4, 7)); // Output: Multiplication: 28

try {
  console.log('Division:', mathOperations.divide(10, 2)); // Output: Division: 5
  console.log('Division by Zero:', mathOperations.divide(8, 0)); // Throws an error
} catch (error) {
  console.error('Error:', error.message); // Output: Error: Division by zero is not allowed.
}