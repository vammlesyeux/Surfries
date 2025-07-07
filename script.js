/**
 * Handles the user login process.
 * Compares the entered username and password against predefined values.
 * If credentials are correct, hides the login screen and displays the message screen.
 * Otherwise, shows an error message.
 */
function login() {
  console.log("Login function called."); // Debugging log
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  // Convert both the entered username and the target username to lowercase for case-insensitive comparison
  if (username.toLowerCase() === "kinnette dainne".toLowerCase() && password === "July 6, 2003") {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("message-screen").style.display = "block";
    console.log("Login successful. Message screen displayed."); // Debugging log
  } else {
    errorMsg.textContent = "Incorrect username or password.";
    console.log("Login failed. Incorrect credentials."); // Debugging log
  }
}

/**
 * Toggles the visibility of the message box.
 * When the cake icon is clicked, this function is called to show or hide the detailed message.
 */
function toggleMessage() {
  console.log("toggleMessage function called (cake icon clicked)."); // Debugging log
  const messageBox = document.getElementById("message-box");

  if (!messageBox) {
    console.error("Error: message-box element not found!"); // Debugging error
    return;
  }

  if (messageBox.style.display === "none" || messageBox.style.display === "") {
    // If the message box is hidden, show it
    messageBox.style.display = "block";
    console.log("Message box displayed."); // Debugging log
  } else {
    // If the message box is visible, hide it
    messageBox.style.display = "none";
    console.log("Message box hidden."); // Debugging log
  }
}

/**
 * Triggers the browser's print dialog to print the current web page content.
 * This is called when the "Print Letter" button is clicked.
 */
function printLetter() {
  console.log("printLetter function called (Print button clicked)."); // Debugging log
  window.print(); // This opens the native browser print dialog
}
