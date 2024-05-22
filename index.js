window.onload = function () {
  let mobile = false;
  $(".mbarc").on("click", function() {
    if (!mobile) {
      $("#menu").css("opacity", 0);
      $("#menu").css("display", "flex");
      $(".menulink").animate({
        height: "70px"
      }, 300)
      $("#menu").animate({
        opacity:1
      }, 100)
      $("#mbar").animate({
        opacity:0
      }, 100, function() {
        $(".mab").css("display", "none");
        $(".mas").css("display", "none");
        $("#x").attr("style","display:block");
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
        $(".menulink").animate({
          height: "50px"
        }, 5)

      })
      $("#mbar").animate({
        opacity: 0
      }, 100, function () {
        $("#x").attr("style","display:none")
        $(".mab").css("display","block")
        $(".mas").css("display","block")
        $("#mbar").animate({
          opacity: 1
        }, 100)
      })
      mobile = false;
    }
  })
}