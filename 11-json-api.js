// 11-json-api.js
// ✅ Task: Create a JSON API server using core Node.js modules (no frameworks)

// 1️⃣ Import the required core module
const http = require('http');
/**
 * 'http' is a built-in Node.js module.
 * It allows you to create a web server that can handle HTTP requests and responses.
 * We store it in a variable called 'http' using require().
 */

// 2️⃣ Sample data to be served as API responses
const users = [
  { id: 1, name: 'Kandula Dilip Kumar', role: 'Developer' },
  { id: 2, name: 'Jane Doe', role: 'Designer' }
];
/**
 * 'users' is a JavaScript array that holds two objects.
 * Each object represents a user with id, name, and role.
 * This will be sent as JSON if someone visits /api/users
 */

const products = [
  { id: 101, name: 'Laptop', price: 70000 },
  { id: 102, name: 'Phone', price: 30000 }
];
/**
 * 'products' is also a JS array with two objects.
 * This will be returned as a response to /api/products
 */

// 3️⃣ Create the server using http.createServer()
const server = http.createServer((req, res) => {
  /**
   * This method creates an HTTP server.
   * It takes a callback function with 2 parameters:
   * - req (short for request): Contains details about the request sent by the client.
   * - res (short for response): Used to send data back to the client.
   */

  const url = req.url; // Extract the path like '/api/users', '/api/products'
  console.log(`📥 API Request: ${url}`);

  // 4️⃣ Set the response header for JSON content
  res.setHeader('Content-Type', 'application/json');
  /**
   * res.setHeader() is used to set response headers.
   * 'Content-Type' tells the browser or client what kind of data is coming.
   * 'application/json' means we're sending JSON formatted data.
   */

  // 5️⃣ Check requested path and send appropriate JSON data
  if (url === '/api/users') {
    // If client hits /api/users, return the users array
    res.writeHead(200); // 200 = OK (success)
    res.end(JSON.stringify(users));
    /**
     * res.writeHead(200) sets the HTTP status code.
     * res.end() ends the response and sends data to the client.
     * JSON.stringify(users) converts JS object to JSON string before sending.
     */
  } else if (url === '/api/products') {
    // If client hits /api/products, return the products array
    res.writeHead(200);
    res.end(JSON.stringify(products));
  } else {
    // If the path doesn't match, send a 404 response
    res.writeHead(404); // 404 = Not Found
    res.end(JSON.stringify({ message: '❌ API route not found' }));
    /**
     * Instead of a string, we send a JSON object with a message.
     * The object is stringified before sending.
     */
  }
});

// 6️⃣ Start the server on port 5000
server.listen(5000, () => {
  console.log('🚀 JSON API Server running at http://localhost:5000');
});
/**
 * server.listen(port, callback) starts the server.
 * - 5000 is the port number — you can open this in the browser using localhost:5000
 * - The callback function runs after the server starts successfully.
 */