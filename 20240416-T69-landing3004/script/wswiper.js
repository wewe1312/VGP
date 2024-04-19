import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".item-slider", {
  slidesPerView: 1,
  grid: {
    fill: "row",
    rows: 3,
  },
  loop: false,
  spaceBetween: 20,
  watchSlidesProgress: true,
  pagination: {
    el: ".swiper-pagination",
  },

  breakpoints: {
    1024: {
      grid: {
        fill: "row",
        rows: 2,
      },
    },
  },
});
