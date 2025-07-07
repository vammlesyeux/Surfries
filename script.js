function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  // Convert both the entered username and the target username to lowercase for case-insensitive comparison
  if (username.toLowerCase() === "kinnette dainne".toLowerCase() && password === "July 6, 2003") {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("message-screen").style.display = "block";
  } else {
    errorMsg.textContent = "Incorrect username or password.";
  }
}


function toggleMessage() {
  const messageBox = document.getElementById("message-box");
  if (messageBox.style.display === "none" || messageBox.style.display === "") {
    // If the message box is hidden, show it
    messageBox.style.display = "block";
  } else {
    // If the message box is visible, hide it
    messageBox.style.display = "none";
  }
}


function printLetter() {
  window.print(); // This opens the native browser print dialog
}
