import dummy from "./data.js";

const searchInput = document.querySelector(".search-input");
const suggestionContainer = document.querySelector(".suggestionContainer");

let selectedIndex = -1;
let prevSelectedIndex = -1;

// 검색창에 입력시 제안 목록을 필터링
searchInput.addEventListener("input", function () {
  const inputValue = this.value.toLowerCase();
  const filteredSuggestions = dummy.filter(
    (suggestion) =>
      suggestion.description.toLowerCase().includes(inputValue) || suggestion.key.toLowerCase().includes(inputValue)
  );

  renderSuggestions(filteredSuggestions);
});

// 제안 목록을 렌더링
function renderSuggestions(filteredSuggestions) {
  if (filteredSuggestions.length === 0) {
    suggestionContainer.classList.remove("show");
    return;
  }

  suggestionContainer.innerHTML = "";
  let currentType = null;

  for (const suggestion of filteredSuggestions) {
    if (currentType !== suggestion.type) {
      const typeLi = document.createElement("li");
      typeLi.innerHTML = suggestion.type;
      typeLi.classList.add("suggestion-type");
      suggestionContainer.appendChild(typeLi);
      currentType = suggestion.type;
    }

    const li = document.createElement("li");
    li.innerHTML = `${suggestion.description}`;
    li.classList.add("suggestion-item");

    li.addEventListener("click", () => {
      searchInput.value = suggestion.key;
      suggestionContainer.classList.remove("show");
    });
    suggestionContainer.appendChild(li);
  }

  suggestionContainer.classList.add("show");
  selectedIndex = -1;
}

// 화살표 키를 사용하여 제안 목록을 탐색하고 Enter 키를 사용하여 선택
searchInput.addEventListener("keydown", function (e) {
  const items = suggestionContainer.querySelectorAll(":scope > .suggestion-item");

  if (e.key === "ArrowDown") {
    selectedIndex = selectedIndex < items.length - 1 ? selectedIndex + 1 : 0;
    updateSelection();
  } else if (e.key === "ArrowUp") {
    selectedIndex = selectedIndex > 0 ? selectedIndex - 1 : items.length - 1;
    updateSelection();
  } else if (e.key === "Enter" && selectedIndex > -1) {
    searchInput.value = dummy[selectedIndex].key;
    suggestionContainer.classList.remove("show");
    selectedIndex = -1;
    prevSelectedIndex = -1;
  }
});

function isSuggestionType(item) {
  return item?.classList.contains("suggestion-type");
}

function updateSelection() {
  const items = suggestionContainer.querySelectorAll(":scope > .suggestion-item");

  if (prevSelectedIndex === selectedIndex || selectedIndex === -1) return;

  // 이전에 선택된 항목의 클래스 제거
  if (prevSelectedIndex !== -1) {
    items[prevSelectedIndex].classList.remove("selected");
  }

  // 새로 선택된 항목에 클래스 추가
  items[selectedIndex].classList.add("selected");
  items[selectedIndex].scrollIntoView({ behavior: "smooth", block: "nearest" });

  prevSelectedIndex = selectedIndex;
}

// 검색창 외부 클릭시 추천 목록 숨기기
document.addEventListener("click", function (e) {
  if (!searchInput.contains(e.target) && !suggestionContainer.contains(e.target)) {
    console.log(e.target);
    suggestionContainer.classList.remove("show");
  }
});
