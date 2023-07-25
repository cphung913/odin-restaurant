export default function createElement(type, parent, clas, text, event) {
    const element = document.createElement(type);
    if (text != "") element.textContent = text;
    if (clas != "") element.classList.add(clas);
    if (event) element.addEventListener(event[0], event[1]);
    parent.appendChild(element);
    return element;
}