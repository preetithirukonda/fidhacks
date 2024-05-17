const questions = [
    {
        question: "example idk",
        answers: [
            { text: "yes", correct: true },
            { text: "no", correct: false },
            { text: "erm", correct: false },
            { text: "no", correct: false }
        ]
    },
    {
        question: "magic idk",
        answers: [
            { text: "eek", correct: true },
            { text: "slay", correct: false },
            { text: "meep", correct: false },
            { text: "rawr", correct: false }
        ]
    },
    {
        question: "magic idk",
        answers: [
            { text: "eek", correct: true },
            { text: "slay", correct: false },
            { text: "meep", correct: false },
            { text: "rawr", correct: false }
        ]
    },
    {
        question: "magic idk",
        answers: [
            { text: "eek", correct: true },
            { text: "slay", correct: false },
            { text: "meep", correct: false },
            { text: "rawr", correct: false }
        ]
    },
    {
        question: "magic idk",
        answers: [
            { text: "eek", correct: true },
            { text: "slay", correct: false },
            { text: "meep", correct: false },
            { text: "rawr", correct: false }
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtonsElement = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = 'none';
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
        button.addEventListener("click", selectAnswer);
        answerButtonsElement.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = 'none';
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    nextButton.style.display = 'block';
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz finished!");
        startQuiz();
    }
});

startQuiz();
