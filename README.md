# Missing Callback in Node.js Server.listen

This repository demonstrates a common yet subtle error in Node.js: omitting the callback function in `server.listen()`.  This can lead to unexpected behavior, as error handling and confirmation of server startup are not handled properly.

The `bug.js` file contains the erroneous code, while `bugSolution.js` provides the correct implementation.

## Bug Description

The `server.listen()` method in Node.js's `http` module is asynchronous.  When you call it without a callback, your code continues to execute without waiting for the server to start listening on the specified port. This might seem innocuous in simple applications but becomes problematic in larger, more complex systems.  The most noticeable consequence is the absence of any confirmation that the server started successfully.

## How to Reproduce

1.  Clone this repository.
2.  Navigate to the project directory.
3.  Run `node bug.js`.
4. Observe that there's no output indicating whether the server started successfully or not.
5. Run `node bugSolution.js`. Observe the server startup message.

## Solution

Always provide a callback function to the `server.listen()` method. This callback function will be executed once the server starts successfully listening on the specified port.  This allows for proper error handling and server status confirmation.

