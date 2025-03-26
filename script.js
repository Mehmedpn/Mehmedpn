let currentQuestion = 0;
let rightAnswer = 0;
let falseAnswer = 0;
let score = 0;
let alertText1 = "\nRichtige Antworten: ";
let alertText2 = "\nFehlversuche: ";
let audioSuccess = new Audio('assets/audio/correct2.mp3');
let audioFail = new Audio('assets/audio/wrong.mp3');

function init() {
    getQuestion();
}

function startQuiz() {
    document.getElementById('startscreen').style.display = 'none';
    document.getElementById('quizscreen').style.display = 'flex';
}

function getQuestion() {
    let question = questions[currentQuestion];

    document.getElementById('questions_length').innerHTML = questions.length;
    document.getElementById('question_number').innerHTML = "Frage " + question['number'];
    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    document.getElementById('question-number-2').innerHTML = question['number'];

    disableNextQuestionButton();
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let rightAnswerID = `answer_${question['right_answer']}`;
    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        disableTryAgainButton();
        rightAnswer++;
        rightAnswer = Math.min(rightAnswer + 1, 5);
        audioSuccess.play();
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(rightAnswerID).parentNode.classList.add('bg-success');
        document.getElementById('try_again').disabled = false;
        falseAnswer++;
        audioFail.play();
    }
    document.getElementById('next_question').disabled = false;
}

function tryAgain() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success', 'bg-danger');
    }
    disableTryAgainButton();
    disableNextQuestionButton();
    getQuestion();
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion == questions.length) {
        document.getElementById('quizscreen').style.display = 'none';
        document.getElementById('endscreen').style.display = 'flex';
        document.getElementById('score').innerHTML = (alertText1 + rightAnswer + alertText2 + falseAnswer + " Punkte: " + (rightAnswer - falseAnswer));
        // document.getElementById('false_answers').innerHTML = falseAnswer;
        // document.getElementById('questions_length').innerHTML = questions.length;
        disableNextQuestionButton()
    }
    disableTryAgainButton();
    tryAgain();
    getQuestion();
    moveProgressBar();
}

function disableNextQuestionButton() {
    document.getElementById('next_question').disabled = true;
}

function disableTryAgainButton() {
    document.getElementById('try_again').disabled = true;
}

function moveProgressBar() {
    let percent = currentQuestion / questions.length * 100;
    percent = Math.round(percent);
    document.getElementById('progress_bar').innerHTML = `${percent}%`;
    document.getElementById('progress_bar').style.width = `${percent}%`;
}

function startQuizAgain() {
    document.getElementById('endscreen').style.display = 'none';
    document.getElementById('startscreen').style.display = 'flex';
    setScore();
    getQuestion();
    tryAgain();
}

function setScore() {
    currentQuestion = 0;
    rightAnswer = 0;
    falseAnswer = 0;
    score = 0;
}