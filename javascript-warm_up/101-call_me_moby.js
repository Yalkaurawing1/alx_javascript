#!/usr/bin/node
// This is a function that executes x times a function

function repeat(x, theFunction) {
    // Check if the first argument is a positive integer
    if (Number.isInteger(x) && x > 0) {
      // Loop x times
      for (let i = 0; i < x; i++) {
        // Call the second argument as a function
        theFunction();
      }
    } else {
      // Throw an error if the first argument is not a positive integer
      throw new Error("The first argument must be a positive integer");
    }
  }
    