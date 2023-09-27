#!/usr/bin/node

// Create a variable named globalVariable with value Welcome
let globalVariable = "Welcome";

// Create a function outer that:
function outer() {
  // alerts the content of the variable globalVariable
  alert(globalVariable);

  // creates a variable named course with value Holberton
  let course = "Holberton";

  // creates a function inner that:
  function inner() {
    // alerts the content of the variable globalVariable and course (concatenated)
    alert(globalVariable + " " + course);

    // creates a variable named exclamation with value !
    let exclamation = "!";

    // creates a function inception that:
    function inception() {
      // alerts the content of the variable globalVariable, course, and exclamation (concatenated)
      alert(globalVariable + " " + course + exclamation);
    }

    // calls the function inception
    inception();
  }

  // calls the function inner
  inner();
}

// Call the function outer
outer();
