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
        return 'Rectangle {}';
      }
    }
    // Define an instance method called print
    print() {
      // Loop through the height of the rectangle
      for (let i = 1; i <= this.height; i++) {
        const rectanglr_X = 'X'.repeat(this.width); 
        console.log(rectanglr_X);
      }

    }

}

  