const quizData = [
    {
        question: "What is the capital of India?",
        a: "Delhi",
        b: "Mumbai",
        c: "Gujarat",
        d: "UttarPradesh",
        correct: "a"
    },
    {
        question: "Which planet is known as the Red Planet?",
        a: "Earth",
        b: "Mars",
        c: "Jupiter",
        d: "Saturn",
        correct: "b"
    },
    {
        question: "Where 'Charusat University' Located?",
        a: "Ahemdabad",
        b: "Nadiad",
        c: "Vadodra",
        d: "Anand",
        correct: "d"
    },
    {
        question: "How Many instittue in Charsat University?",
        a: "10",
        b: "11",
        c: "15",
        d: "9",
        correct: "b"
    },
    {
        question: "Which Event Is Combination Of Sports And Traditional Events?",
        a: "Cognizance",
        b: "Charusat Fair",
        c: "Spoural",
        d: "Sports Festival",
        correct: "c"
    }
];

const quizContainer = document.getElementById('quiz');
const submitButton = document.getElementById('submit');
const resultContainer = document.getElementById('result');

function loadQuiz() {
    quizData.forEach((data, index) => {
        const questionContainer = document.createElement('div');
        questionContainer.classList.add('question');
        
        questionContainer.innerHTML = `
            <p>${data.question}</p>
            <label>
                <input type="radio" name="question${index}" value="a"> ${data.a}
            </label>
            <label>
                <input type="radio" name="question${index}" value="b"> ${data.b}
            </label>
            <label>
                <input type="radio" name="question${index}" value="c"> ${data.c}
            </label>
            <label>
                <input type="radio" name="question${index}" value="d"> ${data.d}
            </label>
        `;
        
        quizContainer.appendChild(questionContainer);
    });
}

function getSelectedAnswers() {
    const answers = [];
    quizData.forEach((_, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        answers.push(selectedAnswer ? selectedAnswer.value : null);
    });
    return answers;
}

function calculateScore(answers) {
    let score = 0;
    answers.forEach((answer, index) => {
        if (answer === quizData[index].correct) {
            score++;
        }
    });
    return score;
}

function showResult() {
    const answers = getSelectedAnswers();
    const score = calculateScore(answers);
    resultContainer.innerHTML = `You scored ${score} out of ${quizData.length}!`;
}

submitButton.addEventListener('click', showResult);


loadQuiz();
