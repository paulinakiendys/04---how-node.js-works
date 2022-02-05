// arguments is an array containing all values that are passed into a function
console.log(arguments)

console.log(require('module').wrapper)

const Calc = require('./module-1');

// Creates a new instance of calculator
const calc1 = new Calc();

console.log(calc1.add(2, 6));

// Access to exports object (calc2 is the exports object)
// const calc2 = require('./module-2');
// console.log(calc2.add(3, 4));
// Useful when destructuring: { variable names for the properties in the object }
const { add, multiply, divide } = require('./module-2');
// Creates a variable
console.log(add(4, 5));

// Calls function right away
require('./module-3')();
require('./module-3')();
require('./module-3')();