import {dummy} from './data.js'

let dataListElement = document.querySelector(".data")
console.log(dataListElement)

dummy.forEach((element)=>{
    let dataListOption = document.createElement('option')
    console.log(element)
    dataListOption.value = element

    dataListElement.appendChild(dataListOption)
})
