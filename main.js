let btnHamburger = document.querySelector(".hamburger-menu");
let barre = document.querySelector(".fa-bars");
let crossClose = document.querySelector(".fa-times"); 

barre.addEventListener("click",

    function() {
        btnHamburger.classList.add("active");
    }

); 


crossClose.addEventListener("click",

    function() {
        btnHamburger.classList.remove("active");
    }

); 

console.log(btnHamburger, barre, crossClose);

