import { dummy } from "./data.js";

const ulElement = document.createElement("ul");
ulElement.classList.add("hidden");
setDummyOptionList();

// 더미 세팅
function setDummyOptionList() {
  dummy.forEach((item, index) => {
    const liElement = document.createElement("li");
    if (
      item.type !== (dummy[index - 1] ? dummy[index - 1].type : "not matched")
    ) {
      const Category = document.createElement("li");
      Category.textContent = item.type;
      Category.setAttribute("key", `${item.key}-category`);
      Category.classList.add("category");
      ulElement.append(Category);
    }
    liElement.textContent = item.description;
    liElement.setAttribute("key", item.key);
    ulElement.append(liElement);
  });

  document.body.append(ulElement);
}
const input = document.getElementById("input");

// 돌면서 같은글자 있으면 교체
const inputEvent = (e) => {
  const inputValue = e.target.value.toLowerCase();

  if (inputValue) {
    dummy.forEach((item) => {
      const description = item.description;
      const liElement = ulElement.querySelector(`li[key="${item.key}"]`);
      const matchIndex = description.toLowerCase().indexOf(inputValue);

      if (matchIndex !== -1) {
        liElement.innerHTML = `${description.slice(
          0,  
          matchIndex
        )}<b>${description.slice(
          matchIndex,
          matchIndex + inputValue.length
        )}</b>${description.slice(matchIndex + inputValue.length)}`;
      } else liElement.innerHTML = description;
    });
    ulElement.classList.remove("hidden");
  } else {
    ulElement.classList.add("hidden");
  }
};

// 디바운스 구현
function debounce(callback, delay = 300) {
  let timer = null;

  return (event) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => callback(event), delay);
  };
}

input.addEventListener("keyup", debounce(inputEvent));
