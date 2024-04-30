window.onload = function () {
  let mobile = false;
  $("#mbar").on("click", function() {
    if (!mobile) {
      $("#menu").css("opacity", 0);
      $("#menu").css("display", "flex");
      $("#menu").animate({
        opacity:1
      }, 100)
      $("#mbar").animate({
        opacity:0
      }, 100, function() {
        $("#mbar").html('<i class="fa-solid fa-xmark"></i>')
        $("#mbar").animate({
          opacity: 1
        }, 100)
      })
      mobile = true;
    } else {
      $("#menu").animate({
        opacity: 0
      }, 100, function() {
        $("#menu").css("display", "none");

      })
      $("#mbar").animate({
        opacity: 0
      }, 100, function () {
        $("#mbar").html('<i class="fa-solid fa-bars"></i>')
        $("#mbar").animate({
          opacity: 1
        }, 100)
      })
      mobile = false;
    }
  })
}