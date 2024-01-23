import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const swiperThumb = new Swiper(".character-thumb-slide", {
  slidesPerView: 4,
  freeMode: true,
  watchSlidesProgress: true,
});
const swiper = new Swiper(".character-slide", {
  slidesPerView: 1,
  centeredSlides: true,
  autoplay: {
    delay: 5000,
  },
  effect: "fade",
  crossFade: true,
  loop: true,
  thumbs: {
    swiper: swiperThumb,
  },
});
