$(document).ready(function () {
  $(".box").animate(
    {
      left: "+=700px",
      width: "200px",
      height: "200px",
    },
    1000,
    function () {
      $(this).css("background", "blue");
    }
  );
  $(".box").animate(
    {
      top: "+=400px",
      width: "100px",
      height: "100px",
    },
    1000,
    function () {
      $(this).css("background", "yellow");
    }
  );
  $(".box").animate(
    {
      left: "-=700px",
      width: "200px",
      height: "200px",
    },
    1000,
    function () {
      $(this).css("background", "green");
    }
  );
  $(".box").animate(
    {
      top: "-=400px",
      width: "100px",
      height: "100px",
    },
    1000,
    function () {
      $(this).css("background", "red");
    }
  );
});
