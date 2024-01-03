# **Node.js Learning**
This project is part of the New Year Coding Challenge focusing on backend development with Node.js.

## **Day 1**
On Day 1, I set up my Node.js environment and created a simple server that responds with "Hello World".

## **Day 2**
On Day 2, basics of Node.js, including the event loop and non-blocking I/O. and some theoretical research.

## **Day 3**
On Day 3, I delved into asynchronous programming in Node.js and learned about Promises and the `async/await` syntax. I also created a small Node.js application that utilizes Promises and `async/await` to perform asynchronous tasks. Error handling techniques for asynchronous code were also explored.

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
