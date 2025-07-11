let Score = 0;
const operation = ['+', '-', 'x', '/'];
let questionCount = 10;
let timeInterval = 0;
let jawabanBenar = 0;
let waktu = 300;

function generateQuestion() {
    const number1 = Math.floor(Math.random() * 20) + 1;
    const number2 = Math.floor(Math.random() * 20) + 1;
    const operator = operation[Math.floor(Math.random() * operation.length)];


    if (operator === '/' && number2 === 0) number2 = 1;

    switch (operator) {
        case '+':
            jawabanBenar = number1 + number2;
            break;
        case '-':
            jawabanBenar = number1 - number2;
            break;
        case 'x':
            jawabanBenar = number1 * number2;
            break;
        case '/':
            jawabanBenar = Math.floor(number1 / number2);
            break;
    }

    document.getElementById("random-number1").innerText = number1;
    document.getElementById("random-number2").innerText = number2;
    document.getElementById("random-operations").innerText = operator;
    document.getElementById("random-answer").value = "";
}

function checkAnswer() {
    let userAnswer = parseInt(document.getElementById("random-answer").value);

    if (userAnswer == jawabanBenar) {
        Score += 10;
    } else {
        Score = 0;
    }

    document.getElementById("skor").innerText = `Score: ${Score}`;
    generateQuestion();
}

function timeRemaining() {
    let menit = Math.floor(waktu / 60);
    let detik = waktu % 60;
    document.getElementById("time").innerText = `Time: ${String(menit).padStart(2, '0')}:${String(detik).padStart(2, '0')}`;
    if (waktu > 0) {
        waktu--;
    } else {

    }
}

document.getElementById("random-answer").addEventListener("keydown", function (event) {
    if (event.key === "Enter" || event.keyCode === 13) {
        event.preventDefault();
        checkAnswer();
        questionCount--;
    }
})

function startQuiz() {
    document.querySelector("button.btn-success").style.display = "none"; // sembunyikan tombol Start
    document.getElementById("quiz").style.display = "block";  // tampilkan konten quiz
    generateQuestion(); // mulai soal pertama
    timeRemaining(); // tampilkan waktu awal
    timeInterval = setInterval(timeRemaining, 1000)
}