#!/usr/bin/node

// Require the request & other modules
const { isutf8 } = require('buffer');
const { parse } = require('path');
const request = require('request');

// Get the movie ID from the first argument
const movieID = process.argv[2];

// Define the Star Wars API endpoint with the movie ID
const url = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

parts = [];
// Make a GET request to the URL
request.get(url, {encoding: 'utf-8'})
.on('data', function (data) {
    parts.push(data);
}) 

.on('complete', function () {
    // Parse the JSON response
    const response = JSON.parse(parts)
    
    // Print the title of the movie
    console.log(response.title)
})
