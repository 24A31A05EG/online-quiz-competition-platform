window.onload = function() {
  const leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
  const table = document.getElementById("leaderboardTable");

  // Build table header with extra Badge column
  table.innerHTML = `
    <tr>
      <th>Rank</th>
      <th>Badge</th>
      <th>Name</th>
      <th>Score</th>
      <th>Total</th>
    </tr>
  `;

  // Populate rows
  leaderboard.forEach((entry, index) => {
    const row = document.createElement("tr");

    // Assign badges for top 3
    let badgeDisplay = "";
    if (index === 0) {
      badgeDisplay = "🥇"; // Gold medal
    } else if (index === 1) {
      badgeDisplay = "🥈"; // Silver medal
    } else if (index === 2) {
      badgeDisplay = "🥉"; // Bronze medal
    }

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${badgeDisplay}</td>
      <td>${entry.name}</td>
      <td>${entry.score}</td>
      <td>${entry.total}</td>
    `;
    table.appendChild(row);
  });
};

// Go to Home button
document.getElementById("homeBtn").onclick = function() {
  window.location.href = "home.html";
};

// Clear Leaderboard button
document.getElementById("clearLeaderboardBtn").onclick = function() {
  localStorage.removeItem("leaderboard"); // ✅ clears leaderboard data
  window.location.reload(); // refresh page silently
};