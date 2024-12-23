//roulette animate script require jquery.min
// v1.0

var minigameStart = false;
function rouletteStart(target) {
  var elementClass = ".block__roulette .item";
  var elementMax = 10;

  var speed = 1;
  var rouletteStopAt = target;
  // Returns a random integer from 0 to 9:
  var randomSeed = Math.floor(Math.random() * 10);

  var loopCount = 5 + randomSeed;

  console.log(minigameStart);

  if (minigameStart) {
    return;
  }
  minigameStart = true;

  function roulette() {
    for (let i = 1; i <= elementMax + 1; i++) {
      let elID = rouletteStopAt + i;
      if (elID > elementMax) {
        elID = elID - elementMax - 1;
      }

      //   console.log(elID + "__" + i);

      $(elementClass + ":nth-child(" + (elID + 1) + ")")
        .stop()
        .delay((i * 50) / speed)
        .queue(function (addActive) {
          $(this)
            .addClass("active")
            .delay(100 / speed)
            .queue(function (removeActive) {
              $(this).removeClass("active");
              removeActive();
            });
          addActive();
        });
    }
  }

  //loop
  for (let i = 0; i < loopCount; i++) {
    setTimeout(function () {
      roulette();
    }, (50 * elementMax * i) / speed);
  }

  //END
  setTimeout(function () {
    console.log(target);
    minigameStart = false;
  }, ((50 * elementMax) / speed) * loopCount);

  //   function minigameAnimate() {
  //     for (let i = 0; i < minigameArray.length; i++) {
  //       $(elementClass + ":nth-child(" + String(minigameArray[i]) + ")")
  //         .stop()
  //         .delay((i * 50) / speed)
  //         .queue(function (next) {
  //           $(this)
  //             .addClass("active")
  //             .delay(100 / speed)
  //             .queue(function (next2) {
  //               $(this).removeClass("active");
  //               next2();
  //             });
  //           next();
  //           console.log(i);
  //           if (i >= elementMax) {
  //             minigameStart = false;
  //             console.log(minigameStart);
  //             // minigameAnimate(1);
  //           }
  //         });
  //     }
  //   }
}
