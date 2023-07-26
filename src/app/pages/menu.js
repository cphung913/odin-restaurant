import createElement from "../utilities/create-element";

export default function loadMenu() {
    const content = document.querySelector(".content");
    const main = createElement("div", content, "main", "");
    main.classList.add("menu");
    const items = [
        ["Cheerios", "A cozy, family-friendly eatery serving up wholesome comfort food and a delightful selection of cereals to brighten your day.", "/cheerios.png"],
        ["Lucky Charms", "A whimsical and enchanting dining experience where you can savor a magical blend of delicious dishes and discover the charm of childhood favorites.", "/lucky-charms.png"], 
        ["Frosted Flakes", "A sweet haven of crunchy delights, offering a tantalizing array of frosty-coated cereals and breakfast treats to kickstart your morning with a smile.", "/frosted-flakes.png"],
        ["Froot Loops", "Step into a colorful and playful cereal haven, where you can indulge in a bowlful of fruity loops and experience a burst of joy in every bite.", "/froot-loops.png"],
        ["Cocoa Puffs", "Dive into a cocoa-infused wonderland, where chocolate dreams come true, and enjoy a delightful array of chocolatey cereals that will leave you craving for more.", "/cocoa-puffs.png"],
        ["Fruity Pebbles", "Embark on a rainbow adventure at our vibrant eatery, where you can savor a kaleidoscope of fruity flavors in every spoonful of our playful and colorful cereal delights.", "/fruity-pebbles.png"]
    ];

    items.forEach(x => {
        const container = createElement("div", main, "container", "");
        const image = createElement("img", container, "", "");
        image.src = "./imgs" + x[2];
        createElement("h2", container, "", x[0]);
        createElement("p", container, "", x[1]);
    })
}