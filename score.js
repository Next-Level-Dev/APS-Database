// score.js

let score = 0;

function updateScore() {
    const scoreBoard = document.getElementById("score-board");
    scoreBoard.innerHTML = "Puan: " + score;
}

// Puanlama her doğru cevaptan sonra güncellenecek
function increaseScore() {
    score++;
    updateScore();
}

window.onload = updateScore;
