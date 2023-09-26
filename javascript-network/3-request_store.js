#!/usr/bin/node

// Require the request module
const request = require('request');
const fs = require ('fs');

//argumets on command line
url = process.argv[2];
file_name = process.argv[3];

//make request
request.get(url).pipe(fs.createWriteStream(file_name));