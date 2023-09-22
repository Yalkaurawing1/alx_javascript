#!/usr/bin/node
// This is a function that increments and calls a function

exports.addMeMaybe = function (number, theFunction) {
    number = number + 1;
    theFunction(number);
  }