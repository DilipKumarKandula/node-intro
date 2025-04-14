// ✅ Node.js Static File Server with MIME Type Support

// 1️⃣ Import modules
const http = require('http');   // Core module to create HTTP server
const fs = require('fs');       // Core module to interact with file system (read/write files)
const path = require('path');   // Core module to handle and transform file paths

// 2️⃣ Create server
const server = http.createServer((req, res) => {
  console.log(`📥 Request URL: ${req.url}`); // Logs requested URL to terminal

  /**
   * 3️⃣ Set default file path
   * - __dirname: refers to the current directory of this file
   * - path.join(): safely joins segments to form a valid file path
   * - If root ("/"), serve 'index.html', else serve the file requested
   */
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);

  /**
   * 4️⃣ Get the file extension (e.g., .html, .css, .js)
   * - path.extname(filePath): extracts extension from filePath string
   */
  const extname = path.extname(filePath);

  /**
   * 5️⃣ Determine MIME type based on file extension
   * - Browser uses this to understand how to render content
   * - Default: 'text/html' for HTML files
   */
  let contentType = 'text/html';  // default
  switch (extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
    case '.jpeg':
      contentType = 'image/jpeg';
      break;
  }

  /**
   * 6️⃣ Read and return the requested file
   * - fs.readFile(path, callback)
   * - callback gets (err, content):
   *     ↳ err: contains error if read fails
   *     ↳ content: the file content as Buffer if successful
   */
  fs.readFile(filePath, (err, content) => {
    if (err) {
      // 🛑 File not found error (ENOENT = Error NO ENTry)
      if (err.code === 'ENOENT') {
        // Serve a 404 page
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err404, notFoundPage) => {
          res.writeHead(404, { 'Content-Type': 'text/html' });
          res.end(notFoundPage); // Show custom 404 page
        });
      } else {
        // ⚠️ Other server-side errors
        res.writeHead(500);
        res.end('Server Error: ' + err.code); // Send raw error to browser
      }
    } else {
      // ✅ File successfully read, send it with appropriate content type
      res.writeHead(200, { 'Content-Type': contentType });
      res.end(content); // Send the file content to the browser
    }
  });
});

// 7️⃣ Start the server on port 5000
// server.listen(port, callback): starts the server and runs callback once server is live
server.listen(5000, () => {
  console.log('🚀 Server is running on http://localhost:5000');
});