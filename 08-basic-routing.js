// 1️⃣ Import http module
const http = require('http');

// 2️⃣ Create the server
const server = http.createServer((req, res) => {
  const url = req.url;

  console.log(`URL requested: ${url}`);

  // 3️⃣ Special case: handle favicon.ico to prevent error
  if (url === '/favicon.ico') {
    res.writeHead(204, { 'Content-Type': 'image/x-icon' }); // 204 means No Content
    return res.end();
  }

  // 4️⃣ Set content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // 5️⃣ Handle routes
  if (url === '/') {
    res.end('Welcome to Home Page');
  } else if (url === '/about') {
    res.end('ℹ️ About Kandula Dilip Kumar');
  } else if (url === '/contact') {
    res.end('Contact me at: dilip@example.com');
  } else {
    // Rewriting headers here again will cause error if already sent
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

// 6️⃣ Start server
server.listen(5000, () => {
  console.log('Server is running at http://localhost:5000');
});