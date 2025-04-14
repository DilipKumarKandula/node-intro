const http = require('http');
const url = require('url');

// Temporary storage for users
let users = [
  { id: 1, name: 'Kandula Dilip Kumar', role: 'Developer' },
  { id: 2, name: 'Jane Doe', role: 'Designer' },
];

// Create HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true); // Parse the URL
  const pathname = parsedUrl.pathname;

  // Set response header as JSON
  res.setHeader('Content-Type', 'application/json');

  // Check if the request is POST and path is /api/users
  if (req.method === 'POST' && pathname === '/api/users') {
    let body = '';

    // Receive data in chunks
    req.on('data', chunk => {
      body += chunk;
    });

    // After data is received
    req.on('end', () => {
      try {
        const newUser = JSON.parse(body);
        newUser.id = users.length + 1;
        users.push(newUser);

        res.writeHead(201);
        res.end(JSON.stringify(newUser));
      } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ message: 'Invalid JSON format' }));
      }
    });
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

// Start server on port 5000
server.listen(5000, () => {
  console.log('🚀 Server running at http://localhost:5000');
});
