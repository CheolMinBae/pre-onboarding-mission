import { dummy } from './data.js';

const searchInput = document.getElementById('search');
const autocompleteList = document.getElementById('autocomplete-list');

const dummyTypeIndexOf = dummy.reduce(
  (acc, item, index) => ((acc[item.type] = acc[item.type] ?? index), acc),
  {}
);

const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    console.log('args', args);
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
};

const debounceSearch = debounce(searchValue => {
  autocompleteList.style.visibility = searchValue ? 'visible' : 'hidden';

  const regex = new RegExp(searchValue, 'gi');

  autocompleteList.innerHTML = dummy
    .map((item, index) => {
      const lowerCaseDescription = item.description.toLowerCase();
      let result = item.description;

      if (lowerCaseDescription.includes(searchValue.toLowerCase())) {
        result = item.description.replace(
          regex,
          match => `<strong>${match}</strong>`
        );
      }

      return dummyTypeIndexOf[item.type] === dummy.indexOf(item)
        ? `<li style="background-color: steelblue; font-weight: 700">${item.type}</li><li>${result}</li>`
        : `<li>${result}</li>`;
    })
    .join('');
}, 200);

searchInput.addEventListener('keyup', e => debounceSearch(e.target.value));
