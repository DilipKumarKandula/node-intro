// this is the comment. It's ignored by node.js

// 1.print a message to the Terminal 
console.log("Hello, Dilip welcome to Node.js");


// 2.Access system information using 'os' module

const os=require('os');

console.log("Your computer name is:", os.hostname());   // Printing system name 
console.log("you are using",os.platform(), os.arch());  // Os type and architecture
console.log("Total memory in MB:", os.totalmem()/1024/1024); // Total memory 
console.log("this file is runing from", __dirname);