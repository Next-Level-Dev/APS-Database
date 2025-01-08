// quiz.js

const quizData = [
    {
        question: "2 + 2 kaç eder?",
        options: ["3", "4", "5"],
        answer: "4"
    },
    {
        question: "Başkent Ankara mıdır?",
        options: ["Evet", "Hayır"],
        answer: "Evet"
    },
    {
        question: "Dünyanın en büyük okyanusu hangisidir?",
        options: ["Atlas Okyanusu", "Pasifik Okyanusu", "Hint Okyanusu"],
        answer: "Pasifik Okyanusu"
    }
];

let score = 0;

function loadQuiz() {
    const quizArea = document.getElementById("quiz-area");
    quizData.forEach((quiz, index) => {
        const questionElem = document.createElement("div");
        questionElem.classList.add("quiz-item");
        questionElem.innerHTML = `
            <p>${quiz.question}</p>
            ${quiz.options.map(option => `
                <button class="quiz-btn" onclick="checkAnswer(${index}, '${option}')">${option}</button>
            `).join('')}
        `;
        quizArea.appendChild(questionElem);
    });
}

function checkAnswer(index, selectedAnswer) {
    const quizArea = document.getElementById("quiz-area");
    const question = quizData[index];

    // Doğru cevap
    if (question.answer === selectedAnswer) {
        score++;
        alert("Doğru cevap!");
    } else {
        alert("Yanlış cevap.");
    }
    document.getElementById("score-board").innerText = "Puan: " + score;

    // Soruyu disable et
    const buttons = quizArea.getElementsByTagName("button");
    Array.from(buttons).forEach(button => {
        button.disabled = true;
    });
}

window.onload = loadQuiz;
