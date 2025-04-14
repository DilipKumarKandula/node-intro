// // Import the built-in 'http' module
// const http=require('http');

// // Create the server
// const server=http.createServer((req,res)=>{
//     console.log('New request received');

//     // Set response header and status 
//     res.writeHead(200,{'content-type':'text/plain'});

//     // write and end the response
//     res.end('Hello Dilip! welcome to your first node.js server!');
// });

// // start the server on port 5000

// server.listen(5000,()=>{
//     console.log('server running at https://localhost:5000');

// });



const http=require('http');


const server=http.createServer((req,res)=>{
    console.log("New request received");
    // Set the response Header and Status 
    res.writeHead(200,{'content-type':'text/plain'});
    res.end("Helow hiii from side it's over")
})

server.listen(4000,()=>{
    console.log('server running at http://localhost:4000');
})