const os = require('os');

// 1. os.arch() - Returns the architecture of the operating system (e.g., 'x64', 'arm', etc.)
console.log('OS Architecture:', os.arch()); 
// Explanation: This returns the architecture type of the system, such as 64-bit ('x64') or ARM architecture.


// 2. os.cpus() - Returns an array of objects containing details about each CPU core.
console.log('CPU Information:', os.cpus());
// Explanation: This provides information about the system's CPUs, such as the model, speed, and time spent in various states (user, sys, idle, etc.).



// 3. os.endianness() - Returns the endianness (byte order) of the CPU.
console.log('Endianness:', os.endianness());
// Explanation: This will tell you whether the system uses 'BE' (Big Endian) or 'LE' (Little Endian) byte order for memory storage.



// 4. os.freemem() - Returns the amount of free system memory in bytes.
console.log('Free Memory (in bytes):', os.freemem());
// Explanation: This gives the available free memory in bytes. It's useful for monitoring system resource usage.


// 5. os.homedir() - Returns the home directory of the current user.
console.log('Home Directory:', os.homedir());
// Explanation: This method returns the home directory path for the currently logged-in user.



// 6. os.hostname() - Returns the hostname of the operating system.
console.log('Hostname:', os.hostname());
// Explanation: This will output the system's hostname (the name of the machine or computer).


// 7. os.loadavg() - Returns an array with the system load averages for the last 1, 5, and 15 minutes.
console.log('System Load Average (1, 5, 15 mins):', os.loadavg());
// Explanation: This array gives the average system load over the last 1, 5, and 15 minutes. Load refers to how much processing the system is handling.



// 8. os.networkInterfaces() - Returns an object containing network interfaces details.
console.log('Network Interfaces:', os.networkInterfaces());
// Explanation: This will return an object listing all network interfaces on the system, including their IP addresses, MAC addresses, and connection types.


// 9. os.platform() - Returns the operating system platform ('darwin', 'win32', 'linux', etc.).
console.log('Platform:', os.platform());
// Explanation: This gives the operating system's platform (e.g., 'win32' for Windows, 'darwin' for macOS, 'linux' for Linux).


// 10. os.release() - Returns the release version of the operating system.
console.log('OS Release Version:', os.release());
// Explanation: This method returns the version of the operating system, such as '10.15.7' for macOS or '10.0.19041' for Windows.


/* 
11. os.tmpdir() - Returns the system’s default directory for temporary files.
*/
console.log('Temporary Directory:', os.tmpdir());
// Explanation: This method returns the default temporary directory path for the system. It’s commonly used for storing temporary files during app execution.


// 12. os.totalmem() - Returns the total amount of system memory (RAM) in bytes.
console.log('Total Memory (in bytes):', os.totalmem());
// Explanation: This gives the total amount of memory installed on the system in bytes. It can be used for system resource monitoring.


// 13. os.uptime() - Returns the system uptime in seconds.
console.log('System Uptime (in seconds):', os.uptime());
// Explanation: This method gives the amount of time the system has been running (since the last reboot) in seconds.


/* 
14. os.userInfo() - Returns information about the current user, including username, home directory, etc.
*/
console.log('User Information:', os.userInfo());
// Explanation: This method returns an object containing information about the currently logged-in user, such as their username, user ID, home directory, and more.