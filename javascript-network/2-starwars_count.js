#!/usr/bin/node
// Require the request module
const request = require('request');

// Get the API URL from the first argument
const apiUrl = process.argv[2];

// Define the character ID of Wedge Antilles
const parts = [];

// Make a GET request to the URL
request.get(url, {encoding: 'utf-8'})
.on('data', (data) => {
    parts.push(data);
})
.on('complete', () => {
    const resp = JSON.parse(parts);
    let num_films = 0;
    resp.results.forEach(function (actor) {
       actor.characters.forEach((act) => {
        if (act.includes('https://swapi-api.alx-tools.com/api/people/18')){
            num_films++;
        }
       })
    }) 
    console.log(num_films);
})