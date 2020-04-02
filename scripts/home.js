// Burger Menu Functionality

const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = document.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});

// GSAP Animation for student

// Head Animation

// GSAP Animation for Space
