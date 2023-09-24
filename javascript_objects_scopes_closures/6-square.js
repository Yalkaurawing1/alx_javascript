#!/usr/bin/node

// Import the Square class from 5-square.js
const Square = require('./5-square');

// Define a class Square that inherits from Square
class Square extends Square {
  // Define an instance method called charPrint
  constructor (size) {
    super(size, size);
}

charPrint(c) {
    if (c) {
        for (let i = 1; i <= this.height; i++) {
            const rectanglr_c = c.repeat(this.width);
            console.log(rectanglr_c);
        }
    } else {
        for (let i = 1; i <= this.height; i++) {
            const rectanglr_X = 'X'.repeat(this.width);
            console.log(rectanglr_X);
        }
    }
}
}

module.exports = Square;