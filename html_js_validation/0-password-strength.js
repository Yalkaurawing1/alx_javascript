// Function to validate the password
function validatePassword() {
    const passwordInput = document.getElementById("password");
    const errorParagraph = document.getElementById("error");
  
    // Regular expressions for each criteria
    const minLength = 8;
    const uppercaseRegex = /[A-Z]/;
    const lowercaseRegex = /[a-z]/;
    const digitRegex = /\d/;
    const specialCharRegex = /[!@#$%^&*]/;
  
    const password = passwordInput.value;
  
    if (password.length < minLength) {
      errorParagraph.textContent = "Password must be at least 8 characters long.";
      errorParagraph.style.color = "red";
      return false;
    }
  
    if (!uppercaseRegex.test(password)) {
      errorParagraph.textContent = "Password must contain at least one uppercase letter.";
      errorParagraph.style.color = "red";
      return false;
    }
  
    if (!lowercaseRegex.test(password)) {
      errorParagraph.textContent = "Password must contain at least one lowercase letter.";
      errorParagraph.style.color = "red";
      return false;
    }
  
    if (!digitRegex.test(password)) {
      errorParagraph.textContent = "Password must contain at least one numeric digit.";
      errorParagraph.style.color = "red";
      return false;
    }
  
    if (!specialCharRegex.test(password)) {
      errorParagraph.textContent = "Password must contain at least one special character (!@#$%^&*).";
      errorParagraph.style.color = "red";
      return false;
    }
  
    // If all criteria are met, clear the error message
    errorParagraph.textContent = "";
    return true;
  }
  
  // Add an event listener to the form submission
  const passwordForm = document.getElementById("passwordForm");
  passwordForm.addEventListener("submit", function (event) {
    if (!validatePassword()) {
      event.preventDefault(); // Prevent form submission if validation fails
    }
  });
  