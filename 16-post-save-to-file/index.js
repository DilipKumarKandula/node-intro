// 1️⃣ Import core modules
const http = require('http');           // To create the server
const fs = require('fs');               // To read/write users.json file
const path = require('path');           // To build file paths
const querystring = require('querystring'); // To parse form-encoded POST data

// 2️⃣ Define the path to the HTML form
const formPath = path.join(__dirname, '../public/post-request.html');
// __dirname = current folder (16-post-save-to-file)
// ../public/post-request.html → relative path to the form

// 3️⃣ Define the path to the users.json file
const usersFilePath = path.join(__dirname, 'users.json');
// This is where we'll store all submitted user data

// 4️⃣ Create HTTP server
const server = http.createServer((req, res) => {
  // Serve the form on root URL
  if (req.url === '/' && req.method === 'GET') {
    fs.readFile(formPath, (err, html) => {
      if (err) {
        res.writeHead(500);
        return res.end('❌ Failed to load form');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(html);
    });
  }

  // Handle POST request
  else if (req.url === '/api/users' && req.method === 'POST') {
    let body = '';

    // Read incoming data chunk by chunk
    req.on('data', chunk => {
      body += chunk.toString(); // Convert Buffer to string
    });

    // Once all data is received
    req.on('end', () => {
      const formData = querystring.parse(body); // Convert "key=value&key2=value2" to JS object

      // Read existing users from users.json (if it exists)
      fs.readFile(usersFilePath, 'utf8', (err, data) => {
        let users = [];

        if (!err && data) {
          users = JSON.parse(data); // Parse existing users
        }

        // Add new user to array
        const newUser = {
          id: users.length + 1,
          name: formData.name,
          role: formData.role,
        };

        users.push(newUser); // Add to users array

        // Save updated users array to file
        fs.writeFile(usersFilePath, JSON.stringify(users, null, 2), err => {
          if (err) {
            res.writeHead(500);
            return res.end(JSON.stringify({ message: '❌ Failed to save user' }));
          }

          res.writeHead(201, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ message: '✅ User saved successfully', user: newUser }));
        });
      });
    });
  }

  // 404 for any other route
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: '❌ Route not found' }));
  }
});

// 5️⃣ Start the server
server.listen(5000, () => {
  console.log('🚀 Server running at http://localhost:5000');
});
