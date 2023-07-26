import createElement from "../utilities/create-element.js";

export default function loadFooter() {
    const content = document.querySelector(".content");
    const footer = createElement("footer", content, "", "");
    createElement("p", footer, "", "Copyright © 2023 cphung913")
}