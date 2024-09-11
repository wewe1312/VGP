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

const swiperThumb = new Swiper(".character-thumb-slide", {
  slidesPerView: 3,
  spaceBetween: 0,
  // freeMode: true,
  // watchSlidesProgress: true,
});
const swiper2 = new Swiper(".character-slide", {
  slidesPerView: 1,
  centeredSlides: true,
  effect: "creative",
  creativeEffect: {
    prev: {
      translate: ["-5%", "-5%", "10%"],
      opacity: 0,
    },
    next: {
      translate: ["5%", "0%", 0],
      opacity: 0,
    },
  },
  // autoplay: {
  //   delay: 5000,
  // },
  loop: true,
  thumbs: {
    swiper: swiperThumb,
  },
});

// const swiper3 = new Swiper(".feature-slide", {
//   slidesPerView: 1.6,
//   centeredSlides: true,
//   effect: "creative",
//   creativeEffect: {
//     prev: {
//       translate: ["-40%", 0, 0],
//       scale: 0.8,
//       opacity: 1,
//     },
//     next: {
//       translate: ["40%", 0, 0],
//       scale: 0.8,
//       opacity: 1,
//     },
//   },
//   autoplay: {
//     delay: 5000,
//   },
//   loop: true,
//   navigation: {
//     nextEl: ".button-next",
//     prevEl: ".button-prev",
//   },
// });
