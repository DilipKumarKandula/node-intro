const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

// Helper function to read users from the file
function readUsersFromFile(callback) {
  fs.readFile(path.join(__dirname, 'users.json'), 'utf8', (err, data) => {
    if (err) return callback(err);
    try {
      const users = JSON.parse(data);
      callback(null, users);
    } catch (err) {
      callback(err);
    }
  });
}

// Helper function to write updated users back to the file
function writeUsersToFile(users, callback) {
  fs.writeFile(
    path.join(__dirname, 'users.json'),
    JSON.stringify(users, null, 2),
    'utf8',
    callback
  );
}

// Create server to serve static files (HTML) and handle API requests
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  // Set the response header
  res.setHeader('Content-Type', 'application/json');

  // Serve static HTML file
  if (pathname === '/delete-request.html') {
    fs.readFile(path.join(__dirname, 'delete-request.html'), 'utf8', (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end(JSON.stringify({ message: 'Error loading HTML file' }));
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  }
  // Handle DELETE request: /api/users/:id
  else if (method === 'DELETE' && pathname.startsWith('/api/users/')) {
    const id = parseInt(pathname.split('/').pop());

    readUsersFromFile((err, users) => {
      if (err) {
        res.writeHead(500);
        return res.end(JSON.stringify({ message: 'Failed to read users file' }));
      }

      const index = users.findIndex(user => user.id === id);
      if (index === -1) {
        res.writeHead(404);
        return res.end(JSON.stringify({ message: 'User not found' }));
      }

      const deletedUser = users.splice(index, 1)[0];

      writeUsersToFile(users, err => {
        if (err) {
          res.writeHead(500);
          return res.end(JSON.stringify({ message: 'Failed to write to file' }));
        }

        res.writeHead(200);
        res.end(JSON.stringify({ message: 'User deleted', user: deletedUser }));
      });
    });
  } else {
    res.writeHead(404);
    res.end(JSON.stringify({ message: 'Route not found' }));
  }
});

// Start server on port 5000
server.listen(5000, () => {
  console.log('🚀 Server running on http://localhost:5000');
});
