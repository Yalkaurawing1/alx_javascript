#!/usr/bin/node
// Create a function named changeMode that:
function changeMode(size, weight, transform, background, color) {
    // It accepts 5 arguments size (number), weight (string), transform (string), background (string), color (string)
    // Using closure, it changes the style of the entire page and set the font-size, font-weight, text-transform, background-color, and color
    return function () {
      // Get the document body element
      let body = document.body;
  
      // Set the style properties of the body element
      body.style.fontSize = size + "px";
      body.style.fontWeight = weight;
      body.style.textTransform = transform;
      body.style.backgroundColor = background;
      body.style.color = color;
    };
  }
  
  // Write a function named main that:
  function main() {
    // Set a variable named spooky that passes the arguments 9, bold, uppercase, pink, green to changeMode
    let spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  
    // Set a variable named darkMode that passes the arguments 12, bold, capitalize, black, white to changeMode
    let darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  
    // Set a variable named screamMode that passes the arguments 12, normal, lowercase, white, black to changeMode
    let screamMode = changeMode(12, "normal", "lowercase", "white", "black");
  
    // Add a paragraph to the body of the page with the text Welcome Holberton!
    let paragraph = document.createElement("p");
    paragraph.textContent = "Welcome Holberton!";
    document.body.appendChild(paragraph);
  
    // Add a button to the body with the text Spooky
    let spookyButton = document.createElement("button");
    spookyButton.textContent = "Spooky";
    document.body.appendChild(spookyButton);
  
    // Add a button to the body with the text Dark mode
    let darkButton = document.createElement("button");
    darkButton.textContent = "Dark mode";
    document.body.appendChild(darkButton);
  
    // Add a button to the body with the text Scream mode
    let screamButton = document.createElement("button");
    screamButton.textContent = "Scream mode";
    document.body.appendChild(screamButton);
  
    // When clicking on each button, the page CSS should change to the different themes you created previously
    spookyButton.onclick = spooky;
    darkButton.onclick = darkMode;
    screamButton.onclick = screamMode;
  }
  
  // Call the main function
  main();
  