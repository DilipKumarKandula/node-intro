// 1️⃣ Import core Node.js modules

const http = require('http'); 
// ⬆️ Loads Node's built-in HTTP module to create the server

const fs = require('fs'); 
// ⬆️ fs (File System) module allows us to read/write files from disk

const path = require('path'); 
// ⬆️ path module helps in building correct file paths (works cross-platform)


// 2️⃣ Create a path to the JSON data file (./data/users.json)

const dataPath = path.join(__dirname, 'data', 'users.json');
/**
 * path.join(...) safely combines multiple path segments into one.
 * __dirname gives the absolute path to the current file’s folder.
 * This line creates a full path like:
 * "C:/myfiles-personal/Myproject/node-intro/data/users.json"
 */


// 3️⃣ Create the HTTP server

const server = http.createServer((req, res) => {
  // req = request from the client (browser, Postman, etc.)
  // res = response we will send back to the client

  console.log(`📥 Request URL: ${req.url}`); 
  // Log incoming request URL

  // 4️⃣ Handle the "/api/users" route to send JSON data
  if (req.url === '/api/users') {

    // 🔹 Read the users.json file
    fs.readFile(dataPath, 'utf8', (err, data) => {
      // readFile() reads file asynchronously
      // Parameters:
      // - dataPath: full path of file
      // - 'utf8': encoding (returns string instead of binary Buffer)
      // - callback: function(err, data)

      if (err) {
        // If error reading file (e.g., file missing or permission denied)
        res.writeHead(500, { 'Content-Type': 'application/json' }); 
        // 500 = Internal Server Error
        return res.end(JSON.stringify({ error: 'Server Error' }));
        // Send JSON error response
      }

      // 🟢 Success! Send back the JSON content
      res.writeHead(200, { 'Content-Type': 'application/json' });
      // Set 200 OK and content type to JSON
      res.end(data); // Send raw JSON from file as response
    });

  } else {
    // 5️⃣ Handle any other routes (invalid)
    res.writeHead(404, { 'Content-Type': 'application/json' }); 
    // 404 = Not Found
    res.end(JSON.stringify({ error: 'Route not found' }));
    // Send error response as JSON
  }
});


// 6️⃣ Start the server

server.listen(5000, () => {
  // Starts the server on port 5000
  console.log('🚀 JSON API Server running at http://localhost:5000/api/users');
});
