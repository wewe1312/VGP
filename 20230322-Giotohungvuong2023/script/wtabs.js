const wtabs = document.querySelectorAll("[data-toggle='tab']");
for (let i = 0; i < wtabs.length; i++) {
  //get content
  let elements2 = wtabs[i].querySelectorAll(".tabs-content .content");
  console.log(wtabs[i]);
  Array.from(elements2).forEach((el, index) => {});
  // get button
  let elements = wtabs[i].querySelectorAll(".tabs-button button");
  Array.from(elements).forEach((el, index) => {
    el.addEventListener("click", function () {
      let currentbutton = wtabs[i].querySelector(".tabs-button .active");
      let currenttab = wtabs[i].querySelector(".tabs-content .content.active");
      //console.log(currentbutton);
      currentbutton.classList.remove("active");
      currenttab.classList.remove("active");
      this.classList.add("active");
      let target = document.getElementById(this.dataset.target);
      target.classList.add("active");
    });
  });
}
