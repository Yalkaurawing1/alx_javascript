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
    // Define an instance method called print
    print() {

      // Loop through the height of the rectangle
      for (let i = 1; i <= this.height; i++) {
        const rectanglr_X = 'X'.repeat(this.width); 
        // Print the output to the console
        console.log(rectanglr_X);
      }
    }

    // Define an instance method called rotate
    rotate() {
      // Exchange the width and the height of the rectangle
      let temp = this.width;
      this.width = this.height;
      this.height = temp;
    }
    // Define an instance method called double
    double() {
      // Multiply the width and the height of the rectangle by 2
      this.width *= 2;
      this.height *= 2;
    }
  }

  module.exports = Rectangle;
  