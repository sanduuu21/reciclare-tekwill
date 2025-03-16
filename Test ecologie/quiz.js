const questions = [
    { question: "Care este cel mai mare ocean al lumii?", answers: ["Atlantic", "Indian", "Pacific", "Arctic"], correct: 2 },
    { question: "Ce gaz este principalul responsabil pentru efectul de seră?", answers: ["Oxigen", "Dioxid de carbon", "Azot", "Hidrogen"], correct: 1 },
    { question: "Ce proces natural transformă dioxidul de carbon în oxigen?", answers: ["Fotosinteza", "Respirația", "Eroziunea", "Fermentația"], correct: 0 },
    { question: "Cât din suprafața Pământului este acoperită de apă?", answers: ["50%", "60%", "70%", "80%"], correct: 2 },
    { question: "Care este cel mai mare deșert din lume?", answers: ["Sahara", "Gobi", "Antarctica", "Kalahari"], correct: 2 },
    { question: "Ce țară produce cea mai mare cantitate de energie regenerabilă?", answers: ["SUA", "China", "Germania", "Brazilia"], correct: 1 },
    { question: "Care este cel mai lung râu din Moldova?", answers: ["Nistru", "Prut", "Răut", "Bîc"], correct: 0 },
    { question: "Ce procent din energia electrică a Moldovei provine din surse regenerabile?", answers: ["10%", "25%", "40%", "60%"], correct: 1 },
    { question: "Ce animal protejat se găsește în Rezervația Pădurea Domnească?", answers: ["Urs brun", "Zimbru", "Râs", "Lup"], correct: 1 },
    { question: "Câte parcuri naționale are Republica Moldova?", answers: ["1", "2", "3", "4"], correct: 0 },
    { question: "Care este cel mai mare poluator al apei?", answers: ["Plasticul", "Pesticidele", "Petrolul", "Metalul"], correct: 0 },
    { question: "Cât timp durează descompunerea plasticului în natură?", answers: ["50 de ani", "100 de ani", "450 de ani", "1000 de ani"], correct: 2 },
    { question: "Ce țară reciclează cel mai mult deșeuri?", answers: ["Germania", "Suedia", "Japonia", "Norvegia"], correct: 0 },
    { question: "Care dintre următoarele este o sursă de energie regenerabilă?", answers: ["Cărbune", "Petrol", "Vânt", "Gaz natural"], correct: 2 },
    { question: "Ce gaz este responsabil pentru ploaia acidă?", answers: ["Dioxid de sulf", "Metan", "Oxigen", "Azot"], correct: 0 },
    { question: "Ce procent din deșeurile globale este reciclat?", answers: ["10%", "25%", "35%", "50%"], correct: 2 },
    { question: "Ce material este cel mai ușor reciclabil?", answers: ["Sticlă", "Plastic", "Hârtie", "Metal"], correct: 0 },
    { question: "Care este cea mai importantă sursă de apă potabilă?", answers: ["Marea", "Lacurile", "Pânza freatică", "Fluviile"], correct: 2 },
    { question: "Ce procent din pădurile lumii este defrișat anual?", answers: ["0.5%", "1%", "2%", "5%"], correct: 1 }
];


let currentQuestionIndex = 0;
let timeLeft = 60;
let timer;

document.addEventListener("DOMContentLoaded", () => {
    startQuiz();
});

function startQuiz() {
    timer = setInterval(updateTimer, 1000);
    showQuestion();
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        document.getElementById("time").innerText = timeLeft;
    } else {
        clearInterval(timer);
        alert("Timpul a expirat!");
    }
}

function showQuestion() {
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
    answerButtons.innerHTML = "";

    const question = questions[currentQuestionIndex];
    questionText.innerText = question.question;

    question.answers.forEach((answer, index) => {
        const button = document.createElement("button");
        button.innerText = answer;
        button.classList.add("btn");
        button.addEventListener("click", () => selectAnswer(index));
        answerButtons.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
        alert("Răspuns corect!");
    } else {
        alert("Răspuns greșit!");
    }

    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        clearInterval(timer);
        alert("Quiz terminat!");
    }
}