import { dummy } from "./data.js";

const resultDiv = document.getElementById("result");

window.addEventListener("DOMContentLoaded", () => {
  getData();
  const input = document.getElementById("searchInput");

  const debouncedHighlight = debounce((value) => {
    highlight(value);
  }, 300); // 300ms 지연

  input.addEventListener("input", (event) => {
    resultDiv.style.display = "block";
    debouncedHighlight(event.target.value);
  });
});

function getData() {
  const groupedData = dummy.reduce((acc, item) => {
    if (!acc[item.type]) {
      acc[item.type] = [];
    }
    acc[item.type].push(item);
    return acc;
  }, {});

  for (const [type, items] of Object.entries(groupedData)) {
    const typeHeader = document.createElement("div");
    typeHeader.innerText = type;
    typeHeader.setAttribute("id", "typeHeader");
    resultDiv.appendChild(typeHeader);

    items.forEach((item) => {
      const p = document.createElement("p");
      p.setAttribute("id", "resultparagraph");
      p.setAttribute("key", item.key);
      p.innerText = item.description;
      resultDiv.appendChild(p);
    });
  }
}

function highlight(value) {
  const paragraphs = resultDiv.getElementsByTagName("p");

  for (const p of paragraphs) {
    const text = p.innerText;
    const regex = new RegExp(`(${value})`, "gi");
    if (value && text.toLowerCase().includes(value.toLowerCase())) {
      const newText = text.replace(regex, '<span class="highlight">$1</span>');
      p.innerHTML = newText;
    } else {
      p.innerHTML = text;
    }
  }
}

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}
