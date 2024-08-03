import { dummy } from "./data.js";

createListHTML(dummy, document.querySelector("#list"));

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
