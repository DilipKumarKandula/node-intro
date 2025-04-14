const http = require('http');
const url = require('url');
const fs = require('fs');

// Read users data from users.json
function readUsersFromFile(callback) {
  fs.readFile('users.json', 'utf-8', (err, data) => {
    if (err) {
      console.error("Error reading users data:", err);
      return callback([]);
    }
    callback(JSON.parse(data));
  });
}

// Write updated users data to users.json
function writeUsersToFile(users, callback) {
  fs.writeFile('users.json', JSON.stringify(users, null, 2), 'utf-8', (err) => {
    if (err) {
      console.error("Error writing users data:", err);
      return callback(false);
    }
    callback(true);
  });
}

// Create HTTP server
const server = http.createServer((req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  const method = req.method;

  res.setHeader('Content-Type', 'application/json');

  // Handle PUT request: /api/users/:id
  if (method === 'PUT' && pathname.startsWith('/api/users/')) {
    const id = parseInt(pathname.split('/').pop()); // extract ID from URL
    let body = '';

    req.on('data', chunk => {
      body += chunk;
    });

    req.on('end', () => {
      try {
        const updatedUser = JSON.parse(body);

        readUsersFromFile((users) => {
          const userIndex = users.findIndex(user => user.id === id);

          if (userIndex !== -1) {
            // Update user data
            users[userIndex] = { ...users[userIndex], ...updatedUser };
            writeUsersToFile(users, (success) => {
              if (success) {
                res.writeHead(200);
                res.end(JSON.stringify({ message: 'User updated successfully', user: users[userIndex] }));
              } else {
                res.writeHead(500);
                res.end(JSON.stringify({ message: 'Error updating user' }));
              }
            });
          } else {
            res.writeHead(404);
            res.end(JSON.stringify({ message: 'User not found' }));
          }
        });
      } catch (err) {
        res.writeHead(400);
        res.end(JSON.stringify({ message: 'Invalid data format' }));
      }
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
