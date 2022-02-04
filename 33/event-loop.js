// Imported core modules
const fs = require('fs');
// Will be offloaded from the event loop to the thread pool
const crypto = require('crypto');

// Current date in milliseconds
const start = Date.now();

// Changes threadpool size to one
process.env.UV_THREADPOOL_SIZE = 4;

// Starts a timer that expires after 0 seconds
setTimeout(() => {
    console.log("(2) Timer finished");
}, 0)

// Starts immediate timer
setImmediate(() => {
    console.log("(3) Immediate timer finished");
})

fs.readFile('lorem.txt', () => {
  console.log("(4) Input/Output finished");

  setTimeout(() => {
    console.log("(11) First timer inside callback finished");
  }, 0)

  setTimeout(() => {
    console.log("(12) Second timer inside callback finished");
  }, 3000)

  setImmediate(() => {
    console.log("(10) Immediate timer inside callback finished");
  })

  process.nextTick(() => {
    console.log("(9) Process tick finished");
  })

  // // Encryption function
  // // Parameters: (1) secret string (2) string to salt password (3) number of iterations (4) keylength (5) algorithm used to encrypt password
  // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
  //   // Logs out how much time has passed in milliseconds
  //   console.log("(8)", Date.now() - start, "Password encrypted a");
  // })

  // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
  //   console.log("(8)", Date.now() - start, "Password encrypted b");
  // })

  // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
  //   console.log("(8)", Date.now() - start, "Password encrypted c");
  // })

  // crypto.pbkdf2('password', 'salt', 100000, 1024, 'sha512', () => {
  //   console.log("(8)", Date.now() - start, "Password encrypted d");
  // })

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log("(5)", Date.now() - start, "Password encrypted a");

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log("(6)", Date.now() - start, "Password encrypted b");

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log("(7)", Date.now() - start, "Password encrypted c");

  crypto.pbkdf2Sync('password', 'salt', 100000, 1024, 'sha512');
  console.log("(8)", Date.now() - start, "Password encrypted d");

})

console.log("(1) Top-level code not inside a callback");