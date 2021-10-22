let btnHamburger = document.querySelector(".hamburger-menu");
let barre = document.querySelector(".fa-bars");
let crossClose = document.querySelector(".fa-times");
btnHamburger.className = btnHamburger.classList + " active ";

barre = document.addEventListener("click",

    function() {
        btnHamburger.style.display = "block";
    }

); 


// crossClose = document.addEventListener("click",

//     function() {
//         btnHamburger.style.display = "none";
//     }

// ); 

console.log(btnHamburger, barre, crossClose);

