import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".newsboard", {
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  loop: true,
});

const swiper2 = new Swiper(".slide-character", {
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
  effect: "creative",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: ["-30%", 0, -50],
      scale: 0.8,
      opacity: 0,
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ["30%", 0, -50],
      scale: 0.8,
      opacity: 0,
    },
  },
  breakpoints: {
    1024: {
      slidesPerView: 1,
    },
  },
});
