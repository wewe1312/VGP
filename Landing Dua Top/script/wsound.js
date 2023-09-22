var teaseraudio = new Audio("./sound/bgmusic.mp3");
//teaseraudio.play();
teaseraudio.loop = true;
teaseraudio.volume = 0.5;

//sound
var soundbtn = document.getElementById("soundbtn");

soundbtn.addEventListener("click", function () {
  //alert(1);
  this.classList.toggle("opacity-50");
  if (!teaseraudio.paused) {
    teaseraudio.pause();
  } else if (teaseraudio.paused) {
    teaseraudio.play();
  }
});
