const heading = "a Frontend Developer";
const fullHeading = document.querySelector(".typing");
let i = 0;

console.log(heading.length);

const typing = () => {
  if (i < heading.length) {
    fullHeading.innerHTML += heading.charAt(i);
    i++;

    setTimeout(typing, 150);
  }
};
typing();

let spinnerWrapper = document.querySelector(".spinner-wrapper");
const load = () => {
  document.addEventListener("onload", () => {
    // spinnerWrapper.style.display = "none";
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
  });
};
load();

// mobile menu
//using IIFE
(function () {
  const navbarBg = document.querySelector(".navbar");
  const toggler = document.querySelector(".navbar-toggler");
  const navbar = document.querySelector(".nav-list");
  const navbarItems = document.querySelectorAll(".nav-items");
  const lines = document.querySelectorAll(".line");

  toggler.addEventListener("click", () => {
    // toggle nav
    navbar.classList.toggle("active");
    // animate items
    navbarItems.forEach((item, index) => {
      if (item.style.animation) {
        item.style.animation = "";
        navbarBg.style.background = "";

        // toggle nav
      } else {
        navbarBg.style.cssText =
          "background: #1e836c; slide-navbar-fade 0.5s ease forwards .3s";

        item.style.animation = `slide-navbar-fade 0.5s ease forwards ${
          index / 7 + 0.3
        }s`;
      }
    });
    //toggler animation
    toggler.classList.toggle("line-toggle");
  });
})();
//date
(() => {
  let year = new Date().getFullYear();
  let dateDisplay = document.querySelector(".date");
  dateDisplay.innerHTML = year;
})();
