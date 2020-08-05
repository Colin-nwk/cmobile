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
// fading animation controller

/*
const faders = document.querySelectorAll(".fade-in");
const appearOptions = {
  threshold: 1,
  rootMargin: "0px 0px -200px 0px",
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
*/

let spinnerWrapper = document.querySelector(".spinner-wrapper");
const load = () => {
  document.addEventListener("onload", () => {
    // spinnerWrapper.style.display = "none";
    spinnerWrapper.parentElement.removeChild(spinnerWrapper);
  });
};
load();
