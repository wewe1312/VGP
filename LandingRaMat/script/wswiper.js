import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".character-slide", {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  spaceBetween: 10,
  watchSlidesProgress: true,
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
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});