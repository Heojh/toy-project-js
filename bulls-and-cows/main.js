'use strict'

// 숫자버튼(1~9) 값을 얻어서 랜덤함수를 생성할 배열 만들기.
const numberBtn = document.querySelectorAll('.number');
const numberList = [];
for (let i = 0; i < numberBtn.length; i++) {
    const number = numberBtn[i];
    numberList.push(number.textContent);
}

// 버튼리스트를 사용해서 4자리의 랜덤한 배열 만들기.
const question = [];
for (let i = 0; i < 4; i++) {
    question.push(numberList.splice(Math.floor(Math.random() * (9 - i)), 1)[0]);
}
console.log(numberList);
console.log(question);

// 버튼의 숫자 화면에 표시하기.
const paintNumber = document.querySelector('.current__number');
for (let button of numberBtn) {
    button.addEventListener('click', (e) => {
        const target = e.target;
        paintNumber.append(target.textContent);
    });
}

// 사용자가 누른 4자리 수 배열로 만들고, 화면 초기화 하기.
const confirmBtn = document.querySelector('.confirm');
confirmBtn.addEventListener('click', () => {
    const numberChange = paintNumber.textContent;
    const answer = numberChange.split("");
    check(answer, question);
    paintNumber.textContent = '';
});

let tryCnt = 0;
let outs = 0;
function check(answer, question) {
    if(answer.join('') === question.join('')){
        alert('4-Bulls');
        location.reload(true);
    } else {
        let bulls = 0;
        let cows = 0;
        for(let i = 0; i < question.length; i++) {
            if(answer[i] === question[i]) {
                bulls ++;
            } else if(answer.indexOf(question[i]) > -1) {
                cows ++;
            }
        }
        if(bulls === 0 && cows === 0) {
            outs ++;
            if(outs === 3) {
                alert(`3아웃 입니다. 정답은 [${question}] 입니다.`);
                location.reload(true);
            }
        }
        tryCnt ++;
        score(tryCnt, answer, bulls, cows, outs);
    }
}

// delete 버튼으로 입력한 번호 지우기 -> {once: true} 사용시 재입력 못하는 문제가 발생.
const deleteBtn = document.querySelector('.delete');
deleteBtn.addEventListener('click', () => {
    let numberChange = paintNumber.textContent;
    numberChange = numberChange.substring(0, numberChange.length - 1);
    paintNumber.textContent = numberChange;
});

// 새로운 스코어 생성하기.
const scoreList = document.querySelector('.score-list');
function score(tryCnt, answer, bulls, cows, outs) {
    const scoreBoard = document.querySelector('.scoreboard').cloneNode(false);
    scoreBoard.innerHTML = `
            <div class="try">${tryCnt}</div>
            <div class="select">${answer}</div>
            <div class="bulls">${bulls}</div>
            <div class="cows">${cows}</div>
            <div class="out">${outs}</div>`
    scoreList.appendChild(scoreBoard);
}
