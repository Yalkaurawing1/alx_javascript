#!/usr/bin/node

//Update this script by adding a new function incr that increments the integer value.

// This is a script that contains an object with a type and a value
// The object is visible from outside
// The script does not use var

const myObject = {
    type: 'object',
    value: 12
  };
  console.log(myObject);
  
  // This is a new function that increments the integer value of the object
  // The function is added as a property of the object
  // The prototype of the function is function ()
  myObject.incr = function () {
    // Check if the value of the object is an integer
    if (Number.isInteger(this.value)) {
      // Increment the value of the object by one
      this.value++;
    } else {
      // Throw an error if the value of the object is not an integer
      throw new Error("The value of the object must be an integer");
    }
  };
  
  // The code below uses the function and prints out the object
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  myObject.incr();
  console.log(myObject);
  