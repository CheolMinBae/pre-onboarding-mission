import { dummy } from './data.js';

let dataBarElement = document.querySelector(".search_bar");
let dataListLayout = document.querySelector(".search_list");

dummy.forEach((element) => {
    let dataListElement = document.createElement('div');
    dataListElement.className = "search_list_element";
    dataListElement.setAttribute('data-original', element.description); // 원본 텍스트 저장

    dataListElement.addEventListener('mouseover', () => {
        dataListElement.style.backgroundColor = 'skyblue';
    });
    dataListElement.addEventListener('mouseout', () => {
        dataListElement.style.backgroundColor = 'transparent';
    });
    dataListElement.style.height = "2rem";
    dataListElement.style.border = "0.5px solid skyblue";
    dataListElement.innerText = element.description;
    dataListLayout.appendChild(dataListElement);
});

dataBarElement.addEventListener('keyup', () => {
    dataListLayout.style.display = "block";
    let dataContainers = document.getElementsByClassName('search_list_element');
    Array.from(dataContainers).forEach((container) => {
        let originalText = container.getAttribute('data-original'); // 원본 텍스트 가져오기
        let regex = new RegExp(`(${dataBarElement.value})`, 'gi');
        let newContainerText = originalText.replace(regex, '<span class="highlight">$1</span>');
        container.innerHTML = newContainerText;
    });
});
