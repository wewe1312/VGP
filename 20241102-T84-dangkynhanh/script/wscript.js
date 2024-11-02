console.log("WSCRIPT INNIT");

//add Active class
const cardel = document.querySelectorAll("[data-addclass='active']");
for (let i = 0; i < cardel.length; i++) {
  cardel[i].addEventListener("click", function () {
    this.classList.add("active");
  });
}
