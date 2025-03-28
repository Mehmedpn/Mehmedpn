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
    if (selectedRightAnswer(selectedQuestionNumber, question)) {
        rightSelection(selection);
    } else {
        wrongSelection(selection, rightAnswerID)
    }
}

function wrongSelection(selection, rightAnswerID) {
    makeSelectionRed(selection);
    makeRightAnswerGreen(rightAnswerID);
    ableTryAgainButton();
    disableNextQuestionButton();
    pushFalseAnswer();
    audioFail.play();
}

function rightSelection(selection) {
    makeSelectionGreen(selection);
    ableNextQuestionButton();
    pushRightAnswer();
    audioSuccess.play();
}

function selectedRightAnswer(selectedQuestionNumber, question) {
    return selectedQuestionNumber == question['right_answer'];
}

function makeSelectionGreen(selection) {
    document.getElementById(selection).parentNode.classList.add('bg-success');
}

function makeSelectionRed(selection) {
    document.getElementById(selection).parentNode.classList.add('bg-danger');
}

function makeRightAnswerGreen(rightAnswerID) {
    document.getElementById(rightAnswerID).parentNode.classList.add('bg-success');
}

function pushFalseAnswer() {
    falseAnswer = Math.min(falseAnswer + 1, 5);
}
function pushRightAnswer() {
    rightAnswer = Math.min(rightAnswer + 1, 5);
}

function ableTryAgainButton() {
    document.getElementById('try_again').disabled = false;
}

function ableNextQuestionButton() {
    document.getElementById('next_question').disabled = false;
}

function disableNextQuestionButton() {
    document.getElementById('next_question').disabled = true;
}

function tryAgain() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success', 'bg-danger');
    }
    disableTryAgainButton();
    disableNextQuestionButton();
}

function nextQuestion() {
    currentQuestion++;
    if (GameIsOver()) {
        showEndscreen();
        getScore();
        return;
    }
    disableTryAgainButton();
    tryAgain();
    getQuestion();
    moveProgressBar();
}

function GameIsOver() {
    return currentQuestion == questions.length;
}

function showEndscreen() {
    document.getElementById('quizscreen').style.display = 'none';
    document.getElementById('endscreen').style.display = 'flex';
}

function getScore() {
    document.getElementById('score').innerHTML = (alertText1 + rightAnswer + alertText2 + falseAnswer + " Punkte: " + (rightAnswer - falseAnswer));
}

function disableTryAgainButton() {
    document.getElementById('try_again').disabled = true;
}

function moveProgressBar() {
    let percent = Math.round((currentQuestion / questions.length) * 100);
    if (percent > 100) percent = 100;  // Sicherheitshalber deckeln
    document.getElementById('progress_bar').innerHTML = `${percent}%`;
    document.getElementById('progress_bar').style.width = `${percent}%`;
}

function setProgressBar() {
    document.getElementById('progress_bar').innerHTML = '0%';
    document.getElementById('progress_bar').style.width = '0%';
}

function startQuizAgain() {
    document.getElementById('endscreen').style.display = 'none';
    document.getElementById('startscreen').style.display = 'flex';
    setScore();
    setProgressBar();
    getQuestion();
    tryAgain();
}

function setScore() {
    currentQuestion = 0;
    rightAnswer = 0;
    falseAnswer = 0;
    score = 0;
}