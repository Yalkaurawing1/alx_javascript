#!/usr/bin/node

//Require the request and other modules
const { copyFileSync } = require('fs');
const request = require('request');

const apiUrl = process.argv[2];
const completedTask = [];
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error);
    return;
  }  
})


  if (response.statusCode !== 200) {
    console.error('Request failed with status code:', response.statusCode);
    return;
}