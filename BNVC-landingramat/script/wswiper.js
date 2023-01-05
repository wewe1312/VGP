import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".block-character", {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  spaceBetween: 10,
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
  effect: "creative",
  creativeEffect: {
    prev: {
      // will set `translateZ(-400px)` on previous slides
      translate: ["-50%", 0, -100],
      scale: 0.69,
      opacity: 0,
    },
    next: {
      // will set `translateX(100%)` on next slides
      translate: ["50%", 0, -100],
      scale: 0.69,
      opacity: 0,
    },
  },
});

const swiper2 = new Swiper(".feature-slide", {
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
