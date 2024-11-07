// v1.0.1

const myBody = document.getElementsByTagName("BODY")[0];
const allmodal = document.querySelectorAll(".wmodal");
const btnwmodal = document.querySelectorAll("[data-toggle='modal']");
for (let i = 0; i < btnwmodal.length; i++) {
  btnwmodal[i].addEventListener("click", function () {
    let target = this.dataset.target;
    const target_el = document.getElementById(target);
    target_el.classList.add("show");
    myBody.classList.add("overflow-hidden");
    target_el.addEventListener("click", function () {
      if (target_el.classList.contains("out-click-hide")) {
        myBody.classList.remove("overflow-hidden");
        this.classList.remove("show");
      }
    });
  });
}

//button close
const btnclose = document.querySelectorAll("[data-dismiss='modal']");
for (let i = 0; i < btnclose.length; i++) {
  btnclose[i].addEventListener("click", function () {
    let target_el = this.closest(".wmodal.show");
    target_el.classList.remove("show");
    myBody.classList.remove("overflow-hidden");
  });
}

var wmodaldialog = document.getElementsByClassName("wmodal-dialog");
var i;
for (i = 0; i < wmodaldialog.length; i++) {
  wmodaldialog[i].addEventListener("click", function () {
    event.stopPropagation();
  });
}
var wmodalcontent = document.getElementsByClassName("wmodal-content");
var i;
for (i = 0; i < wmodalcontent.length; i++) {
  wmodalcontent[i].addEventListener("click", function () {
    event.stopPropagation();
  });
}

// modal youtube
const modalyoutube = document.getElementById("modal-youtube");
const blockyoutube = document.getElementById("w-youtube");
const btnyoutube = document.querySelectorAll("[data-toggle='youtube']");
for (let i = 0; i < btnyoutube.length; i++) {
  btnyoutube[i].addEventListener("click", function () {
    let target = this.dataset.target;

    blockyoutube.src = target;
    // alert(target);
    modalyoutube.classList.add("show");
    myBody.classList.add("overflow-hidden");

    modalyoutube.addEventListener("click", function () {
      this.classList.remove("show");
      myBody.classList.remove("overflow-hidden");
      blockyoutube.src = "";
    });
  });
}

//OFFCANVAS
const btnoffcanvas = document.querySelectorAll("[data-toggle='offcanvas']");
for (let i = 0; i < btnoffcanvas.length; i++) {
  btnoffcanvas[i].addEventListener("click", function () {
    let target = this.dataset.target;
    let target_el = document.getElementById(target);

    target_el.classList.add("show");
    myBody.classList.add("overflow-hidden");

    target_el.addEventListener("click", function () {
      this.classList.remove("show");
      myBody.classList.remove("overflow-hidden");
    });
  });
}
var offcanvascontent = document.getElementsByClassName("offcanvas-content");
var i;
for (i = 0; i < offcanvascontent.length; i++) {
  offcanvascontent[i].addEventListener("click", function () {
    event.stopPropagation();
  });
}

//Scroll to Element
var wscroll = document.querySelectorAll("[data-toggle='scroll']");
var i;
for (i = 0; i < wscroll.length; i++) {
  wscroll[i].addEventListener("click", function (e) {
    let tar = this.getAttribute("href").replace("#", "");
    console.log("scroll to " + tar);
    e.preventDefault();
    document.getElementById(tar).scrollIntoView({
      behavior: "smooth",
    });
  });
}

// float
const btnmini = document.querySelectorAll("[data-toggle='minimize']");
for (let i = 0; i < btnmini.length; i++) {
  btnmini[i].addEventListener("click", function () {
    let target = this.dataset.target;
    let target_el = this.closest(target);
    console.log(target_el);
    target_el.classList.toggle("minimize");
  });
}

// wrap
const wrapp = document.querySelectorAll("[data-toggle='wrap']");
for (let i = 0; i < wrapp.length; i++) {
  if (window.innerWidth <= 1024) {
    let x = wrapp[i].dataset.wrap;
    wrapp[i].style.overflow = "hidden";
    wrapp[i].querySelector(".content").style.height = x;
    wrapp[i].innerHTML += "<button class='wrappseemoah'>Xem Thêm</button>";
  } else {
    wrapp[i].classList.remove("active");
  }
}

//button switch
const btnswitch = document.querySelectorAll("[data-toggle='switch']");
for (let i = 0; i < btnswitch.length; i++) {
  btnswitch[i].addEventListener("click", function () {
    let target_el = this.querySelectorAll("img");
    for (let e = 0; e < target_el.length; e++) {
      target_el[e].classList.toggle("whidden");
    }
  });
}

// active
const active = document.querySelectorAll("[data-toggle='show']");
for (let i = 0; i < active.length; i++) {
  active[i].addEventListener("click", function () {
    let x = active[i].dataset.target;
    document.getElementById(x).classList.remove("whidden");
  });
}
//button close
const btndismiss = document.querySelectorAll("[data-dismiss='show']");
for (let i = 0; i < btndismiss.length; i++) {
  btndismiss[i].addEventListener("click", function () {
    let target_el = this.parentElement;
    target_el.classList.add("whidden");
    // myBody.classList.remove("overflow-hidden");
  });
}

const btnseemoah = document.getElementsByClassName("wrappseemoah");
for (let i = 0; i < btnseemoah.length; i++) {
  btnseemoah[i].addEventListener("click", function () {
    let wrapp = btnseemoah[i].closest(".wrapp");
    wrapp.classList.toggle("active");
    wrapp.querySelector(".content").style.height = "auto";
  });
}
