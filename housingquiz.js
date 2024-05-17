const questions = [
    {
        question: "What is a crucial first step in preparing to buy a home, according to the blurb?",
        answers: [
            { text: "Determine your home-buying budget.", correct: true },
            { text: "Begin the search for your dream home.", correct: false },
            { text: "Secure financing through a mortgage lender.", correct: false },
            { text: "Find a reputable real estate agent to assist you.", correct: false }
        ]
    },
    {
        question: "What percentage of your take-home pay should ideally be allocated towards mortgage payments to avoid being \"house poor\"?",
        answers: [
            { text: "10%", correct: false },
            { text: "25%", correct: true },
            { text: "40%", correct: false },
            { text: "50%", correct: false }
        ]
    },
    {
        question: "What is the purpose of getting preapproved for a mortgage?",
        answers: [
            { text: "To secure the best interest rates.", correct: false },
            { text: "To show sellers you’re a serious buyer.", correct: true },
            { text: "To receive financial advice from lenders.", correct: false },
            { text: "To avoid paying closing costs.", correct: false }
        ]
    },
    {
        question: "What is recommended to avoid paying private mortgage insurance (PMI)?",
        answers: [
            { text: "Saving for a down payment of at least 10%.", correct: false },
            { text: "Opting for an adjustable-rate mortgage.", correct: false },
            { text: "Buying a home with a lower purchase price.", correct: false },
            { text: "Saving for a down payment of at least 20%.", correct: true }
        ]
    },
    {
        question: "What is a crucial step before finalizing the purchase of a home?",
        answers: [
            { text: "Conducting a thorough home inspection and appraisal.", correct: true },
            { text: "Negotiating with sellers to lower the price.", correct: false },
            { text: "Making an offer without contingencies.", correct: false },
            { text: "Skipping the inspection to expedite the process.", correct: false }
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
