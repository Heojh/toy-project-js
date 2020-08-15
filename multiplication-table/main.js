'use strict'
const question = document.querySelector('.question');
const answer =  document.querySelector('.answer');
const submitBtn = document.querySelector('.submit-btn');

// Get number from question
function GetNum() {
    this.num = question.textContent.replace(/[^0-9]/g,'');
    this.first = this.num[0];
    this.second = this.num[1];
    this.calculate = this.first * this.second;
}

// Change question
function changeQuestion() {
    const firstNum = new Random(1,9);
    const secondNum = new Random(1,9);
    question.textContent = `문제 : ${firstNum.num} * ${secondNum.num} =`;
}

// Create random number
function Random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    this.num = Math.floor(Math.random() * (max - min + 1)) + min;
}

// Calculate
function calculate(e) {
    e.preventDefault();
    const questionNum = new GetNum();
    if(questionNum.calculate === Number(answer.value)){
        changeQuestion();
        answer.value = ``;
        answer.focus();
    } else {
        alert('Answer is wrong');
        answer.value = '';
    }
}

function init() {
    answer.focus();
    submitBtn.addEventListener('click', calculate);
}

window.addEventListener('load', changeQuestion);
init();