//witem v1.0
function setWidthitem() {
  const el = document.querySelectorAll(".witem");
  for (let i = 0; i < el.length; i++) {
    el[i].style.fontSize = el[i].clientWidth / 6 + "px";
  }
}
setWidthitem();
