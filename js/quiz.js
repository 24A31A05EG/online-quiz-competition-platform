const selectedCategory = localStorage.getItem("selectedCategory") || "General Knowledge";

// Filter questions by category
let activeQuestions = questions.filter(q => q.category === selectedCategory);

// Optional test mode (limit to 5 questions)
const TEST_MODE = true;
if (TEST_MODE) {
  activeQuestions = activeQuestions.slice(0, 5);
}

let currentQuestion = 0;
let answered = false;
let timer;
let timeLeft = 30;
let score = 0; // track correct answers

console.log("Logged in user:", localStorage.getItem("currentUser"));

function showQuestion(index) {
  const q = activeQuestions[index];
  document.getElementById("question").innerText = q.question;

  const optionsContainer = document.getElementById("options");
  optionsContainer.innerHTML = "";

  answered = false;

  const labels = ["A", "B", "C", "D"];

  q.options.forEach((option, i) => {
    const btn = document.createElement("button");
    btn.innerText = `${labels[i]}) ${option}`;
    btn.classList.add("option-btn");
    btn.onclick = () => selectAnswer(i, btn);
    optionsContainer.appendChild(btn);
  });

  resetTimer();
}

function selectAnswer(selectedIndex, btn) {
  if (answered) return;
  answered = true;
  clearInterval(timer);

  const q = activeQuestions[currentQuestion];
  const optionsContainer = document.getElementById("options");
  const buttons = optionsContainer.querySelectorAll("button");

  buttons.forEach(b => b.disabled = true);

  if (selectedIndex === q.answer) {
    btn.style.setProperty("background-color", "green", "important");
    showResultMessage("Right Answer ✅", true);
    score++;
  } else {
    btn.style.setProperty("background-color", "red", "important");
    buttons[q.answer].style.setProperty("background-color", "green", "important");
    showResultMessage("Wrong Answer ❌", false);
  }

  const explanation = document.createElement("p");
  explanation.innerText = q.description;
  explanation.classList.add("explanation");
  optionsContainer.appendChild(explanation);
}

function showResultMessage(text, isCorrect) {
  const msg = document.createElement("p");
  msg.innerText = text;
  msg.classList.add("result-message");
  msg.classList.add(isCorrect ? "result-correct" : "result-wrong");
  document.getElementById("options").appendChild(msg);
}

// Timer logic
function resetTimer() {
  clearInterval(timer);
  timeLeft = 30;
  document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;

  timer = setInterval(() => {
    timeLeft--;
    document.getElementById("timer").innerText = `Time left: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timer);
      moveNext();
    }
  }, 1000);
}

// Move to next question
function moveNext() {
  if (currentQuestion < activeQuestions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  } else {
    // End of quiz → save score
    localStorage.setItem("quizScore", score);
    localStorage.setItem("totalQuestions", activeQuestions.length);

    const username = localStorage.getItem("currentUser") || "Anonymous";
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];

    leaderboard.push({
      name: username,
      score: score,
      total: activeQuestions.length
    });

    leaderboard.sort((a, b) => b.score - a.score);

    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));

    window.location.href = "result.html";
  }
}

document.getElementById("nextBtn").onclick = moveNext;

// Show first question
showQuestion(currentQuestion);