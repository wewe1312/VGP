import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".block-doiqua", {
  slidesPerView: 2.5,
  grid: { fill: "row", rows: 2 },
  autoplay: {
    delay: 5000,
  },
  loop: false,
  spaceBetween: 5,
  breakpoints: {
    1024: {
      slidesPerView: 5,
      grid: { fill: "row", rows: 1 },
      navigation: {
        nextEl: ".arrow-button-next",
        prevEl: ".arrow-button-prev",
      },
    },
  },
});

const swiper2 = new Swiper(".block-submit", {
  slidesPerView: 1.2,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: ["-30%", 0, -50],
      scale: 0.9,
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ["30%", 0, -50],
      scale: 0.9,
    },
  },
  breakpoints: {
    1024: {
      slidesPerView: 1.5,
    },
  },
});
