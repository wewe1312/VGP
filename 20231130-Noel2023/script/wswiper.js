import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".character-slide", {
  slidesPerView: 1,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  spaceBetween: 10,
  watchSlidesProgress: true,
});
