// What are Modules in Node.js?

// In Node.js, a module is simply a reusable block of code. You can import it wherever you need it using require().

// 🔹 There are 3 types of modules:
// Type	Example	Where it comes from
// ✅ Built-in	fs, os, path	Provided by Node.js itself
// 🧩 Custom	Your own .js files	You create them manually
// 📦 Third-party	express, chalk	Installed via npm





// ------------------------------

// import built-in path module

const path =require('path');

// Get the full path of this file
console.log(" full file path:", __filename);

// Get file extension 
console.log(" File extension:",path.extname(__filename));

// Get base file name
console.log("file name:", path.basename(__filename));


const fullPath=path.join(__dirname,'files','text.txt');
console.log("Joined path:",fullPath);