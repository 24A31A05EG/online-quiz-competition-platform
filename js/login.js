function loginUser() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    document.getElementById("errorMsg").innerText = "Please enter both username and password.";
    return;
  }

  // Example: simple check (you can replace with your own validation)
  if (username === "admin" && password === "1234") {
    // Save username to localStorage
    localStorage.setItem("currentUser", username);

    // ✅ Redirect to category selection page
    window.location.href = "home.html";
  } else {
    document.getElementById("errorMsg").innerText = "Invalid username or password.";
  }
}