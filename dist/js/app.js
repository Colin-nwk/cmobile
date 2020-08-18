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
(() => {
  //date
  let year = new Date().getFullYear();
  let dateDisplay = document.querySelector(".date");
  dateDisplay.innerHTML = year;
  // animate logo
  setInterval(() => {
    let globe = document.getElementById("globe");
    globe.innerHTML = "&#xf57c;";
    setTimeout(() => {
      globe.innerHTML = "&#xf57d;";
    }, 1000);
    setTimeout(() => {
      globe.innerHTML = "&#xf57e;";
    }, 2000);
    // setTimeout(() => {
    //   globe.innerHTML = "&#xf7a2;";
    // }, 3000);
  }, 3000);
})();

//section observers
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide-in");
const appearOptions = {
  threshold: 0,
  rootMargin: "0px 0px -150px 0px",
};
const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
