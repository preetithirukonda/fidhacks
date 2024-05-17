const questions = [
    {
        question: "What are the main differences between grants and scholarships in terms of repayment and eligibility criteria?",
        answers: [
            { text: "Scholarships are often based on academic merit or specific criteria, while grants do not need to be repaid and are typically based on financial need.", correct: true },
            { text: "Grants need to be repaid while scholarships do not.", correct: false },
            { text: "Grants are only available from federal sources, whereas scholarships come only from private organizations.", correct: false },
            { text: "There are no differences; both need to be repaid and have the same eligibility criteria.", correct: false }
        ]
    },
    {
        question: "How does the Federal Work-Study Program help students manage their education expenses?",
        answers: [
            { text: "It provides full scholarships to cover all education expenses." , correct: false },
            { text: "It offers loans that must be repaid after graduation.", correct: false },
            { text: "It reduces tuition costs directly without requiring any work from the student.", correct: false },
            { text: "It allows students to earn money by working part-time while attending school, helping manage expenses.", correct: true }
        ]
    },
    {
        question: "What should you consider when deciding whether to take out a student loan, and what are the basic terms of repayment?",
        answers: [
            { text: "The amount borrowed, the interest rate, and the repayment schedule, including how much total interest will be paid over the life of the loan.", correct: true },
            { text: "The reputation of the lending institution.", correct: false },
            { text: "Only the interest rate, as the principal amount is forgiven.", correct: false },
            { text: "Loans do not need to be repaid if you maintain good grades.", correct: false }
        ]
    },
    {
        question: "How can filling out the Free Application for Federal Student Aid (FAFSA) benefit students in covering their educational costs?",
        answers: [
            { text: "It ensures a guaranteed scholarship for all students.", correct: false },
            { text: "It provides a list of private lenders for student loans.", correct: false },
            { text: "It can qualify students for federal grants, work-study jobs, and loans, helping cover various education costs like tuition, housing, and books.", correct: true },
            { text: "It only provides access to student loans.", correct: false }
        ]
    },
    {
        question: "What additional financial aid options are available for military families and students planning to study abroad?",
        answers: [
            { text: "There are no special financial aid options available for these groups.", correct: false },
            { text: "Only loans are available for these students.", correct: false },
            { text: " Special federal aid programs provide additional eligibility and benefits for military families and students studying abroad.", correct: true },
            { text: "Only private scholarships are available.", correct: false }
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

// Replace fs.writeFile with localStorage.setItem
nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        // Store score in localStorage
        localStorage.setItem('score', score);
        
        alert("Quiz finished! Your score is: " + score);
        if(score<4){
            startQuiz();
        }
    }
});


startQuiz();
