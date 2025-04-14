// 1️⃣ Import required core modules
const http = require('http');     // To create HTTP server
const url = require('url');       // To parse URL and extract query params

// 2️⃣ Sample user data (in-memory)
const users = [
  { id: 1, name: 'Kandula Dilip Kumar', role: 'Developer' },
  { id: 2, name: 'Jane Doe', role: 'Designer' },
  { id: 3, name: 'Max', role: 'Tester' }
];

// 3️⃣ Create the server
const server = http.createServer((req, res) => {
  // Parse the full URL
  const parsedUrl = url.parse(req.url, true);  // true => gives query as object
  const pathname = parsedUrl.pathname;         // example: /api/users
  const query = parsedUrl.query;               // example: { id: '2' }

  console.log(`📥 Incoming Request: ${pathname} | Query:`, query);

  res.setHeader('Content-Type', 'application/json');

  // Handle GET request to /api/users
  if (pathname === '/api/users') {
    if (query.id) {
      const userId = parseInt(query.id); // Convert string to number
      const user = users.find(u => u.id === userId);

      if (user) {
        res.writeHead(200);
        res.end(JSON.stringify(user));
      } else {
        res.writeHead(404);
        res.end(JSON.stringify({ message: '❌ User not found' }));
      }
    } else {
      // No query param => return all users
      res.writeHead(200);
      res.end(JSON.stringify(users));
    }
  } else {
    // Invalid route
    res.writeHead(404);
    res.end(JSON.stringify({ message: '❌ Route not found' }));
  }
});

// 4️⃣ Start the server
server.listen(5000, () => {
  console.log('🚀 Server running at http://localhost:5000/api/users');
});