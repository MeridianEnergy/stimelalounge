/* ==========================================
   STIMELA LOUNGE
   GLOBAL JAVASCRIPT
========================================== */


/* MOBILE NAVIGATION */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");


if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("open");

    });


    mainNav.querySelectorAll("a").forEach(link => {

        link.addEventListener("click", () => {

            mainNav.classList.remove("open");

        });

    });

}


/* CURRENT YEAR */

const currentYear = document.getElementById("currentYear");


if (currentYear) {

    currentYear.textContent =
        new Date().getFullYear();

}


/* HEADER BACKGROUND ON SCROLL */

const header = document.querySelector(".site-header");


window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 80) {

        header.style.background =
            "rgba(5,5,5,0.96)";

        header.style.backdropFilter =
            "blur(12px)";

    } else {

        header.style.background =
            "linear-gradient(to bottom, rgba(0,0,0,0.85), rgba(0,0,0,0))";

        header.style.backdropFilter =
            "none";

    }

});
