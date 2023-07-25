import createElement from "../utilities/create-element";

export default function loadHome() {
    const content = document.querySelector(".content");
    createElement("div", content, "main", "");
}