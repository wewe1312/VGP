//Scroll to Element
var wscroll = document.querySelectorAll("[data-toggle='scroll']");
var i;
for (i = 0; i < wscroll.length; i++) {
  wscroll[i].addEventListener("click", function (e) {
    // let tar = this.getAttribute("href").replace("#", "");
    let tar = this.dataset.target;
    console.log("scroll to " + tar);
    e.preventDefault();
    document.getElementById(tar).scrollIntoView({
      behavior: "smooth",
    });
  });
}
