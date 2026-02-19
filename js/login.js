function loginUser() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    if (username === "" || password === "") {
        errorMsg.textContent = "Please fill all fields!";
        return;
    }

    // Temporary simple login logic
    if (username === "admin" && password === "1234") {
        window.location.href = "quiz.html";
    } else {
        errorMsg.textContent = "Invalid credentials!";
    }
}