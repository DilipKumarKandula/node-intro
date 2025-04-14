// // 1️⃣ Import the built-in HTTP module
// const http = require('http');

// // 2️⃣ Create HTTP server
// const server = http.createServer((req, res) => {
//   // 3️⃣ Check if the request is POST and to the correct route
//   if (req.method === 'POST' && req.url === '/api/users') {

//     let body = ''; // to collect data chunks

//     // 4️⃣ Listen for data chunks being sent from client
//     req.on('data', chunk => {
//       body += chunk; // accumulate the chunks
//     });

//     // 5️⃣ When all data is received
//     req.on('end', () => {
//       try {
//         // Convert received string to object
//         const parsedData = JSON.parse(body);

//         console.log('📩 Received Data:', parsedData);

//         // Send success response
//         res.writeHead(201, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({
//           message: '✅ User data received successfully',
//           user: parsedData
//         }));
//       } catch (error) {
//         // Handle invalid JSON
//         res.writeHead(400, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify({ message: '❌ Invalid JSON format' }));
//       }
//     });

//   } else {
//     // Route not found
//     res.writeHead(404, { 'Content-Type': 'application/json' });
//     res.end(JSON.stringify({ message: '❌ Route not found' }));
//   }
// });

// // 6️⃣ Start server on port 5000
// server.listen(5000, () => {
//   console.log('🚀 Server running at http://localhost:5000');
// });


// Import core modules
const http = require('http');
const fs = require('fs');
const path = require('path');

// Create HTTP server
const server = http.createServer((req, res) => {
  // Serve the HTML form (GET /)
  if (req.method === 'GET' && req.url === '/') {
    const filePath = path.join(__dirname, 'public', 'post-request.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        return res.end('Error loading HTML file');
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }

  // Handle POST request
  else if (req.method === 'POST' && req.url === '/api/users') {
    let body = '';

    req.on('data', chunk => {
      body += chunk.toString(); // Collect incoming data
    });

    req.on('end', () => {
      const parsedData = new URLSearchParams(body);
      const name = parsedData.get('name');
      const email = parsedData.get('email');

      // Respond with received data
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({
        message: '✅ User data received!',
        name,
        email
      }));
    });
  }

  // 404 fallback
  else {
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: '❌ Route not found' }));
  }
});

// Start the server
server.listen(5000, () => {
  console.log('🚀 Server running at http://localhost:5000');
});
