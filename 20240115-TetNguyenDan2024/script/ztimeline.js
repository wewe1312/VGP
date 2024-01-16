//ztimeline.js
const timelinebar = document.querySelectorAll(".timeline-bar");
for (let i = 0; i < timelinebar.length; i++) {
  let w = timelinebar[i].dataset.percent;
  timelinebar[i].style.width = w;
}

const timelinegift = document.querySelectorAll(".timeline-gifts");
for (let i = 0; i < timelinegift.length; i++) {
  let w = timelinegift[i].dataset.active;
  let z = (parseInt(w.charAt(0)) / parseInt(w.charAt(2))) * 100 + "%";
  console.log(z);
  timelinegift[i].style.width = z;
}
