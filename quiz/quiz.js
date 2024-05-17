const questions = [
    {
        question: "What are the three categories of expenses in the 50-30-20 rule, and what percentage of your income should be allocated to each?",
        answers: [
            { text: "Needs (30%), Wants (50%), Savings (20%)", correct: false },
            { text: "Needs (50%), Wants (30%), Savings (20%)", correct: true },
            { text: "Needs (20%), Wants (50%), Savings (30%)", correct: false },
            { text: "Needs (40%), Wants (40%), Savings (20%)", correct: false }
        ]
    },
    {
        question: "Why is it important to subtract only taxes from your paycheck when starting to budget using the 50-30-20 rule?",
        answers: [
            { text: "To make sure your retirement contributions are not affected", correct: false },
            { text: "To get an accurate amount for your total earnings", correct: false },
            { text: "To include health insurance and retirement contributions in your budget", correct: true },
            { text: "To simplify the calculation of your gross income", correct: false }
        ]
    },
    {
        question: "What types of expenses are classified under the 'needs' category in the 50-30-20 rule?",
        answers: [
            { text: "Subscriptions and hobby supplies", correct: false },
            { text: "Vacations and restaurant meals", correct: false },
            { text: "Utility bills, rent or mortgage, healthcare, and groceries", correct: true },
            { text: "Entertainment and luxury items", correct: false }
        ]
    },
    {
        question: "Can you list some examples of 'wants' according to the 50-30-20 rule, and why are they considered wants?",
        answers: [
            { text: "Utility bills and healthcare because they are essential", correct: false },
            { text: "Subscriptions, hobby supplies, dining out, and vacations because they are enjoyable but non-essential", correct: true },
            { text: "Groceries and rent because they are monthly expenses", correct: false },
            { text: "Emergency fund contributions and debt payments because they prepare for the future", correct: false }
        ]
    },
    {
        question: "How can the savings category in the 50-30-20 rule help you achieve your future financial goals?",
        answers: [
            { text: "By increasing your entertainment budget", correct: false },
            { text: "By covering your daily living expenses", correct: false },
            { text: "By contributing to an emergency fund, retirement accounts, and paying down debt", correct: true },
            { text: "By allowing more spending on wants and hobbies", correct: false }
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
        if(score < 4){
            startQuiz();
        }
    }
});

startQuiz();
