import { dummy } from "./data.js";

class ListManager {
  constructor() {
    this.input = document.querySelector(".input");
    this.listContainer = document.querySelector(".list-container");
    this.lists = {
      COMPANY: document.querySelector(".company"),
      PEOPLE: document.querySelector(".people"),
      JOB: document.querySelector(".job"),
    };
    this.data = this.groupDataByType(dummy);
    this.init();
  }

  groupDataByType(data) {
    return data.reduce((acc, item) => {
      const type = item.type;
      if (!acc[type]) acc[type] = [];
      acc[type].push(item);
      return acc;
    }, {});
  }

  init() {
    this.renderLists();
    this.input.addEventListener("input", () => setTimeout(() => this.handleSearch(), 700));
  }

  renderLists(searchTerm = "") {
    Object.entries(this.lists).forEach(([type, list]) => {
      list.innerHTML = "";

      const subTitle = document.createElement("li");
      subTitle.className = "sub";
      subTitle.textContent = type;
      list.appendChild(subTitle);

      const items = this.data[type] || [];
      const fragment = document.createDocumentFragment();
      items.forEach((item) => {
        const li = document.createElement("li");
        li.innerHTML = this.highlight(item.description, searchTerm);
        fragment.appendChild(li);
      });
      list.appendChild(fragment);
    });
  }

  highlight(text, searchTerm) {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, "gi");
    return text.replace(regex, `<strong>$1</strong>`);
  }

  handleSearch() {
    const searchTerm = this.input.value.toLowerCase();

    if (searchTerm) {
      this.listContainer.style.display = "block";
      this.renderLists(searchTerm);
    } else {
      this.listContainer.style.display = "none";
    }
  }
}

new ListManager();
