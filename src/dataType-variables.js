// Variables and Data Types
const name = 'John'; // String
let age = 30; // Number
const isStudent = true; // Boolean

// Functions and Scope
function greet(name) {
  // Function scope
  console.log(`Hello, ${name}!`);
}

greet(name);

// Closures
function outerFunction() {
  const outerVar = 'I am from outer function';

  function innerFunction() {
    // innerFunction has access to outerVar due to closure
    console.log(outerVar);
  }

  return innerFunction;
}

const closureExample = outerFunction();
closureExample(); // Prints: "I am from outer function"

// Callback Functions
function calculate(a, b, operation) {
  return operation(a, b);
}

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const resultAdd = calculate(5, 3, add);
console.log(`Addition result: ${resultAdd}`); // Prints: "Addition result: 8"

const resultSubtract = calculate(10, 4, subtract);
console.log(`Subtraction result: ${resultSubtract}`); // Prints: "Subtraction result: 6"

// Arrays and Objects
const fruits = ['apple', 'banana', 'cherry'];
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

console.log(fruits[0]); // Accessing an element in an array
console.log(person.firstName); // Accessing a property in an object
