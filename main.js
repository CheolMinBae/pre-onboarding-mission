import {dummy} from './data.js'

let dataBarElement = document.querySelector(".search_bar")
let dataListLayout = document.querySelector(".search_list")

dataBarElement.addEventListener('keyup',()=>{
    dataListLayout.style.display = "block"
})

dummy.forEach((element)=>{
    let dataListElement = document.createElement('div')
    dataListElement.className = ".search_list_element"

    dataListElement.style.height = "2rem";
    dataListElement.style.border = "0.5px solid skyblue";
    dataListElement.innerText = element.description;
    dataListLayout.appendChild(dataListElement)
    
})
