// 1️⃣ Import core module
const http = require('http');  // For creating the server

// 2️⃣ Create the HTTP server
const server = http.createServer((req, res) => {
  // Set header to respond with JSON
  res.setHeader('Content-Type', 'application/json');

  // 3️⃣ Check if it is a POST request to the correct route
  if (req.method === 'POST' && req.url === '/api/users') {

    let body = '';  // Initialize an empty string to collect data chunks

    // 4️⃣ Listen for data chunks being sent by the client
    req.on('data', (chunk) => {
      body += chunk.toString();  // Convert Buffer to string and append
    });

    // 5️⃣ When all data is received
    req.on('end', () => {
      try {
        const userData = JSON.parse(body); // Convert JSON string to JS object

        console.log('📥 Received user data:', userData);

        // Simulate saving user (in real apps, you'd save to DB here)
        res.writeHead(201); // 201 = Created
        res.end(JSON.stringify({ message: '✅ User created successfully', user: userData }));
      } catch (error) {
        res.writeHead(400); // Bad request
        res.end(JSON.stringify({ message: '❌ Invalid JSON format' }));
      }
    });

  } else {
    // 6️⃣ Handle all other routes
    res.writeHead(404);
    res.end(JSON.stringify({ message: '❌ Route not found' }));
  }
});

// 7️⃣ Start the server
server.listen(5000, () => {
  console.log('🚀 POST API server running at http://localhost:5000/api/users');
});