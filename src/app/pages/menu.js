import createElement from "../utilities/create-element";

export default function loadMenu() {
    const content = document.querySelector(".content");
    createElement("div", content, "main", "");
}