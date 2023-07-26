(()=>{"use strict";function e(e,o,t,n,a){const c=document.createElement(e);return""!=n&&(c.textContent=n),""!=t&&c.classList.add(t),a&&c.addEventListener(a[0],a[1]),o.appendChild(c),c}function o(){const o=e("div",document.querySelector(".content"),"main","");o.classList.add("home"),e("p",o,"","3rd Best Cereal In Your House"),e("p",o,"","Since 9:30 am Yesterday"),e("img",o,"","").src="./imgs/profile.png",e("p",o,"","Come To Our House or We'll Come To Yours")}function t(){const o=e("footer",document.querySelector(".content"),"","");e("p",o,"","Copyright © 2023 cphung913")}function n(e,o){o.removeChild(e)}let a="home";function c(c){const r=c.target.textContent.toLowerCase();if(r!=a){switch(Array.from(document.querySelectorAll(".tab")).forEach((e=>e.classList.remove("active"))),a=r,c.target.classList.add("active"),n(document.querySelector(".main"),document.querySelector(".content")),n(document.querySelector("footer"),document.querySelector(".content")),a){case"home":o();break;case"menu":!function(){const o=e("div",document.querySelector(".content"),"main","");o.classList.add("menu"),[["Cheerios","A cozy, family-friendly eatery serving up wholesome comfort food and a delightful selection of cereals to brighten your day.","/cheerios.png"],["Lucky Charms","A whimsical and enchanting dining experience where you can savor a magical blend of delicious dishes and discover the charm of childhood favorites.","/lucky-charms.png"],["Frosted Flakes","A sweet haven of crunchy delights, offering a tantalizing array of frosty-coated cereals and breakfast treats to kickstart your morning with a smile.","/frosted-flakes.png"],["Froot Loops","Step into a colorful and playful cereal haven, where you can indulge in a bowlful of fruity loops and experience a burst of joy in every bite.","/froot-loops.png"],["Cocoa Puffs","Dive into a cocoa-infused wonderland, where chocolate dreams come true, and enjoy a delightful array of chocolatey cereals that will leave you craving for more.","/cocoa-puffs.png"],["Fruity Pebbles","Embark on a rainbow adventure at our vibrant eatery, where you can savor a kaleidoscope of fruity flavors in every spoonful of our playful and colorful cereal delights.","/fruity-pebbles.png"]].forEach((t=>{const n=e("div",o,"container","");e("img",n,"","").src="./imgs"+t[2],e("h2",n,"",t[0]),e("p",n,"",t[1])}))}();break;case"about":!function(){const o=e("div",document.querySelector(".content"),"main","");o.classList.add("about");const t=e("div",o,"",""),n=e("div",o,"",""),a=e("div",o,"",""),c=e("div",o,"",""),r=e("img",t,"",""),i=e("img",n,"",""),s=e("img",a,"",""),l=e("img",c,"","");r.src="./imgs/geo.svg",i.src="./imgs/clock.svg",s.src="./imgs/mail.svg",l.src="./imgs/phone.svg",e("p",t,"","640 Shaw Ave, Clovis, CA 93612"),e("p",n,"","7am - 9pm"),e("p",a,"","realemail@notfake.com"),e("p",c,"","(012)-345-6789"),e("img",o,"","").src="./imgs/map.png"}()}t()}}!function(){const o=e("header",document.querySelector(".content"),"","");e("h1",o,"","Tony's Cereal");const t=e("div",o,"tabs",""),n=e("ul",t,"",""),a=e("li",n,"tab","Home",["click",c]);e("li",n,"tab","Menu",["click",c]),e("li",n,"tab","About",["click",c]),a.classList.add("active")}(),o(),t(),e("img",document.querySelector(".content"),"background","").src="./imgs/background.jpg"})();