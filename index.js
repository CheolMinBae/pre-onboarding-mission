import { dummy } from './data.js';

const $listBox = document.querySelector('.list-box');

const dataMapping = (keyword) => {
  return dummy
    .map((data) => {
      return `<li>${keywordHighLight(data.description, keyword)}</li>`;
    })
    .join('');
};
const keywordHighLight = (description, keyword) => {
  const regex = new RegExp(keyword, 'gi');
  return description.replace(regex, (str) => `<span class='highlight'>${str}</span>`);
};

document.addEventListener('input', (e) => {
  const keyword = e.target.value.toLowerCase();
  if (keyword.length) {
    $listBox.innerHTML = dataMapping(keyword);
    $listBox.classList.remove('hidden');
  } else {
    $listBox.innerHTML = '';
    $listBox.classList.add('hidden');
  }
});
