#!/usr/bin/node
// Require the request module
const request = require('request');

// Get the API URL from the first argument
const apiUrl = process.argv[2];

// Define the character ID of Wedge Antilles
const characterId = 18;

// Make a GET request to the API URL
request.get(apiUrl, (err, res, body) => {
  // Check if there is an error
  if (err) {
    // Print the error message
    console.error(err.message);
  } else {
    // Parse the JSON response
    const data = JSON.parse(body);
    // Initialize a counter for the number of movies
    let movieCount = 0;
    // Loop through the results array
    for (let movie of data.results) {
      // Check if the character ID is in the characters array
      if (movie.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
        // Increment the movie count
        movieCount++;
      }
    }
    // Print the number of movies
    console.log(movieCount);
  }
});
