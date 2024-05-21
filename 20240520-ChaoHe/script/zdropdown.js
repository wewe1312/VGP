const zdrop = document.querySelectorAll("[data-toggle='dropdown']");
for (let i = 0; i < zdrop.length; i++) {
  zdrop[i].addEventListener("click", function () {
    let target = this.dataset.target;
    const target_el = document.getElementById(target);
    target_el.classList.add("active");
  });
}

//button close
const btnclosed = document.querySelectorAll("[data-dismiss='dropdown']");
for (let i = 0; i < btnclosed.length; i++) {
  btnclosed[i].addEventListener("click", function () {
    let target_el = this.closest(".zdropdown");
    target_el.classList.remove("active");
  });
}
