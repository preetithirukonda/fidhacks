const questions = [
    {
        question: "What is the maximum annual contribution limit for an IRA in 2024?",
        answers: [
            { text: "$6,000", correct: false },
            { text: "$7,000", correct: true },
            { text: "$8,000", correct: false },
            { text: "$10,000", correct: false }
        ]
    },
    {
        question: "Which retirement account type offers tax-free withdrawals in retirement?",
        answers: [
            { text: "Traditional IRA", correct: false },
            { text: "Roth IRA", correct: true },
            { text: "401(k)", correct: false },
            { text: "SIMPLE IRA", correct: false }
        ]
    },
    {
        question: "What is the main difference between a Traditional IRA and a Roth IRA?",
        answers: [
            { text: "Contributions are tax-deductible for both.", correct: false },
            { text: "Contributions are made with after-tax money in a Traditional IRA.", correct: false },
            { text: "Roth IRAs have income-based eligibility restrictions.", correct: true },
            { text: "Roth IRAs have minimum distribution requirements.", correct: false }
        ]
    },
    {
        question: "Which employer retirement plan offers a 'catch-up contribution' for individuals aged 50 and older?",
        answers: [
            { text: "401(k)", correct: true },
            { text: "SIMPLE IRA", correct: false },
            { text: "SEP IRA", correct: false },
            { text: "Traditional 401(k)", correct: false }
        ]
    },
    {
        question: "What is a key advantage of a SEP IRA for self-employed individuals?",
        answers: [
            { text: "Low contribution limits", correct: false },
            { text: "Limited investment options", correct: false },
            { text: "High contribution limits and flexibility", correct: true },
            { text: "No tax advantages", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const scoreDisplay = document.getElementById("score");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = 'none';
    scoreDisplay.textContent = "Score: " + score;
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(answer.correct));
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }
    scoreDisplay.textContent = "Score: " + score;
    nextButton.style.display = 'block';
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz finished! Your score is: " + score);
        startQuiz();
    }
});

startQuiz();
