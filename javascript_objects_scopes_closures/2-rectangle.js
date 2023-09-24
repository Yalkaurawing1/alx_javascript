#!/usr/bin/node

// Define a class Rectangle
class Rectangle {
    // Define the constructor method
    constructor(w, h) {
      // Check if w and h are positive integers
      if (w && h > 0) {
        // Initialize the instance attribute width with the value of w
        this.width = w;
        // Initialize the instance attribute height with the value of h
        this.height = h;
      } else {
        // Create an empty object
        return {};
      }
    }
    // You can add any other methods or properties for the class here
  }
  
  module.exports = Rectangle;