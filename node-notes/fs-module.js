// fs-module-commands.js

const fs = require('fs');
const path = require('path');

// =========================================================
// 1. READ FILE (ASYNC)
// fs.readFile(path, encoding, callback)
// Reads file contents asynchronously. Does not block execution.
// Output: Contents of example.txt (if it exists)
fs.readFile('example.txt', 'utf8', (err, data) => {
  if (err) console.error("1. Read Error:", err);
  else console.log("1. Read File Async Output:", data);
});

// =========================================================
// 2. READ FILE (SYNC)
// fs.readFileSync(path, encoding)
// Reads file contents synchronously. Blocks execution until complete.
// Output: Contents of example.txt
try {
  const dataSync = fs.readFileSync('example.txt', 'utf8');
  console.log("2. Read File Sync Output:", dataSync);
} catch (err) {
  console.error("2. Read Error (Sync):", err);
}

// =========================================================
// 3. WRITE FILE (ASYNC)
// fs.writeFile(path, data, callback)
// Overwrites or creates a file asynchronously with given content.
// Output: File example.txt is created or overwritten.
fs.writeFile('example.txt', 'Hello from writeFile!', (err) => {
  if (err) console.error("3. Write Error:", err);
  else console.log("3. File written successfully (Async)");
});

// =========================================================
// 4. WRITE FILE (SYNC)
// fs.writeFileSync(path, data)
// Synchronously creates or overwrites file with given content.
// Output: File example-sync.txt is created/updated.
try {
  fs.writeFileSync('example-sync.txt', 'Sync write example.');
  console.log("4. File written successfully (Sync)");
} catch (err) {
  console.error("4. Write Error (Sync):", err);
}

// =========================================================
// 5. APPEND FILE (ASYNC)
// fs.appendFile(path, data, callback)
// Adds content at the end of an existing file asynchronously.
// Output: example.txt updated with new content at the end.
fs.appendFile('example.txt', '\nAppended async line.', (err) => {
  if (err) console.error("5. Append Error:", err);
  else console.log("5. Content appended (Async)");
});

// =========================================================
// 6. APPEND FILE (SYNC)
// fs.appendFileSync(path, data)
// Adds content synchronously at the end of a file.
// Output: example.txt updated with new sync line.
try {
  fs.appendFileSync('example.txt', '\nAppended sync line.');
  console.log("6. Content appended (Sync)");
} catch (err) {
  console.error("6. Append Error (Sync):", err);
}

// =========================================================
// 7. RENAME FILE (ASYNC)
// fs.rename(oldPath, newPath, callback)
// Renames or moves a file asynchronously.
// Output: example-sync.txt renamed to renamed-example.txt
fs.rename('example-sync.txt', 'renamed-example.txt', (err) => {
  if (err) console.error("7. Rename Error:", err);
  else console.log("7. File renamed (Async)");
});

// =========================================================
// 8. RENAME FILE (SYNC)
// fs.renameSync(oldPath, newPath)
// Renames file synchronously.
// Output: renamed-example.txt renamed back to example-sync.txt
try {
  fs.renameSync('renamed-example.txt', 'example-sync.txt');
  console.log("8. File renamed back (Sync)");
} catch (err) {
  console.error("8. Rename Error (Sync):", err);
}

// =========================================================
// 9. DELETE FILE (ASYNC)
// fs.unlink(path, callback)
// Deletes a file asynchronously.
// Output: delete-me.txt is deleted
fs.unlink('delete-me.txt', (err) => {
  if (err) console.error("9. Delete Error (Async):", err);
  else console.log("9. File deleted (Async)");
});

// =========================================================
// 10. DELETE FILE (SYNC)
// fs.unlinkSync(path)
// Deletes file synchronously.
// Output: delete-me-sync.txt is removed
try {
  fs.unlinkSync('delete-me-sync.txt');
  console.log("10. File deleted (Sync)");
} catch (err) {
  console.error("10. Delete Error (Sync):", err);
}

// =========================================================
// 11. CREATE FOLDER (ASYNC)
// fs.mkdir(path, callback)
// Creates a new folder asynchronously.
// Output: new-folder is created
fs.mkdir('new-folder', (err) => {
  if (err) console.error("11. Folder Create Error:", err);
  else console.log("11. Folder created (Async)");
});

// =========================================================
// 12. CREATE FOLDER (SYNC)
// fs.mkdirSync(path)
// Creates directory synchronously.
// Output: new-folder-sync is created
try {
  fs.mkdirSync('new-folder-sync');
  console.log("12. Folder created (Sync)");
} catch (err) {
  console.error("12. Folder Create Error (Sync):", err);
}

// =========================================================
// 13. REMOVE FOLDER (ASYNC)
// fs.rm(path, options, callback)
// Deletes a folder recursively (with content) asynchronously.
// Output: new-folder is deleted
fs.rm('new-folder', { recursive: true, force: true }, (err) => {
  if (err) console.error("13. Folder Remove Error:", err);
  else console.log("13. Folder removed (Async)");
});

// =========================================================
// 14. REMOVE FOLDER (SYNC)
// fs.rmSync(path, options)
// Removes folder recursively (including contents) synchronously.
// Output: new-folder-sync is deleted
try {
  fs.rmSync('new-folder-sync', { recursive: true, force: true });
  console.log("14. Folder removed (Sync)");
} catch (err) {
  console.error("14. Folder Remove Error (Sync):", err);
}

// =========================================================
// 15. READ DIRECTORY
// fs.readdir(path, callback)
// Reads all file and folder names inside a directory.
// Output: List of files and folders in current directory
fs.readdir('.', (err, files) => {
  if (err) console.error("15. Read Directory Error:", err);
  else console.log("15. Directory files:", files);
});

// =========================================================
// 16. GET FILE STATS
// fs.stat(path, callback)
// Provides detailed information about a file (size, type, etc).
// Output: Boolean if it's file/folder and file size
fs.stat('example.txt', (err, stats) => {
  if (err) console.error("16. Stat Error:", err);
  else {
    console.log("16. Is File:", stats.isFile());
    console.log("16. Size in bytes:", stats.size);
  }
});

// =========================================================
// 17. COPY FILE
// fs.copyFile(src, dest, callback)
// Makes a copy of an existing file.
// Output: example-copy.txt is created as a copy of example.txt
fs.copyFile('example.txt', 'example-copy.txt', (err) => {
  if (err) console.error("17. Copy Error:", err);
  else console.log("17. File copied successfully");
});

// =========================================================
// 18. EXISTS SYNC
// fs.existsSync(path)
// Checks if a file or directory exists.
// Output: true or false printed
if (fs.existsSync('example.txt')) {
  console.log("18. example.txt exists.");
} else {
  console.log("18. example.txt does NOT exist.");
}
