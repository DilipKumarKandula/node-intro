// 1️⃣ Import 'fs' module
const fs = require('fs');

// 2️⃣ Create a new file and write your short bio
fs.writeFileSync('./data/myNote.txt', '👤 I am Kandula Dilip Kumar.\n💼 I am learning Full Stack Development.');
console.log("📄 myNote.txt created.");

// 3️⃣ Append one motivational line
fs.appendFileSync('./data/myNote.txt', '\n🚀 Learning Node.js with 💪');
console.log("➕ Added motivation message.");

// 4️⃣ Read final content of the file
const finalContent = fs.readFileSync('./data/myNote.txt', 'utf8');
console.log("📖 Final content:\n" + finalContent);

// 5️⃣ Optional: Delete the file
fs.unlinkSync('./data/myNote.txt');
console.log("🗑️ myNote.txt deleted.");





// Custome notes 
fs.writeFileSync('./data/newFile.txt',"It is my new File");
console.log("new file is created and text is inserted in the file");


fs.appendFileSync('./data/newFile.txt'," and It is working");
console.log("new text is added successfully")

// reading the content 
const  finalData=fs.readFileSync('./data/newfile.txt','utf8');
console.log("finalt content:", finalData);