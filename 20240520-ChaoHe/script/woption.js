const wselects = document.querySelectorAll("[data-toggle='select']");
for (let i = 0; i < wselects.length; i++) {
  wselects[i].addEventListener("click", function () {
    let target = this.dataset.target;
    const target_el = document.getElementById(target);
    console.log(target_el);
    target_el.innerHTML = "";
    target_el.innerHTML = '<div class="wselect">' + this.innerHTML + "</div>";
  });
}
