function validate() {
  // Get the contents of the password field
  const passwordInput = document.getElementById("password-input").value;
  // What is the 'correct' password?
  const correctPassword = "cliffhanger";
  // Get the contents of the email field
  const emailInput = document.getElementById("email-input").value;

  // If the password entered does not match the 'correct' password
  // or the email field is empty...
  if (passwordInput !== correctPassword || isEmpty(emailInput)) {
    // Show an alert with the following message
    alert("Unable to login. Please check your details.");
  } else {
    // Otherwise, if everything is fine,
    // go to the home page (in this example)
    // You could put the success alert here instead
    window.location.href = "./index.html";
  }
}

// This function checks if the contents
// of a field are empty and returns
// a boolean (true or false).
function isEmpty(inputValue) {
  return inputValue === "";
}

// Get the login button from the HTML file
const loginButton = document.getElementById("login-button");

// Add an event listener to the button. It is
// waiting for the user to click on it. Once it
// is clicked, it will run the `validate` function
// that we made earlier :)
loginButton.addEventListener("click", validate);
