// basename() – Extract the last portion of the path.

// delimiter – Platform-specific delimiter used in environment variables.

// dirname() – Extract the directory part of the path.

// extname() – Extract the file extension.

// format() – Convert an object to a path string.

// isAbsolute() – Check if the path is absolute.

// join() – Join multiple path segments into one.

// normalize() – Normalize a path by resolving .. and redundant slashes.

// parse() – Break down a path into its components.

// resolve() – Resolve a sequence of paths into an absolute path.

// relative() – Get the relative path from one path to another.

// sep – The platform-specific path separator.

// toNamespacedPath() – Convert a path to a format suitable for UNC paths on Windows.







// -----------------------------------------------------------------------------------------------------------------------



// The path module in Node.js provides utilities for working with file and directory paths.
//  It helps to handle and manipulate file paths in a platform-independent way, which is especially useful
//  when writing code that works across different operating systems (Windows, macOS, Linux).

// Here’s a detailed explanation of all the commonly used methods in the path module:

// 1. path.basename(path[, ext])
// This method returns the last portion of a path, similar to the basename command in Unix/Linux.
//  You can also pass an optional ext parameter to remove a specific extension from the result.



// Parameters:
// path: The file path to extract the base name from.

// ext (optional): The file extension to be removed from the base name.









// -----> Commands  <------



const path = require('path');

// 1. path.basename(path[, ext])
// Extracts the last portion of the path (i.e., the file or directory name).
// Optionally, you can remove the file extension by providing the ext argument.
console.log('basename:', path.basename('/home/user/dir/file.txt'));  // Outputs: 'file.txt'
console.log('basename without extension:', path.basename('/home/user/dir/file.txt', '.txt'));  // Outputs: 'file'

// 2. path.delimiter
// Returns the platform-specific delimiter used in environment variables.
// On Unix-like systems, it's `:`, and on Windows, it's `;`.
console.log('delimiter:', path.delimiter);  // Outputs: ';' on Windows, ':' on Linux/macOS

// 3. path.dirname(path)
// Returns the directory name of a given path, excluding the last portion (file or folder).
console.log('dirname:', path.dirname('/home/user/dir/file.txt'));  // Outputs: '/home/user/dir'

// 4. path.extname(path)
// Returns the file extension, including the dot (`.`). If there is no extension, it returns an empty string.
console.log('extname:', path.extname('/home/user/dir/file.txt'));  // Outputs: '.txt'
console.log('extname no extension:', path.extname('/home/user/dir/file'));  // Outputs: ''

// 5. path.format(pathObject)
// Converts a path object to a string representation of the file path.
// The object should contain properties like `dir`, `root`, `base`, `name`, and `ext`.
const pathObj = {
  dir: '/home/user/dir',
  base: 'file.txt'
};
console.log('format:', path.format(pathObj));  // Outputs: '/home/user/dir/file.txt'

// 6. path.isAbsolute(path)
// Checks if the path is an absolute path (i.e., starts from the root directory).
console.log('isAbsolute (absolute path):', path.isAbsolute('/home/user/dir'));  // Outputs: true
console.log('isAbsolute (relative path):', path.isAbsolute('home/user/dir'));  // Outputs: false

// 7. path.join(...paths)
// Joins multiple path segments into a single path and normalizes it.
// This is useful for constructing file paths that are portable across platforms.
console.log('join:', path.join('/home', 'user', 'dir', 'file.txt'));  // Outputs: '/home/user/dir/file.txt'

// 8. path.normalize(path)
// Normalizes a given path by resolving `..` (parent directory) and redundant slashes.
console.log('normalize:', path.normalize('/home/user//dir/../file.txt'));  // Outputs: '/home/user/file.txt'

// 9. path.parse(path)
// Breaks a path into its components (root, dir, base, ext, name).
console.log('parse:', path.parse('/home/user/dir/file.txt'));
/*
Outputs:
{
  root: '/',
  dir: '/home/user/dir',
  base: 'file.txt',
  ext: '.txt',
  name: 'file'
}
*/

// 10. path.resolve(...paths)
// Resolves a sequence of paths into an absolute path. If a path is relative, it's resolved from the current working directory.
console.log('resolve:', path.resolve('home', 'user', 'dir', 'file.txt'));
// Outputs: '/home/user/dir/file.txt' (resolved as an absolute path, assuming the current directory is '/')

// 11. path.relative(from, to)
// Returns the relative path from one directory to another.
console.log('relative:', path.relative('/home/user/dir', '/home/user/dir/file.txt'));  // Outputs: 'file.txt'

// 12. path.sep
// Returns the platform-specific path separator. On Windows, it is `\`, and on Unix-like systems, it is `/`.
console.log('sep:', path.sep);  // Outputs: '\\' on Windows, '/' on Linux/macOS

// 13. path.toNamespacedPath(path)
// Converts a path to a format appropriate for use with a namespaced file system (mainly for UNC paths on Windows).
console.log('toNamespacedPath:', path.toNamespacedPath('\\\\?\\C:\\Program Files\\'));
// Outputs: '\\\\?\\C:\\Program Files\\' (for Windows UNC paths)

