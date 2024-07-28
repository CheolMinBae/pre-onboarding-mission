import { dummy } from './data.js';
// ㄴ [{description, key, type}, ...]
const container = document.querySelector('#container');
const searchInput = document.querySelector('#search-input');
const searchBtn = document.querySelector('#search-btn');

// 구현할 기능
// (v)1. key 입력 시 box가 화면에 나타나야 함
// (v)2. box에는 type별로 묶인 description list가 나타남
// (v)3. key 입력 시 일치하는 글자가 실시간 bold처리됨
// (v)4. 각 항목에 hover 시 색이 바뀜
// (v)5. list는 좌측 스크롤바가 있고, div 사이즈 안에 들어감(튀어나오지 않음)

let isKeyUp = false;
const comboBox = document.createElement("div");
comboBox.className = 'combo-box';

// 2 (type별로 묶기-이미 정렬된 data로 생각하고 표시)
const comboBoxUl = document.createElement("ul");
let prevType = '';
dummy.forEach((item) => {
    if(prevType != item.type) {
        const typeLi = document.createElement('li');
        typeLi.textContent = item.type;
        typeLi.className = 'type-name';
        prevType = item.type;
        comboBoxUl.appendChild(typeLi);
    }
    const li = document.createElement("li");
    li.className = 'item';
    li.textContent = item.description;
    li.dataset.key = item.key;
    li.dataset.type = item.type;
    comboBoxUl.appendChild(li);
});

comboBox.appendChild(comboBoxUl);
container.appendChild(comboBox);

searchInput.addEventListener('keyup', (e) => {
    if (!isKeyUp) { // 1 (처음 한 번만 실행)
        comboBox.classList.toggle('show');
        isKeyUp = true; 
    }

    // 3
    const inputValue = e.target.value;
    const liList = comboBoxUl.querySelectorAll('.item');
    liList.forEach((li) => {
        if (inputValue) { // 검색어가 있으면
            // 대소문자 구분 없이 검색어를 찾는 정규표현식
            const regex = new RegExp(`(${inputValue})`, 'gi');
            // 정규표현식을 기준으로 치환
            li.innerHTML = li.textContent.replace(regex, (match) => `<b>${match}</b>`);
        } else {
            // 검색어가 없으면 원래 텍스트로 되돌리기
            li.innerHTML = li.textContent;
        }
    });
});
