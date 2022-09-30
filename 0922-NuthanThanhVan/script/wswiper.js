import Swiper from "https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".block-gal", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  grid: {
    fill: "row",
    rows: 2,
  },
  spaceBetween: 10,
  pagination: {
    el: ".gal-pagination",
    clickable: true,
    currentClass: "active",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});

const swiper2 = new Swiper(".block-doiqua", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  grid: {
    fill: "row",
    rows: 2,
  },
  spaceBetween: 10,
  pagination: {
    el: ".doiqua-pagination",
    clickable: true,
    currentClass: "active",
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
  breakpoints: {
    1024: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
  },
});
