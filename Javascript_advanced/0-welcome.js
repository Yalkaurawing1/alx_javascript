#!/usr/bin/node
// Create a function named welcome that takes two arguments: firstName and lastName
function welcome(firstName, lastName) {
    // Create a variable named fullName that contains the firstName followed by a space and then the lastName
    let fullName = firstName + " " + lastName;
  
    // Within the welcome function, write a function named displayFullName
    function displayFullName() {
      // It should display an alert with the message Welcome followed by a space, then the variable fullName followed by an exclamation mark
      alert("Welcome " + fullName + "!");
    }
  
    // Call the function displayFullName at the end of the function welcome
    displayFullName();
  }
  