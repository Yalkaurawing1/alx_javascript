#!/usr/bin/node

// Import the Rectangle class from 4-rectangle.js
const Rectangle = require('./4-rectangle');

// Define a class Square that inherits from Rectangle
class Square extends Rectangle {
  // Define the constructor method
  constructor(size) {
    // Call the constructor of Rectangle with size as both width and height
    super(size, size);
  }
}





module.exports = Square;