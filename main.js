import { dummy } from './data.js';

let dataBarElement = document.querySelector(".search_bar");
let dataListLayout = document.querySelector(".search_list");

let dummyType = new Set()
dummy.forEach((element)=>{
    dummyType.add(element.type)
})



dummyType.forEach((currentDummy)=>{
    let dataCategoryElement = document.createElement('div');
    dataCategoryElement.className="search_list_category"

    dataCategoryElement.style.height = "2rem";
    dataCategoryElement.style.backgroundColor = "blue";
    dataCategoryElement.style.color = "white";
    dataCategoryElement.innerText = currentDummy

    dataListLayout.appendChild(dataCategoryElement);

    dummy.filter((nowDummy)=> nowDummy.type==currentDummy).forEach((element) => {

        let dataListElement = document.createElement('div');
        dataListElement.className = "search_list_element";
        dataListElement.setAttribute('data-original', element.description);
    
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
}) 


dataBarElement.addEventListener('keyup', () => {
    dataListLayout.style.display = "block";
    let dataContainers = document.getElementsByClassName('search_list_element');
    Array.from(dataContainers).forEach((container) => {
        let originalText = container.getAttribute('data-original');
        let regex = new RegExp(`(${dataBarElement.value})`, 'gi');
        let newContainerText = originalText.replace(regex, '<span class="highlight">$1</span>');
        container.innerHTML = newContainerText;
    });
});
