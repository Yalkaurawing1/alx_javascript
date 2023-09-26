// Require the request module
const request = require('request');

// Get the API URL from the first argument
const apiUrl = process.argv[2];

// Make a GET request to the API URL
request.get(apiUrl, (err, res, body) => {
  // Check if there is an error
  if (err) {
    // Print the error message
    console.error(err.message);
  } else {
    // Parse the JSON response
    const data = JSON.parse(body);
    // Initialize an empty object to store the task count by user id
    const taskCount = {};
    // Loop through the data array
    for (let task of data) {
      // Check if the task is completed
      if (task.completed) {
        // Get the user id of the task
        let userId = task.userId;
        // Increment the task count for the user id or initialize it to 1
        taskCount[userId] = taskCount[userId] ? taskCount[userId] + 1 : 1;
      }
    }
    // Print the task count by user id
    console.log(taskCount);
  }
});
