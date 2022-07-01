import Swiper from "https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js";

const swiper = new Swiper(".block-doiqua", {
  slidesPerView: 2,
  slidesPerGroup: 2,
  grid: {
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
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  },
});

// const swiperboss = new Swiper(".swiper-boss", {
//   slidesPerView: 1,
//   loop: true,
//   pagination: {
//     el: ".pag-boss",
//     dynamicBullets: true,
//   },
// });

// const swiper_nav = document.getElementById("swiper01-nav");
// const swiper_bullets = swiper_nav.getElementsByClassName("bullet");
// var current_bullet = swiper_bullets[0];
// current_bullet.classList.add("active");
// for (let i = 0; i < swiper_bullets.length; i++) {
//   swiper_bullets[i].addEventListener("click", function () {
//     let index = this.dataset.swiper;
//     swiper.slideTo(index);
//   });
// }

// swiper.on("slideChange", function () {
//   let x = swiper.activeIndex - 1;
//   if (swiper.activeIndex > swiper_bullets.length) {
//     x = 0;
//   }
//   if (swiper.activeIndex <= 0) {
//     x = swiper_bullets.length - 1;
//   }
//   //console.log(x);
//   //console.log(swiper.activeIndex);
//   current_bullet.classList.remove("active");
//   swiper_bullets[x].classList.add("active");
//   current_bullet = swiper_bullets[x];
// });
