import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".newsboard", {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  spaceBetween: 0,
  watchSlidesProgress: true,
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
});
