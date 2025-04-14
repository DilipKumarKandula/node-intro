// 1️⃣ Import built-in core modules

const http = require('http'); 
// 'http' is a built-in Node.js module used to create web servers.
// `require('http')` loads the module and gives access to its methods like `createServer()`.

const url = require('url'); 
// 'url' is another built-in module used to parse incoming request URLs.
// It helps extract the pathname and query parameters from the URL.
// 2️⃣ Sample user data (in-memory array)

const users = [
    { id: 1, name: 'Kandula Dilip Kumar', role: 'Developer' },
    { id: 2, name: 'Jane Doe', role: 'Designer' },
    { id: 3, name: 'Max', role: 'Tester' }
  ];
  // This is a hard-coded array of user objects.
  // Each object has keys: id, name, and role.
  // We'll use this to simulate database data.
  // 3️⃣ Create the HTTP server

const server = http.createServer((req, res) => {
    // http.createServer() creates a server instance.
    // It takes a callback function with two arguments:
    // - req (IncomingMessage object): Contains request data (URL, method, headers)
    // - res (ServerResponse object): Used to send data back to the client.
  
    const parsedUrl = url.parse(req.url, true);  
    // req.url = the path requested by the client (e.g., "/api/users?id=2")
    // url.parse(url, true) breaks it down into parts:
    // - pathname → "/api/users"
    // - query → { id: "2" }  (if ?id=2 is in the URL)
    // true = parse query string into an object
  
    const pathname = parsedUrl.pathname;  // just the path (e.g., "/api/users")
    const query = parsedUrl.query;        // the query parameters (e.g., { id: "2" })
  
    console.log(`📥 Path: ${pathname} | Query:`, query);  // Logs for debugging
    // Set response content type to JSON
    res.setHeader('Content-Type', 'application/json');
    // res.setHeader(name, value) sets headers.
    // 'Content-Type: application/json' tells the client that the response will be in JSON format.
    // 4️⃣ Handle /api/users route
    if (pathname === '/api/users') {
        // Checks if the path is exactly "/api/users"
    
        if (query.id) {
          // If an 'id' query param exists (?id=2), filter for that user.
    
          const userId = parseInt(query.id); 
          // Convert the 'id' from string to number for comparison.
    
          const user = users.find(u => u.id === userId); 
          // Array.find() loops through the array and returns the first user where u.id === userId.
    
          if (user) {
            res.writeHead(200); 
            // 200 = success status code
            res.end(JSON.stringify(user)); 
            // res.end() sends the response and ends the connection.
            // JSON.stringify() converts JS object to JSON string for output.
          } else {
            res.writeHead(404); 
            // 404 = not found
            res.end(JSON.stringify({ message: '❌ User not found' }));
          }
    
        } else {
          // If no id is passed (just /api/users), return the whole list
          res.writeHead(200);
          res.end(JSON.stringify(users));
        }
    
      } else {
        // If the path doesn't match /api/users, send a 404 route not found
        res.writeHead(404);
        res.end(JSON.stringify({ message: '❌ Route not found' }));
      }
    });
    // 5️⃣ Start the server
server.listen(5000, () => {
    // server.listen(port, callback)
    // Starts the server and binds it to port 5000
  
    console.log('🚀 Filterable JSON API running at http://localhost:5000/api/users');
    // Message shown once the server starts successfully
  });
