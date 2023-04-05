const loopel = document.querySelectorAll("[data-toggle='loop']");
for (let i = 0; i < loopel.length; i++) {
  let y = loopel[i].dataset.loop;
  let x = loopel[i].outerHTML;
  let loopparent = loopel[i].parentElement;

  for (let u = 0; u < y - 1; u++) {
    loopparent.innerHTML += x;
  }
}
