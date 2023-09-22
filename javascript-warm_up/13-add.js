#!/usr/bin/node
// This is a function that returns the addition of two integers
// The function is visible from outside
// The name of the function is add
// The function does not use var

function add(a, b) {
  // Check if the arguments are integers
  if (Number.isInteger(a) && Number.isInteger(b)) {
    // Return the sum of the arguments
    return a + b;
  } else {
    // Throw an error if the arguments are not integers
    throw new Error("The arguments must be integers");
  }
}

