// 1️⃣ Import the 'fs' module
const fs = require('fs');

// 2️⃣ READ a file (synchronously)
const content = fs.readFileSync('./data/sample.txt', 'utf8');
console.log("📖 File content:", content);

// 3️⃣ WRITE a new file (overwrites if exists)
fs.writeFileSync('./data/newFile.txt', 'This is a new file created using Node.js!');
console.log("📝 newFile.txt created successfully");

// 4️⃣ APPEND to an existing file (adds more text)
fs.appendFileSync('./data/sample.txt', '\nThis line was appended later.');
console.log("➕ Text appended to sample.txt");

// 5️⃣ DELETE a file
fs.unlinkSync('./data/newFile.txt');
console.log("🗑️ newFile.txt deleted successfully");
