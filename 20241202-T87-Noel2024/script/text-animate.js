const mytext = document.getElementsByClassName("text-animate");
for (let i = 0; i < mytext.length; i++) {
  mytext[i].style.transform = "translateX(100%)";
}
var i = 0;
setInterval(function () {
  mytext[i].animate(
    {
      transform: "translateX(-100%)",
    },
    5000
  );
  i++;
  if (i >= mytext.length) {
    i = 0;
  }
}, 3000);
