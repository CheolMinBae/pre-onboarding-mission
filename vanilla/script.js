import { dummy } from "../data.js";

const $form = document.querySelector(".search-form");
const $input = document.querySelector("#searchInput");
const $lists = document.querySelector(".lists");
const $result = document.querySelector(".result");

const types = new Set(dummy.map((item) => item.type));
let currentFocus = -1;
let debounceTimer;

function highlightText(text, highlight) {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return parts
    .map((part) =>
      part.toLowerCase() === highlight.toLowerCase()
        ? `<strong>${part}</strong>`
        : part
    )
    .join("");
}

function updateList(filterList, inputText) {
  $lists.innerHTML = "";

  if (inputText === "" || filterList.length === 0) {
    $lists.setAttribute("aria-hidden", "true");
    return;
  }

  $lists.setAttribute("aria-hidden", "false");

  const $div = document.createElement("div");
  const $ul = document.createElement("ul");
  $ul.setAttribute("role", "listbox");
  $ul.setAttribute("aria-label", "검색 결과");

  [...types].forEach((type) => {
    const $group = document.createElement("li");
    const $groupType = document.createElement("p");
    $group.id = type;
    $groupType.textContent = type;
    $group.append($groupType);
    $ul.append($group);
  });
  $div.append($ul);
  $lists.append($div);

  // 입력 결과 추가
  filterList.forEach((item, index) => {
    const item_button = document.createElement("button");
    item_button.innerHTML = highlightText(item.description, inputText);
    item_button.setAttribute("role", "option");
    item_button.setAttribute("aria-selected", "false");
    item_button.setAttribute("tabindex", "-1");
    item_button.dataset.index = index;

    const type_li = $ul.querySelector(`#${item.type}`);
    type_li.append(item_button);
  });

  // 빈 카테고리 숨기기
  $ul.querySelectorAll("li").forEach((li) => {
    if (li.querySelectorAll("button").length === 0) {
      li.style.display = "none";
    } else {
      li.style.display = "";
    }
  });

  currentFocus = -1;
  $input.setAttribute("aria-activedescendant", "");
}

function updateFocus(items) {
  if (currentFocus === -1) {
    $input.focus();
  } else {
    items.forEach((item, index) => {
      if (index === currentFocus) {
        item.setAttribute("aria-selected", "true");
        item.focus();
      } else {
        item.setAttribute("aria-selected", "false");
      }
    });
  }
}

function handleKeyDown(e) {
  const items = $lists.querySelectorAll("button");
  if (!items.length) return;

  switch (e.key) {
    case "ArrowDown":
    case "ArrowRight":
      e.preventDefault();
      if (currentFocus === -1) {
        currentFocus = 0;
      } else {
        currentFocus = (currentFocus + 1) % items.length;
      }
      updateFocus(items);
      break;
    case "ArrowUp":
    case "ArrowLeft":
      e.preventDefault();
      if (currentFocus === -1) {
        currentFocus = items.length - 1;
      } else {
        currentFocus = (currentFocus - 1 + items.length) % items.length;
      }
      updateFocus(items);
      break;
    case "Enter":
      if (document.activeElement.tagName === "BUTTON" && items.length > 0) {
        e.preventDefault();
        if (currentFocus > -1) {
          $input.value = items[currentFocus].textContent;
          $lists.innerHTML = "";
          $input.focus();
          currentFocus = -1;
        }
      }
      break;
    case "Escape":
      e.preventDefault();
      $input.value = "";
      $lists.innerHTML = "";
      currentFocus = -1;
      $input.focus();
      break;
    case "Tab":
      e.preventDefault();
      if (e.shiftKey) {
        currentFocus =
          currentFocus === -1
            ? items.length - 1
            : (currentFocus - 1 + items.length) % items.length;
      } else {
        currentFocus =
          currentFocus === -1 ? 0 : (currentFocus + 1) % items.length;
      }
      updateFocus(items);
      break;
  }
}

$form.addEventListener("keydown", handleKeyDown);

$input.addEventListener("input", (e) => {
  const inputText = e.target.value.toLowerCase();

  clearTimeout(debounceTimer);

  debounceTimer = setTimeout(() => {
    const filterList = dummy.filter(
      (item) =>
        item.description.toLowerCase().includes(inputText) ||
        item.key.toLowerCase().includes(inputText) ||
        item.type.toLowerCase().includes(inputText)
    );
    updateList(filterList, inputText);
  }, 300);
});

$lists.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    $input.value = e.target.textContent;
    $lists.innerHTML = "";
  }
});

// 바깥 클릭
document.addEventListener("click", (e) => {
  if (!$input.contains(e.target) && !$lists.contains(e.target)) {
    $lists.innerHTML = "";
  }
});

$form.addEventListener("submit", (e) => {
  e.preventDefault();
  const items = $lists.querySelectorAll("button");
  let selectedValue = $input.value;

  if (currentFocus > -1 && items.length > 0) {
    selectedValue = items[currentFocus].textContent;
  }

  $result.textContent = `${selectedValue}이 입력되었습니다!`;
  $input.value = selectedValue;
  $lists.innerHTML = "";
});
