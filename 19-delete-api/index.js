const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Dummy user data
let users = [
  { id: 1, name: 'Kandula Dilip Kumar', role: 'Developer' },
  { id: 2, name: 'Jane Doe', role: 'Designer' },
  { id: 3, name: 'John Smith', role: 'Tester' },
];

const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Serve the HTML file on browser request
  if (req.method === 'GET' && pathname === '/') {
    const filePath = path.join(__dirname, '../public/delete-request.html');
    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading HTML file');
      } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(data);
      }
    });
    return;
  }

  // Set default JSON header
  res.setHeader('Content-Type', 'application/json');

  // Handle DELETE /api/users/:id
  if (method === 'DELETE' && pathname.startsWith('/api/users/')) {
    const id = parseInt(pathname.split('/').pop());

    const index = users.findIndex(user => user.id === id);

    if (index !== -1) {
      const deletedUser = users.splice(index, 1)[0];
      res.writeHead(200);
      res.end(JSON.stringify({ message: 'User deleted', user: deletedUser }));
    } else {
      res.writeHead(404);
      res.end(JSON.stringify({ message: 'User not found' }));
    }
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

server.listen(5000, () => {
  console.log('🚀 Server running at http://localhost:5000');
});
