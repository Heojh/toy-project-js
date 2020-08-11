'use strict'

/*
    - 문제 글자 추출 -> element.textContent
    - 문자열 마지막 문자 가져오기 -> string.charAt(string.length-1)
    - input type="text"에서 입력한 text 값 얻기 -> element.value
    - 문자열 첫 번째 문자 가져오기 -> string.charAt(0)
    - 문제 마지막 문자, 답 첫 번째 문자 비교 -> if, else
    - True
        -> .invisible 추가 -> classList.add()
        -> 문제 문자열 답 문자열로 바꾸기 -> element.textContent = answerText
        -> 입력창 문자열 지우기 -> answer.value = '';
        -> 입력창에 포커스 설정하기 -> answer.focus();
    - False
        -> .invisible 지우기 -> classList.remove()
        -> 입력창 문자열 지우기
        -> 입력창에 포커스 설정하기
    - 이벤트 발생
        -> 이벤트 리스너 구현.
        -> 알림을 받는 객체 연결 -> textCheck
    - 실행
    - 확인
 */

const question = document.querySelector('.question');
const answer = document.querySelector('.answer__text');
const submitBtn = document.querySelector('.answer__btn');
const wrong = document.querySelector('.wrong');

// console.log(question.textContent);
// const text = question.textContent;
// const lastChar = text.charAt(text.length-1);
// console.log(lastChar);

function textCheck(event) {
    event.preventDefault();
    // console.log(event.target);
    const answerText = answer.value;
    // console.log(answerText)
    const firstChar = answerText.charAt(0);
    // console.log(answerFirst);
    const questionText = question.textContent;
    const lastChar = questionText.charAt(questionText.length-1);
    // console.log(lastChar);
    if(firstChar === lastChar) {
        wrong.classList.add('invisible');
        question.textContent = answerText;
        answer.value = '';
        answer.focus();
    } else {
        wrong.classList.remove('invisible');
        answer.value = '';
        answer.focus();
    }
}

function init() {
    submitBtn.addEventListener('click', textCheck);
}

answer.focus();
init();