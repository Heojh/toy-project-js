'use strict'

const question = document.querySelector('.question');
const answer = document.querySelector('.answer__text');
const submitBtn = document.querySelector('.answer__btn');
const wrong = document.querySelector('.wrong');

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
    } else {
        wrong.classList.remove('invisible');
        answer.value = '';
    }
}

function init() {
    answer.focus();
    submitBtn.addEventListener('click', textCheck);
}

init();