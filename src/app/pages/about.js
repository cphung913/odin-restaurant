import createElement from "../utilities/create-element";

export default function loadAbout() {
    const content = document.querySelector(".content");
    createElement("div", content, "main", "");
}