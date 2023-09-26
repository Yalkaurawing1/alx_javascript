#!/usr/bin/node

// Require the request module
const request = require('request');

// Get the URL to request from the first argument
const url = process.argv[2];

// Make a GET request to the URL
request.get(url) 

.on('response', function (response) {
// Print the status code like this: code: <status code>
    console.log('code:', response.statusCode)
})
