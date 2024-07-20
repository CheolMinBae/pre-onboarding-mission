import { dummy as data } from "../data.js";

const $input=document.querySelector('input');
const $autoComplete=document.querySelector('.auto-complete');


const highlightMatch=(desc,keyword)=>{
    const parts = desc.split(new RegExp(`(${keyword})`, 'gi'));
    return parts.map(part => part.toLowerCase() === keyword.toLowerCase() ? `<span class="highlight">${part}</span>` : part).join('');
}

const generateMarkup=(list,keyword)=>{
    const $listItem=$autoComplete.querySelectorAll('li');

    $listItem.forEach(item=>item.remove());

    const markup=list.map(item=>(`
            <li>${highlightMatch(item.description,keyword)}</li>
        `)).join('')
        
    $autoComplete.insertAdjacentHTML('beforeend',markup);
    $autoComplete.classList.remove('hidden');
}

$input.addEventListener('input',e=>{
    const keyword=e.target.value.toLowerCase();

    if(!keyword||!data.length){
        $autoComplete.classList.add('hidden')
        return;
    }
    generateMarkup(data,keyword);
})
