import { dummy } from "./data.js"

// 1. 데이터를 사용할 형태로 가공 ({ 타입: [], 타입2: [], ...})
const dataByType = dummy.reduce((curr, data) => {
    curr[data.type] = [...curr[data.type] || [], data]
    return curr
}, {})

// 2. 검색 결과 렌더링
const result = document.querySelector("#result")
const input = document.querySelector("#search")

const renderResult = (value) => {
    result.innerHTML = ''
        
    Object.keys(dataByType).forEach((type) => {
        const typeDiv = document.createElement('h4')
        typeDiv.textContent= type
        result.appendChild(typeDiv)

        dataByType[type].forEach((data) => {
            const option = document.createElement('div')
            option.innerHTML = highlight(data.description, value)
            result.appendChild(option)
        })
    
       result.appendChild(document.createElement('br'))
    })
}

const highlight = (origin, value) => {
    if(value === '') return origin;
    const regex = new RegExp(`(${value})`, "gi");
    return origin.replace(regex, `<strong>$1</strong>`);
}

// 3. (2)를 input 입력값이 변할 때마다 수행하도록 이벤트 리스너 추가
input.addEventListener('input', (event) => { 
    const value = event.target.value

    if(value === '') {
        result.style.display = 'none'
        return;
    }
    result.style.display = 'block'
    renderResult(value)
})
