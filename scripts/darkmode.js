function NightMode() {

    let name = document.getElementById('darkmode_btn');
    if (name.innerHTML == "Dark Mode") {
        name.innerHTML = "Light Mode";
    } else {
        name.innerHTML = "Dark Mode";
    }


    document.getElementById('nav').style.remove = 'background-color';
    // document.getElementsByClassName('card').style.remove = 'bs-card-border-width: var(--bs-border-width)'
    // document.getElementsByClassName('card').style.remove = 'bs-card-border-color: rgb(255 0 0 / 18%)';
    // document.getElementsByClassName('card').style.remove = 'bs-card-border-radius: var(--bs-border-radius)';

    let bodyElement = document.getElementById('body');
    bodyElement?.classList.toggle("dark-mode");

    let navElement = document.getElementById('nav');
    navElement?.classList.toggle("nav-dark");

    let startscreenElement = document.getElementById('startscreen');
    startscreenElement?.classList.toggle("dark-mode");

    let quizscreenElement = document.getElementById('quizscreen');
    quizscreenElement?.classList.toggle("dark-mode");

    let endscreenElement = document.getElementById('endscreen');
    endscreenElement?.classList.toggle("dark-mode");

    let cardbody1Element = document.getElementById('card_body1');
    cardbody1Element?.classList.toggle("card-dark");

    let cardbody2Element = document.getElementById('card_body2');
    cardbody2Element?.classList.toggle("card-dark");

    let cardbody3Element = document.getElementById('card_body3');
    cardbody3Element?.classList.toggle("card-dark");

    let logoElement = document.getElementById('logo');
    logoElement?.classList.toggle("logo-dark");

    let brainlogo = document.getElementById('brain_logo');
    brainlogo?.classList.toggle("logo-dark");

    let footerElement = document.getElementById('footer');
    footerElement?.classList.toggle("footer-dark");

    let answer1 = document.getElementById('answer_1');
    answer1?.classList.toggle("answer-dark");

    let answer2 = document.getElementById('answer_2');
    answer2?.classList.toggle("answer-dark");

    let answer3 = document.getElementById('answer_3');
    answer3?.classList.toggle("answer-dark");

    let answer4 = document.getElementById('answer_4');
    answer4?.classList.toggle("answer-dark");
}