// We need to use the events module
const EventEmitter = require('events');
const http = require('http');

class ClassThatInheritsFromEventEmitter extends EventEmitter{
    constructor() {
        super();
    }
}

const myEmitter = new ClassThatInheritsFromEventEmitter();

// // An instance of the EventEmitter class we imported
// const myEmitter = new EventEmitter();

// EventEmitters can listen and react to events

// Example 1:

// Sets up listeners (observers)
myEmitter.on('eventName', () => {
    console.log("Event emitted");
})

myEmitter.on('eventName', () => {
    console.log("Another event emitted");
})

myEmitter.on('eventName', number => {
    console.log(`A third event emitted with argument: ${number}`);
})

// Sets up an event (the object that emits an event)
myEmitter.emit('eventName', 9)

// Example 2:

// Creates server
const server = http.createServer();

// Listen to 'request' event
server.on('request', (request, response) => {
    console.log("Request received")
    response.end("Request received");
})

server.on('request', (request, response) => {
    console.log("Another request")
})

// Event when server closes down 
server.on('close', () => {
    console.log("Server closed");
})

// Starts the server
server.listen(8000, 'localhost', () => {
    console.log("Waiting for request");
})