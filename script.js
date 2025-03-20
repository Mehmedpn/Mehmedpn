let currentQuestion = 0;
let rightAnswer = 0;
let falseAnswer = 0;
let score = 0;
let alertText1 = "\nDeine Punktzahl: ";
let alertText2 = "\nFalsche Antworten: ";

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
    document.getElementById('next_question').disabled = true;
}

function answer(selection) {
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1);
    let rightAnswerID = `answer_${question['right_answer']}`;

    if (selectedQuestionNumber == question['right_answer']) {
        document.getElementById(selection).parentNode.classList.add('bg-success');
        document.getElementById('try_again').disabled = true;
        rightAnswer++;
    } else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(rightAnswerID).parentNode.classList.add('bg-success');
        document.getElementById('try_again').disabled = false;
        falseAnswer++;
    }
    document.getElementById('next_question').disabled = false;
}

function tryAgain() {
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`answer_${i}`).parentNode.classList.remove('bg-success', 'bg-danger');
    }
    document.getElementById('try_again').disabled = true;
    document.getElementById('next_question').disabled = true;
    getQuestion();
}

function lastQuestion() {
    currentQuestion--;
    if (currentQuestion == 0) {
        document.getElementById('last_question').disabled = true;
    }
    document.getElementById('next_question').disabled = true;
    tryAgain();
    getQuestion();
}

function nextQuestion() {
    currentQuestion++;

    if (currentQuestion == questions.length) {
        document.getElementById('quizscreen').style.display = 'none';
        document.getElementById('endscreen').style.display = 'flex';

        document.getElementById('score').innerHTML = (alertText1 + (rightAnswer-falseAnswer) + "/" + questions.length + alertText2 + falseAnswer);
        document.getElementById('false_answers').innerHTML = falseAnswer;
        document.getElementById('questions_length').innerHTML = questions.length;

        document.getElementById('next_question').disabled = true;
    }

    document.getElementById('try_again').disabled = true;
    tryAgain();
    getQuestion();
    document.getElementById('last_question').disabled = false;
}

function startQuizAgain() {
    document.getElementById('endscreen').style.display = 'none';
    document.getElementById('startscreen').style.display = 'flex';
}