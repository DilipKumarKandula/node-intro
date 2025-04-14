// 09-html-server.js
// ✅ Step-by-step Node.js server that serves HTML pages based on route

// 1️⃣ Import core modules
const http = require('http');      // To create the HTTP server
const fs = require('fs');          // To interact with the file system (reading files)
const path = require('path');      // To work with file and directory paths (cross-platform safe)

// 2️⃣ Create the HTTP server
const server = http.createServer((req, res) => {
  // req → Incoming request from browser (client)
  // res → Server's response to be sent to the client

  // Special handling: Ignore favicon requests made by browsers
  if (req.url === '/favicon.ico') {
    res.writeHead(204); // 204 = No Content
    return res.end();   // End the response early
  }

  // Start building the path of the file to serve
  let filePath = './public';

  // Match URL path to HTML files
  switch (req.url) {
    case '/':
      filePath += '/home.html';
      break;
    case '/about':
      filePath += '/about.html';
      break;
    case '/contact':
      filePath += '/contact.html';
      break;
    default:
      filePath += '/404.html';
      res.statusCode = 404; // Set status manually if route not found
      break;
  }

  // 3️⃣ Read the file and respond
  /**
   * fs.readFile(path, encoding, callback)
   * - path: File location to read
   * - encoding: 'utf8' ensures we get text instead of Buffer
   * - callback: function executed after file read completes
   *     ↳ takes 2 arguments: (err, data)
   *     - err → contains error info if read fails (null if success)
   *     - data → contains file contents if read is successful
   */
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      // Error occurred during file read (e.g., file missing)
      res.writeHead(500, { 'Content-Type': 'text/plain' });
      return res.end('Server Error');
    }

    // If no error, send the HTML file content back to the browser
    res.writeHead(res.statusCode || 200, { 'Content-Type': 'text/html' });
    res.end(data);
  });
});

// 4️⃣ Start the server
/**
 * server.listen(port, callback)
 * - port: the port number the server will listen to (e.g., 5000)
 * - callback: function to run once server starts
 */
server.listen(5000, () => {
  console.log('🚀 HTML Server running at http://localhost:5000');
});