#!/usr/bin/node
// This is a function that executes x times a function

exports.callMeMoby = function (x, theFunction) {
    for (let i = 1; i <= x; i++) {
      theFunction();
    }
  };    