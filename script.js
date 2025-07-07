function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorMsg = document.getElementById("error-msg");

  if (username.toLowerCase() === "kinnette dainne".toLowerCase() && password === "July 6, 2003") {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("message-screen").style.display = "block";
  } else {
    errorMsg.textContent = "Incorrect username or password.";
  }
}
