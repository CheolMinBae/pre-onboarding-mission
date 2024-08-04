import { dummy } from './data.js'

const SearchInput = document.getElementById(`companySearch`)
const SearchModal = document.getElementById(`searchModal`)
let prevWords;

const TypeEnum = {
    COMPANY: 0,
    COUNTRY: 1,
    PEOPLE: 2,
    JOB: 3
};

const drawModal = (data, words) => {
    const sorted = data.sort((a, b) => TypeEnum[a.type] - TypeEnum[b.type]);
    const arr = [];
    sorted.map((element) => {
        if (!arr[element.type]) {
            const newElement = document.createElement('div');
            newElement.innerHTML = element.type;
            newElement.classList.add(`reversal`);
            arr[element.type] = true;
            SearchModal.append(newElement);
        }
        const newElement = document.createElement('div');
        let searchText = element.description;
        const regex = new RegExp(`(${words})`, 'gi');
        searchText = searchText.replace(regex, '<b>$1</b>');
        newElement.classList.add(`searchList`)
        newElement.innerHTML = searchText;
        SearchModal.append(newElement);
    }
    )
}

const SearchModalAppear = (event) => {
    const words = event.target.value.toLowerCase();
    if (words == '' || prevWords == words) {
        SearchModal.classList.remove('appear')
        SearchModal.classList.add('disappear')
        prevWords = '';
        return
    }
    SearchModal.classList.remove('disappear')
    SearchModal.classList.add('appear')
    prevWords = words;
    SearchModal.innerHTML = '';
    drawModal(dummy, words)
}

SearchInput.addEventListener('input', SearchModalAppear)