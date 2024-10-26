//btn-closet
const btncloset = document.querySelector("#btn-closet");
const blkcloset = document.querySelector("#side-login");
const blkingame = document.querySelector("#side-ingame");
btncloset.addEventListener("click", function () {
  blkcloset.classList.toggle("active");
  blkingame.classList.toggle("active");
});

function openReg() {
  //   alert(123);
  $("#block-dangnhap").toggleClass("active");
  $("#block-dangky").toggleClass("active");
}
