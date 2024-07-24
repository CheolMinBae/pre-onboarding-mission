import { dummy } from "./data.js";

const searchInput = document.getElementById("search");
const dummyUl = document.getElementById("dummyUl");

function dummyList(filteredDummy) {
  dummyUl.innerHTML = "";

  filteredDummy.map((item) => {
    const dummyLi = document.createElement("li");
    const typeSpan = document.createElement("div");

    switch (item.type) {
      case "COMPANY":
        typeSpan.textContent = " [COMPANY] ";
        break;
      case "COUNTRY":
        typeSpan.textContent = " [COUNTRY] ";
        break;
      case "PEOPLE":
        typeSpan.textContent = " [PEOPLE] ";
        break;
      case "JOB":
        typeSpan.textContent = " [JOB] ";
        break;
      default:
        typeSpan.textContent = " [OTHER] ";
        break;
    }

    dummyLi.innerHTML = item.description;
    dummyLi.prepend(typeSpan);
    dummyUl.appendChild(dummyLi);
  });
}

function filterDummy() {
  const searchText = searchInput.value.toLowerCase();
  const filteredDummy = dummy.map((item) => {
    const itemDescription = item.description;
    if (itemDescription.toLowerCase().includes(searchText)) {
      const regex = new RegExp(`(${searchText})`, "gi");
      const boldDescription = itemDescription.replace(regex, "<b>$1</b>");
      return {
        ...item,
        description: boldDescription,
      };
    }
    return item;
  });

  const visibleItems = filteredDummy.filter((item) => item.description.toLowerCase().includes(searchText));
  dummyList(visibleItems);
}

searchInput.addEventListener("input", filterDummy);

dummyList(dummy);
