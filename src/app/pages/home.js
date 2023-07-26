import createElement from "../utilities/create-element";

export default function loadHome() {
    const content = document.querySelector(".content");
    const main = createElement("div", content, "main", "");
    main.classList.add("home");
    createElement("p", main, "", "3rd Best Cereal In Your House");
    createElement("p", main, "", "Since 9:30 am Yesterday");
    const profile = createElement("img", main, "", "");
    profile.src = "./imgs/profile.png";
    createElement("p", main, "", "Come To Our House or We'll Come To Yours");
}