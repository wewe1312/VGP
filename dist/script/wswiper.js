import Swiper from "https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".shop-swiper", {
  slidesPerView: 1,
  autoplay: false,
  loop: false,
  pagination: {
    el: ".swiper-pag",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
