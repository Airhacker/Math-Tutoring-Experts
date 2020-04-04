// Burger Menu Functionality

const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = document.querySelectorAll(".menu");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    if (window.innerWidth < 1200) {
      nav.classList.toggle("nav-open");
      burger.classList.toggle("toggle");
    }
  });
});

// Space Animation

gsap.fromTo(
  "#space-ship",
  {
    x: -200,
    y: 100
  },
  {
    x: 450,
    y: -325,

    duration: 10,
    repeat: -1,
    ease: "linear"
  }
);

// Googles Maps Integration

let map;
let tutorLocation = { lat: 29.63463, lng: -95.61875 };

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: tutorLocation,
    zoom: 15
  });

  let marker = new google.maps.Marker({ position: tutorLocation, map: map });
}
