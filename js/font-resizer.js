$(document).ready(function () {
  let fontsize = 16;
  $("#increase").on("click", function () {
    if (fontsize < 50) {
      $(".error").empty();
      fontsize += 6;
      $(".content").animate({ "font-size": fontsize + "px" });
    } else {
      $(".error").text("You have reached the maximum value");
    }
  });
  $("#decrease").on("click", function () {
    if (fontsize > 10) {
      $(".error").empty();
      fontsize -= 3;
      $(".content").animate({ "font-size": fontsize + "px" });
    } else {
      $(".error").text("You have reached the minimum value");
    }
  });
});
