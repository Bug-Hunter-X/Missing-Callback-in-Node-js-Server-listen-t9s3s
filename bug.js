const http = require('http');

const requestListener = (request, response) => {
  response.setHeader('Content-Type', 'application/json');
  response.writeHead(200);
  response.end(JSON.stringify({ message: 'Hello from Node.js!' }));
};

const server = http.createServer(requestListener);

// This line is the bug: server.listen(8080);

// Correct implementation
server.listen(8080, () => {
  console.log('Server is running on port 8080');
});