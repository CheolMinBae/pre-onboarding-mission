import { dummy } from "./data.js";

const $input = document.querySelector("input");
const $list = document.querySelector("#list");

$input.oninput = (e) => {
  debounce(() => {
    createListHTML(dummy, $list, e.target.value);
    toggleList(true);
  }, 200);
};

createListHTML(dummy, $list);
toggleList(false);

document.querySelector("body").addEventListener("click", (e) => {
  if (!$list.contains(e.target)) {
    toggleList(false);
  }
});

let timer = null;
function debounce(callback, delay) {
  if (timer) clearTimeout(timer);
  timer = setTimeout(callback, delay);
}

function hilightKeyword(data, keyword) {
  const regex = new RegExp(`(${keyword})`, "gi");
  return data.replace(regex, `<strong>$1</strong>`);
}

function toggleList(state) {
  $list.style.display = state ? "block" : "none";
}

function createListHTML(data, selector, keyword = "") {
  const types = new Set([]);
  data.forEach((d) => types.add(d.type));
  selector.innerHTML = [...types]
    .map(
      (t) =>
        `<div>
        <div class="group-title">${t}</div>
        ${data
          .filter((d) => d.type === t)
          .map(
            (d) =>
              `<div class="item">${hilightKeyword(
                d.description,
                keyword
              )}</div>`
          )
          .join("")}
    </div>`
    )
    .join("");
}
