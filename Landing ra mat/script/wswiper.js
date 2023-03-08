import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".block-character", {
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
  },
  loop: true,
  spaceBetween: 0,
  pagination: {
    el: ".char-pagination",
    clickable: true,
    currentClass: "active",
    renderBullet: function (index, className) {
      return (
        '<span class="aspect-square ' +
        className +
        '">' +
        (index + 1) +
        "</span>"
      );
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
