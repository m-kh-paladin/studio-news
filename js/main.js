$(document).ready(function () {
  $(".fa-bars").click(function () {
    $(".bar-details").toggle("slow");
  });
  $(".first").click(function () {
    $(".search").toggle("slow");
  });
  $(".home-icon").click(function () {
    $(".home-details").toggle("slow");
  });
  $(".political-icon").click(function () {
    $(".political-details").toggle("slow");
  });
  $(".religious-icon").click(function () {
    $(".religious-details").toggle("slow");
  });
  $(".sport-icon").click(function () {
    $(".sport-details").toggle("slow");
  });

  $(".day").click(function () {
    $(".first").css({ display: "block" });
    $(".secoond").css({ display: "none" });
    $(".threid").css({ display: "none" });
  });
  $(".week").click(function () {
    $(".first").css({ display: "none" });
    $(".secoond").css({ display: "block" });
    $(".threid").css({ display: "none" });
  });
  $(".month").click(function () {
    $(".first").css({ display: "none" });
    $(".secoond").css({ display: "none" });
    $(".threid").css({ display: "block" });
  });
  $(".minus").click(function () {
    var fontSize = parseInt($(".echo-lead").css("font-size"));
    fontSize = fontSize - 1 + "px";
    $(".echo-lead").css({ "font-size": fontSize });
  });
  $(".plus").click(function () {
    var fontSize = parseInt($(".echo-lead").css("font-size"));
    fontSize = fontSize + 1 + "px";
    $(".echo-lead").css({ "font-size": fontSize });
  });
});
