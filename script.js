function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("error-msg");

  if (username === "Kinnette Dainne" && password === "July 6, 2003") {
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("message-screen").style.display = "block";
  } else {
    errorMsg.textContent = "Incorrect username or password.";
  }
}

function toggleMessage() {
  const box = document.getElementById("message-box");
  box.style.display = box.style.display === "block" ? "none" : "block";
}

function printLetter() {
  const messageContents = document.getElementById('message-box').innerHTML;

  const printWindow = window.open('', '', 'height=600,width=800');
  printWindow.document.write('<html><head><title>Birthday Letter</title>');
  printWindow.document.write('<style>');
  printWindow.document.write(\`
    body {
      font-family: Georgia, serif;
      background-color: #fff8f0;
      padding: 40px;
      color: #5a3e1b;
      line-height: 1.8;
    }
    h2 {
      text-align: center;
      color: #a67b5b;
    }
  \`);
  printWindow.document.write('</style></head><body>');
  printWindow.document.write('<h2>Birthday Letter</h2>');
  printWindow.document.write(messageContents);
  printWindow.document.write('</body></html>');

  printWindow.document.close();
  printWindow.focus();

  printWindow.print();
  printWindow.close();
}
