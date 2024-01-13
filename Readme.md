# **Node.js Learning**
This project is part of the New Year Coding Challenge focusing on backend development with Node.js.

## Day 1

**Task: Setting Up Node.js Environment and Creating a Basic Server**

- Installed Node.js and npm (Node Package Manager) on my computer.
- Set up my Node.js environment.
- Created a simple Node.js server that responds with "Hello World."

## Day 2

**Task: Understanding the Basics of Node.js**

- Learned about the basics of Node.js, including the event loop and non-blocking I/O.
- Conducted theoretical research to gain a deeper understanding of Node.js concepts.

## Day 3

**Task: Explore JavaScript Promises and Asynchronous Programming**

- Learned about JavaScript Promises and asynchronous programming concepts.
- Explored the async/await syntax for handling asynchronous operations in Node.js.
- Created a small Node.js application that utilizes Promises and async/await to perform asynchronous tasks.
- Experimented with error handling techniques for asynchronous code.

## Day 4

**Task: Setting Up Your Development Environment**

- Chose a code editor or integrated development environment (IDE) for development.
- Set up version control using Git and created a GitHub account if not already done.
- Learned the basics of Git, including creating repositories, committing changes, and pushing to GitHub.

## Day 5

**Task: Core JavaScript Concepts**

- Reviewed JavaScript fundamentals, including variables, data types, and operators.
- Learned about functions, scope, and closures in JavaScript.
- Dived into asynchronous programming concepts with callbacks.

## Day 6

**Task: Node.js Modules**

- Explored how Node.js uses modules and the CommonJS module system.
- Created custom modules and imported them into applications.
- Practiced organizing code using modular architecture.

## Day 7

**Task: Core Node.js Libraries**

- Learned to use the fs (File System) module to read and write files.
- Created a simple HTTP server using the http module.
- Understood the URL module for parsing and handling URLs in web applications.

## Day 8

**Task: Introduction to Express.js**

- Installed Express.js and set up a basic Express application.
- Defined routes and handled HTTP requests using Express.js.
- Created a simple API with routes for different endpoints.

## Day 9

**Task: Deep Dive into Node.js Modules**

- Gained an advanced understanding of module.exports and exports in Node.js.
- Created a complex module for string manipulation, which included functions to reverse strings, convert to uppercase, and convert to lowercase.

## Day 10

**Task: Understanding Module Caching**

- Read about how Node.js caches modules after they are loaded.
- Create a small experiment to demonstrate this. For example, you can create a module that outputs a random number. Import this module in two different files and see if the output is the same or different, demonstrating the caching behavior.

## Day 11

**Task: URL Module for Web Applications**

- Familiarize yourself with the url module.
- Learn to parse and handle URLs in your Node.js applications.
- Extract different parts of a URL such as the pathname, query string, and parameters.

## Day 12

**Task: Explore Reading and Writing Files**

- After reading files, try writing to a file. This could be as simple as creating a new text file and writing some content to it.

## Day 13

**Task: Core Node.js Libraries - HTTP Module**

- Created an HTTP server using Node.js's built-in `http` module.
- Implemented basic routing in the server to respond to different URLs with specific messages or HTML content.
- Explored the properties and methods of the `request` and `response` objects.
- Practiced handling different HTTP request types and sending appropriate responses.

# **Node.js Learning**
These are the main theoretical highlighting points needed to learn

In Node.js, when working with the HTTP module to create a web server and send HTTP responses, you have two methods for setting response headers: `res.writeHead` and `res.setHeader`. In `res.writeHead` we also pass the status code.

```
res.writeHead(200, { 'Content-Type': 'text/plain' });
```
```
res.setHeader('Content-Type', 'text/plain');
```
### **Getting Started**
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### **Prerequisites**
What things you need to install the software and how to install them:
* Node.js
* npm (Node Package Manager)

You can download and install them from [Node.js](https://nodejs.org/en) official website.

### **Installing**
A step-by-step series of examples that tell you how to get a development environment running:

Clone the repository to your local machine or download the source code.

Navigate to the project directory in your terminal.

Run the server using Node.js:
```
node app.js
```
This will start the server on a predefined port (e.g., 3000).

Open your browser and visit http://localhost:3000. You should see the "Hello World" message displayed.

### **Built With**
Node.js - The JavaScript runtime used
