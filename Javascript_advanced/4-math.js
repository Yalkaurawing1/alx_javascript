#!/usr/bin/node
// Create a function divideBy that:
function divideBy(firstNumber) {
    // It takes into argument firstNumber (number)
    // It returns a function that takes into argument secondNumber (number)
    return function (secondNumber) {
      // It returns the second number divided by the first number
      return secondNumber / firstNumber;
    };
  }
  
  // Create a function addBy that:
  function addBy(firstNumber) {
    // It takes into argument firstNumber (number)
    // It returns a function that takes into argument secondNumber (number)
    return function (secondNumber) {
      // It returns the sum of the two numbers
      return firstNumber + secondNumber;
    };
  }
  
  // Create four closures:
  
  // addBy100, that uses the function addBy with the number 100
  let addBy100 = addBy(100);
  
  // addBy1000, that uses the function addBy with the number 1000
  let addBy1000 = addBy(1000);
  
  // divideBy10, that uses the function divideBy with the number 10
  let divideBy10 = divideBy(10);
  
  // divideBy100, that uses the function divideBy with the number 100
  let divideBy100 = divideBy(100);
// Create a function divideBy that:
function divideBy(firstNumber) {
    // It takes into argument firstNumber (number)
    // It returns a function that takes into argument secondNumber (number)
    return function (secondNumber) {
      // It returns the second number divided by the first number
      return secondNumber / firstNumber;
    };
  }
  
  // Create a function addBy that:
  function addBy(firstNumber) {
    // It takes into argument firstNumber (number)
    // It returns a function that takes into argument secondNumber (number)
    return function (secondNumber) {
      // It returns the sum of the two numbers
      return firstNumber + secondNumber;
    };
  }
  
  // Create four closures:
  
  // addBy100, that uses the function addBy with the number 100
  let addBy100 = addBy(100);
  
  // addBy1000, that uses the function addBy with the number 1000
  let addBy1000 = addBy(1000);
  
  // divideBy10, that uses the function divideBy with the number 10
  let divideBy10 = divideBy(10);
  
  // divideBy100, that uses the function divideBy with the number 100
  let divideBy100 = divideBy(100);
    