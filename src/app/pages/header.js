import createElement from "../utilities/create-element.js";
import switchTab from "../utilities/tab-manager.js";

export default function loadHeader() {
    const content = document.querySelector(".content");
    const header = createElement("header", content, "", "");
    createElement("h1", header, "", "Tony's Cereal");
    const tabsDiv = createElement("div", header, "tabs", "");
    const tabsUl = createElement("ul", tabsDiv, "", "");
    const homeTab = createElement("li", tabsUl, "tab", "Home", ["click", switchTab]);
    createElement("li", tabsUl, "tab", "Menu", ["click", switchTab]);
    createElement("li", tabsUl, "tab", "About", ["click", switchTab]);
    homeTab.classList.add("active");
}