import createElement from "../utilities/create-element";

export default function loadAbout() {
    const content = document.querySelector(".content");
    const main = createElement("div", content, "main", "");
    main.classList.add("about");

    const address = createElement("div", main, "", "");
    const times = createElement("div", main, "", "");
    const email = createElement("div", main, "", "");
    const phone = createElement("div", main, "", "");

    const addressIcon = createElement("img", address, "", "");
    const timesIcon = createElement("img", times, "", "");
    const emailIcon = createElement("img", email, "", "");
    const phoneIcon = createElement("img", phone, "", "");

    addressIcon.src = "./imgs/geo.svg";
    timesIcon.src = "./imgs/clock.svg";
    emailIcon.src = "./imgs/mail.svg";
    phoneIcon.src = "./imgs/phone.svg";

    createElement("p", address, "", "640 Shaw Ave, Clovis, CA 93612");
    createElement("p", times, "", "7am - 9pm");
    createElement("p", email, "", "realemail@notfake.com");
    createElement("p", phone, "", "(012)-345-6789");

    const map = createElement("img", main, "", "");
    map.src = "./imgs/map.png";
}