'use strict'

const question = document.querySelector('.question');
const answer = document.querySelector('.answer__text');
const submitBtn = document.querySelector('.answer__btn');
const wrong = document.querySelector('.wrong');
const score = document.querySelector('.score');

// Mark a score
function paintScore(num) {
    const getScore = Number(score.textContent.replace(/[^0-9]/g,'')) + num;
    score.textContent = getScore >= 0 ? `점수 : ${getScore}` : `점수 : 0`;
}

// Compare Last and First Char
function textCheck(event) {
    event.preventDefault();
    const answerText = answer.value;
    const firstChar = answerText.charAt(0);
    const questionText = question.textContent;
    const lastChar = questionText.charAt(questionText.length-1);

    if(firstChar === lastChar) {
        wrong.classList.add('invisible');
        question.textContent = answerText;
        answer.value = '';
        paintScore(100);
    } else {
        wrong.classList.remove('invisible');
        answer.value = '';
        paintScore(-50);
    }
}

function init() {
    answer.focus();
    submitBtn.addEventListener('click', textCheck);
}

init();