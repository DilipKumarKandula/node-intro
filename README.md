# node-intro — Mastering Node.js from Scratch 🚀

This repository documents my journey in mastering Node.js through a series of tasks. Each task focuses on different aspects of Node.js, from basic server setup to building API routes and handling file operations.

## 📝 Table of Contents

1. [Introduction](#introduction)
2. [Tasks Overview](#tasks-overview)
3. [Project Structure](#project-structure)
4. [Setup Instructions](#setup-instructions)

## Introduction

This project is a learning repository where I practiced various Node.js and Express.js concepts. It includes building servers, working with HTTP requests, managing data with files, and developing APIs for CRUD operations. The tasks in this repository cover everything from core modules to advanced topics like routing, middleware, and working with external files.

## Tasks Overview

Here’s a list of all the tasks covered in this repository:

### 1. **15-post-api**
   - Created a simple API to handle POST requests and send data to a server.
   
### 2. **16-post-save-to-file**
   - Saved POST request data into a file using the `fs` module.

### 3. **17-put-api**
   - Developed a PUT API to update data on the server.

### 4. **19-delete-api**
   - Handled DELETE requests to remove data from an in-memory array.

### 5. **20-delete-api-file**
   - Implemented DELETE functionality to remove user data from a file (`users.json`).

### 6. **21-update-api**
   - Created a PUT API to update existing user data stored in a file.

### 7. **data**
   - Folder containing various JSON files used for storing and manipulating data during the tasks (e.g., `users.json`).

### 8. **node-notes**
   - A folder containing code for handling basic operations with notes in a file.

### 9. **public**
   - Folder containing the static HTML files used to interact with the backend API.

### 10. **utils**
   - Contains helper modules for various utilities like error handling or file management.

### 11. **02-built-in-modules.js**
   - A task focused on understanding and using built-in Node.js modules like `fs`, `http`, `path`, and others.

### 12. **03-custom-module.js**
   - Created a custom module to practice modularization in Node.js.

### 13. **04-custom-module-task.js**
   - Extended the custom module by adding additional functionality and interacting with other modules.

### 14. **05-fs-basics.js**
   - Focused on file system operations using `fs` module such as reading, writing, and appending files.

### 15. **06-fs-task.js**
   - Implemented more advanced file handling tasks like deleting and renaming files using `fs`.

### 16. **07-http-server.js**
   - Set up a basic HTTP server to handle client requests.

### 17. **08-basic-routing.js**
   - Implemented basic routing for handling different types of HTTP methods and routes.

### 18. **09-html-server.js**
   - Created a server that serves HTML files as static resources.

### 19. **10-static-server.js**
   - Set up a static file server that serves assets such as images, CSS, and JavaScript files.

### 20. **11-json-api.js**
   - Developed a simple JSON-based API to handle GET requests and return data in JSON format.

### 21. **11.0-json-api.js**
   - Added more features to the JSON API, including query parameters and filters.

### 22. **12-json-api-filter.js**
   - Implemented filtering for GET requests based on query parameters.

### 23. **13-json-api-query.js**
   - Created advanced query handling, including dynamic query parameters in API requests.

### 24. **14-json-api-multiple-query.js**
   - Extended the query functionality to support multiple query filters in a single request.

## Project Structure

Here is the folder and file structure for the repository:

```bash
node-intro/
│
├── 15-post-api/
│   └── index.js
│
├── 16-post-save-to-file/
│   └── index.js
│
├── 17-put-api/
│   └── index.js
│
├── 19-delete-api/
│   └── index.js
│
├── 20-delete-api-file/
│   └── index.js
│
├── 21-update-api/
│   └── index.js
│
├── data/
│   ├── users.json
│   └── sample.txt
│
├── node-notes/
│   └── notes.js
│
├── public/
│   └── delete-request.html
│   └── update-request.html
│
├── utils/
│   └── helpers.js
│
├── 02-built-in-modules.js
├── 03-custom-module.js
├── 04-custom-module-task.js
├── 05-fs-basics.js
├── 06-fs-task.js
├── 07-http-server.js
├── 08-basic-routing.js
├── 09-html-server.js
├── 10-static-server.js
├── 11-json-api.js
├── 11.0-json-api.js
├── 12-json-api-filter.js
├── 13-json-api-query.js
└── 14-json-api-multiple-query.js
