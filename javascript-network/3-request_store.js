#!/usr/bin/node

// Require the request module
const request = require('request');

// Get the URL to request from the first argument
const url = process.argv[2];

// Get the file path to store the body response from the second argument
const filePath = process.argv[3];

// Require the fs module to write to the file
const fs = require('fs');

// Make a GET request to the URL
request.get(url, (err, res, body) => {
  // Check if there is an error
  if (err) {
    // Print the error message
    console.error(err.message);
  } else {
    // Write the body response to the file using UTF-8 encoding
    fs.writeFile(filePath, body, 'utf8', (err) => {
      // Check if there is an error
      if (err) {
        // Print the error message
        console.error(err.message);
      } else {
        // Print a success message
        console.log(`The contents of ${url} have been saved to ${filePath}`);
      }
    });
  }
});
