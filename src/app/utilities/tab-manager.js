import removeContent from "./remove-content";
import loadHome from "../pages/home";
import loadAbout from "../pages/about";
import loadMenu from "../pages/menu";
import loadFooter from "../pages/load-footer";

let currentTab = "home";

export default function switchTab(e) {
    const tab = e.target.textContent.toLowerCase();
    if (tab == currentTab) return;
    Array.from(document.querySelectorAll(".tab")).forEach(x => x.classList.remove("active"));
    currentTab = tab;
    e.target.classList.add("active");
    removeContent(document.querySelector(".main"), document.querySelector(".content"));
    removeContent(document.querySelector("footer"), document.querySelector(".content"));
    switch (currentTab) {
        case "home":
            loadHome();
            break;
        case "menu":
            loadMenu();
            break;
        case "about":
            loadAbout();
            break;
    }
    loadFooter();
}