// 1️⃣ Import required core modules
const http = require('http');         // To create server
const url = require('url');           // To parse URL and extract query params

// 2️⃣ Sample user data
const users = [
  { id: 1, name: 'Kandula Dilip Kumar', role: 'Developer' },
  { id: 2, name: 'Jane Doe', role: 'Designer' },
  { id: 3, name: 'Max', role: 'Tester' },
  { id: 4, name: 'Kandula Dilip Kumar', role: 'Tester' }
];

// 3️⃣ Create HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // parse the full URL
  const pathname = parsedUrl.pathname;        // get just the route/path
  const query = parsedUrl.query;              // get query parameters as object

  console.log(`📥 Path: ${pathname} | Query:`, query);

  // 4️⃣ Set content type
  res.setHeader('Content-Type', 'application/json');

  // 5️⃣ Handle /api/users route
  if (pathname === '/api/users') {
    let filteredUsers = users;

    // If query contains name, filter by name
    if (query.name) {
      filteredUsers = filteredUsers.filter(u =>
        u.name.toLowerCase() === query.name.toLowerCase()
      );
    }

    // If query contains role, filter by role
    if (query.role) {
      filteredUsers = filteredUsers.filter(u =>
        u.role.toLowerCase() === query.role.toLowerCase()
      );
    }

    if (filteredUsers.length > 0) {
      res.writeHead(200);
      res.end(JSON.stringify(filteredUsers));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: '❌ No users found with matching filters' }));
    }

  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: '❌ Route not found' }));
  }
});

// 6️⃣ Start the server
server.listen(5000, () => {
  console.log('🚀 Multi-filter JSON API running at http://localhost:5000/api/users');
});