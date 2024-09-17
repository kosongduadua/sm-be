# Issue Tracker API

This project is a simple REST API for tracking issues, built with Node.js, Express, and TypeScript.

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

The server will start on port 3000 by default. You can change this by setting the PORT environment variable.

## Project Structure

- `src/models`: Data models
- `src/repositories`: Data access layer
- `src/services`: Business logic layer
- `src/controllers`: Request handlers
- `src/server.ts`: Main application file

## API Endpoints

- POST /issues: Create a new issue
- GET /issues/:id: Retrieve an issue
- PUT /issues/:id: Update an issue
- DELETE /issues/:id: Delete an issue

## Development

To run the project:
```
npm start
```
To run the built version:
```
npm run serve
```
To execute tests:
```
npm run test
```

## Current Implementation

- Basic CRUD operations for issues
- File-based storage using a JSON file
- Basic error handling in controller methods
- CORS
- Unit test