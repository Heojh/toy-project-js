Word chain : 끝말잇기
-

사전적 정의 : <br />
낱말 놀이의 하나, 한 사람이 한 낱말을 말하면 다름 사람이 그 말의 끝음절을 첫음절로 하는 낱말을 불러 이어 간다. <br />

<br />

작동 순서 :
- 시작단어 HTML 화면에 출력
- 다음 단어를 입력할 수 있는 폼
- 입력값을 넘겨주는 버튼
- 화면에 보여지는 단어의 끝음절과 입력값의 첫 음절이 같은지 비교
- 값이 다르면 오답이라고 알려줌
- 값이 참이면 입력한 단어가 출력
- 위 과정을 반복

<br />

분류 :
- HTML
    - 문제를 보여줌
    - 글자를 입력받을 수 있는 폼
    - 글자를 확인하는 버튼
    - '틀렸습니다'를 보여줌
    
    
- JavaScript
    - 출력 글자의 요소 확인
    - 글자 입력 폼 요소 확인
    - 확인 버튼 요소 확인
    - 버튼 이벤트
    - 출력 글자, 입력 글자 문자열 확인
    - 끝음절, 첫음절 비교
    - 참이면 글자 변경
    - 거짓이면 '틀렸습니다.' 출력


<br />

정보 :
- 요소 확인
    - document.getElementById()
    - document.getElementsByClassName()
    - document.getElementsByTagName()
    - document.querySelector()
    - document.querySelectorAll()


- 버튼 이벤트
    - eventTarget.addEventListener('submit', () => {})


- 문자열 나누기
    - string.prototype.split()


- 참, 거짓
    - if(), else if(), else


- 글자 출력
    - element.innerHTML
    - node.innerText = htmlElement.innerText
    - node.textContent = someNode.textContent

    
<br />

추가할 수 있는 기능 :
- 문자수 지정 (2단어 or 3단어)
- 점수 표시 (저장x)
- 점수 표시 (저장o -> localStorage 저장 -> 초기화 버튼)
- 시간 제한

<br />

---

<br />
코딩을 진행하면서 느낀점<br />
👉 순서<br />
👉 분류<br />
👉 정보<br />
👉 정리<br />
👉 +a
