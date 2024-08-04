import { dummy } from "./data.js";

const $input = document.querySelector("input");
const $list = document.querySelector("#list");

$input.oninput = (e) => {
  toggleList(true);
};

createListHTML(dummy, $list);
toggleList(false);

document.querySelector("body").addEventListener("click", (e) => {
  if (!$list.contains(e.target)) {
    toggleList(false);
  }
});

function toggleList(state) {
  $list.style.display = state ? "block" : "none";
}

function createListHTML(data, selector) {
  const types = new Set([]);
  data.forEach((d) => types.add(d.type));
  selector.innerHTML = [...types]
    .map(
      (t) =>
        `<div>
        <div class="group-title">${t}</div>
        ${data
          .filter((d) => d.type === t)
          .map((d) => `<div>${d.description}</div>`)
          .join("")}
    </div>`
    )
    .join("");
}
