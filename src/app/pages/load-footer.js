import createElement from "../utilities/create-element.js";

export default function loadFooter() {
    const content = document.querySelector(".content");
    createElement("footer", content, "", "");
}