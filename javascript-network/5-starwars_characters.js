#!/usr/bin/node

// Require the request module
const request = require('request');

// Get the movie ID from the first argument
const movieID = process.argv[2];

// Define the Star Wars API endpoint with the movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

// Make a GET request to the URL
request.get(url, (err, res, body) => {
  // Check if there is an error
  if (err) {
    // Print the error message
    console.error(err.message);
  } else {
    // Parse the JSON response
    const data = JSON.parse(body);
    // Check if the response has a characters property
    if (data.characters) {
      // Loop through the characters array
      for (let character of data.characters) {
        // Make another GET request to each character URL
        request.get(character, (err, res, body) => {
          // Check if there is an error
          if (err) {
            // Print the error message
            console.error(err.message);
          } else {
            // Parse the JSON response
            const data = JSON.parse(body);
            // Check if the response has a name property
            if (data.name) {
              // Print the name of the character
              console.log(data.name);
            }
          }
        });
      }
    }
  }
});
