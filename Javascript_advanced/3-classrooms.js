#!/usr/bin/node

// Write a function named createClassRoom that:
function createClassRoom(numbersOfStudents) {
    // It takes into argument numbersOfStudents (number)
    // Inside, it contains a function studentSeat, that takes into argument seat (number) and returns a function that returns the seat number
    function studentSeat(seat) {
      return function () {
        return seat;
      };
    }
  
    // After the definition of studentSeat, create and populate a variable students (array)
    let students = [];
  
    // Using a loop from 0 to numbersOfStudents, pass the number of iteration + 1 to studentSeat and add its return value to the students array
    for (let i = 0; i < numbersOfStudents; i++) {
      students.push(studentSeat(i + 1));
    }
  
    // Returns the students array
    return students;
  }
  
  // Create a closure classRoom, calling createClassRoom with 10 students
  let classRoom = createClassRoom(10);
  