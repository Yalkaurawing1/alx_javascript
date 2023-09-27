#!/usr/bin/node

// Write a function named welcomeMessage that:
function welcomeMessage(fullName) {
    // It accepts one argument fullName (string)
    // It should be a closure for an alert displaying Welcome <fullName>
    return function () {
      alert("Welcome " + fullName);
    };
  }
  
  // After this function definition, create three variables:
  
  // guillaume contains a call welcomeMessage with Guillaume as argument
  let guillaume = welcomeMessage("Guillaume");
  
  // alex contains a call welcomeMessage with Alex as argument
  let alex = welcomeMessage("Alex");
  
  // fred contains a call welcomeMessage with Fred as argument
  let fred = welcomeMessage("Fred");
  