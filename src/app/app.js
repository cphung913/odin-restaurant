import loadHome from "./pages/home.js";
import loadFooter from "./pages/footer.js";
import loadHeader from "./pages/header.js";
import createElement from "./utilities/create-element.js";

export default function loadPage() {
    loadHeader();
    loadHome();
    loadFooter();
    const background = createElement("img", document.querySelector(".content"), "background", "");
    background.src = "./imgs/background.jpg";
}

