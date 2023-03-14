import Swiper from "https://unpkg.com/swiper@8/swiper-bundle.esm.browser.min.js";
const swiper = new Swiper(".block-character", {
  slidesPerView: 1,
  autoplay: {
    delay: 10000,
  },
  loop: true,
  spaceBetween: 0,
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
});
