// Show welcome message
// Show welcome message
window.onload = function() {
  const username = localStorage.getItem("currentUser") || "Guest";
  document.getElementById("welcomeMsg").innerText = `Welcome, ${username}!`;
};

let selectedCategory = null;

document.querySelectorAll(".categoryBtn").forEach(btn => {
  btn.onclick = function() {
    // Remove highlight from all buttons
    document.querySelectorAll(".categoryBtn").forEach(b => b.classList.remove("selected"));

    // Highlight the clicked button
    this.classList.add("selected");

    // Save category
    selectedCategory = this.getAttribute("data-category");
    localStorage.setItem("selectedCategory", selectedCategory);

    // Enable Start button
    document.getElementById("startBtn").disabled = false;
  };
});

document.getElementById("startBtn").onclick = function() {
  if (selectedCategory) {
    window.location.href = "quiz.html";
  } else {
    alert("Please select a category first!");
  }
};

// Logout button
document.getElementById("logoutBtn").onclick = function() {
  localStorage.removeItem("currentUser"); // clear login
  window.location.href = "login.html";    // redirect to login page
};