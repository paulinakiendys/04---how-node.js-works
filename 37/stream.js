const fs = require('fs');

// Creates server directly instead of doing
// const http = require('http');
// const server = http.createServer();
const server = require('http').createServer();

// Listens to the request event
server.on('request', (request, response) => {
    // Solution 1: Read the file into a variable and send it to the client
    // fs.readFile('lorem.txt', (error, data) => {
    //     if (error) {
    //         console.log('File does not exist', error);
    //     } else {
    //         response.end(data);
    //     }
    // })

    // Solution 2: Readable stream (data doesn't need to be read into a variable)
    // const readable = fs.createReadStream('lorem.txt');
    // // Data event is emitted for each chunck of data
    // // Listens to event
    // readable.on('data', (chunkOfData) => {
    //     // Writable stream
    //     response.write(chunkOfData)
    // });
    // // Handles the data when the entire file has been read
    // readable.on('end', () => {
    //     // Calls end on the response
    //     response.end();
    // });
    // // Handles error
    // readable.on('error', (error) => {
    //     console.log(error);
    //     // Sets status code to 500 (server error)
    //     response.statusCode = 500;
    //     // Sends result
    //     response.end('File not found');
    // });

    // Solution 3: Pipe operator
    // Readable stream
    const readable = fs.createReadStream('lorem.txt');
    // Puts a pipe on the readable source. Response is our writable destination
    readable.pipe(response);
})

server.listen(8000, "localhost", () => {
    console.log("Waiting for response");
})
