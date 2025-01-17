function showCanvas() {
  let canvas = document.getElementById("canvas");
  canvas.classList.add("show");
  canvas.classList.remove("hide");
  document.getElementsByTagName("body")[0].classList.toggle("overflow-hidden");
  //click to hide
  canvas.addEventListener("click", function () {
    this.classList.remove("show");
    document
      .getElementsByTagName("body")[0]
      .classList.remove("overflow-hidden");
  });
  //on transition end
  canvas.addEventListener("transitionend", () => {
    if (!canvas.classList.contains("show")) canvas.classList.add("hide");
  });
  //click inside not hide
  document
    .getElementById("canvas-inside")
    .addEventListener("click", function () {
      event.stopPropagation();
    });
}
function hideCanvas() {
  let canvas = document.getElementById("canvas");
  canvas.classList.remove("show");

  document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
}
