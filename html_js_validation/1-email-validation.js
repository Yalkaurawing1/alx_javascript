// Get the email input element by its id
var emailInput = document.getElementById("email");

// Get the error paragraph element by its id
var error = document.getElementById("error");

// Get the form element by its id
var form = document.getElementById("emailForm");

// Define a function to validate the email format
function validateEmail(email) {
  // Use a regular expression to test the email format
  var regex = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  return regex.test(email);
}

// Add an event listener to the form submit event
form.addEventListener("submit", function(event) {
  // Get the value of the email input
  var email = emailInput.value;

  // Check if the email is valid
  if (validateEmail(email)) {
    // If valid, allow the form submission
    alert("Form submitted successfully.");
  } else {
    // If invalid, display the error message and prevent the form submission
    error.textContent = "Please enter a valid email address.";
    event.preventDefault();
  }
});
