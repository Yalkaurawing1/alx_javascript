#!/usr/bin/node

// Write a module named studentHogwarts that:
function studentHogwarts() {
    // It contains two variables privateScore set to 0, and name set to null
    let privateScore = 0;
    let name = null;
  
    // It contains one private method changeScoreBy, it takes points in argument and add it to privateScore
    function changeScoreBy(points) {
      privateScore += points;
    }
  
    // The module gives access to four public methods (return an object):
    return {
      // setName, it takes into argument newName, and set the private variable name
      setName: function (newName) {
        name = newName;
      },
      // rewardStudent, it calls the method changeScoreBy with 1
      rewardStudent: function () {
        changeScoreBy(1);
      },
      // penalizeStudent, it calls the method changeScoreBy with -1
      penalizeStudent: function () {
        changeScoreBy(-1);
      },
      // getScore, it returns name: score (ex: Harry: 14)
      getScore: function () {
        return name + ": " + privateScore;
      },
    };
  }
  
  // Create one variable named harry, that is an instance of studentHogwarts:
  let harry = studentHogwarts();
  
  // Set the name of the object to Harry
  harry.setName("Harry");
  
  // Reward the student four times
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  harry.rewardStudent();
  
  // Log to the console the name and score
  console.log(harry.getScore()); // Prints Harry: 4
  
  // Create one variable named draco, that is an instance of studentHogwarts:
  let draco = studentHogwarts();
  
  // Sets the name of the object to Draco
  draco.setName("Draco");
  
  // Reward the student one time
  draco.rewardStudent();
  
  // Penalize the student three times
  draco.penalizeStudent();
  draco.penalizeStudent();
  draco.penalizeStudent();
  
  // Log to the console the name and score
  console.log(draco.getScore()); // Prints Draco: -2
  