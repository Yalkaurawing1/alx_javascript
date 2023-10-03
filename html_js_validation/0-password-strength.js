// Get the password input element by its id
var passwordInput = document.getElementById("password");

// Get the error paragraph element by its id
var error = document.getElementById("error");

// Get the form element by its id
var form = document.getElementById("passwordForm");

// Define a function to validate the password based on the criteria
function validatePassword(password) {
  // Use regular expressions to test the password criteria
  var lengthRegex = /.{8,}/; // At least 8 characters
  var upperRegex = /[A-Z]/; // At least one uppercase letter
  var lowerRegex = /[a-z]/; // At least one lowercase letter
  var digitRegex = /[0-9]/; // At least one numeric digit
  var specialRegex = /[^A-Za-z0-9]/; // At least one special character

  // Return true if all the criteria are met, false otherwise
  return lengthRegex.test(password) && upperRegex.test(password) && lowerRegex.test(password) && digitRegex.test(password) && specialRegex.test(password);
}

// Add an event listener to the form submit event
form.addEventListener("submit", function(event) {
  // Get the value of the password input
  var password = passwordInput.value;

  // Check if the password is valid
  if (validatePassword(password)) {
    // If valid, allow the form submission
    alert("Form submitted successfully.");
  } else {
    // If invalid, display the error message and prevent the form submission
    error.textContent = "Your password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one numeric digit, and one special character.";
    event.preventDefault();
  }
});
