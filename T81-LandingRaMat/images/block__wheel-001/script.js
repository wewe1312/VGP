//jquery fortune
var prices = [
  {
    name: "1",
  },
  {
    name: "2",
  },
  {
    name: "3",
  },
  {
    name: "4",
  },
  {
    name: "5",
  },
  {
    name: "6",
  },
  {
    name: "7",
  },
  {
    name: "10",
  },
];

$(function () {
  var $r = $(".wheel").fortune(prices);

  var clickHandler = function () {
    $(".wheel-button-small button").off("click");
    $r.spin().done(function (price) {
      $(".wheel-button-small button").on("click", clickHandler);
    });
  };

  $(".wheel-button-small button").on("click", clickHandler);
});
