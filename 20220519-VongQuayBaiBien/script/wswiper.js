import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".block-character", {
  slidesPerView: 1,
  initialSlide: "1",
  //loop: true,
});
const swiper2 = new Swiper(".list-block-character-navigation", {
  slidesPerView: 3,
  //loop: true,
  spaceBetween: 0,
  centeredSlides: true,
  slideToClickedSlide: true,
  navigation: {
    nextEl: ".block-character-navigation .btn-arrow.next",
    prevEl: ".block-character-navigation .btn-arrow.prev",
  },
  //set active slide
  initialSlide: "1",
  controller: {
    by: "slide",
    control: swiper,
  },
});

swiper.controller.control = swiper2;

const swiper3 = new Swiper(".slider-banner", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  //loop: true,
  slidesPerView: 1,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 600,
    modifier: 2,
  },
  spaceBetween: 10,
  initialSlide: "2",
  pagination: {
    el: ".slide-banner-pagination",
    type: "bullets",
  },
  navigation: {
    nextEl: ".btn-arrow-red.next",
    prevEl: ".btn-arrow-red.prev",
  },
  breakpoints: {
    // when window width is >= 960px
    960: { slidesPerView: 3, spaceBetween: "-50%" },
  },
});
