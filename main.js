let menuHamburger = document.querySelector(".hamburger-menu");
let barre = document.querySelector(".fa-bars");
let crossClose = document.querySelector(".fa-times"); 

barre.addEventListener("click",

    function() {
        menuHamburger.classList.add("active");
    }

); 

crossClose.addEventListener("click",

    function() {
        menuHamburger.classList.remove("active");
    }

); 

console.log(menuHamburger, barre, crossClose);

