const PRODUCTS = {
  "garliccheese": {
    "img":"./assets/garliccheese.jpg",
    "title":"Garlic Cheese",
    "cost":"৳90.00",
    "desc":`Savor the robust taste of garlic-infused cheese enveloping each fluffy popcorn piece. It's a snack that speaks for
          itself—bold, cheesy, and utterly satisfying. Treat yourself to the straightforward pleasure of our Garlic Cheese Popcorn
          and indulge in the irresistible combination of flavors with every bite.`,
    "addons":["Cheese","Garlic","Mustard","Paprika","Dried Capsicum","Butter"]
  },
  "cheesecaramel": {
    "img":"./assets/cheesecaramel.jpg",
    "title":"Cheese Caramel",
    "cost":"৳100.00",
    "desc":`Experience the creamy delight of white cheese coating every popcorn kernel. It's simple, it's tasty, and it hits the spot. Dive into the deliciousness of our White Cheese Popcorn and enjoy the cheesy goodness with every crunchy bite.`,
    "addons": ["Cheese","Garlic","Mustard","Caramel","Butter","Paprika"]
  },
  "caramelchocolate":{
    "img":"./assets/chocolatecaramel.jpg",
    "cost":"৳100.00",
    "title":"Chocolate Caramel",
    "desc":`Delight in the perfect marriage of rich chocolate and buttery caramel, coating each crunchy popcorn kernel. It's a treat that needs no embellishment—just pure, decadent satisfaction. Experience the irresistible allure of our Caramel Chocolate Popcorn and indulge in the simple pleasure of heavenly sweetness with every mouthful.`,
    "addons":["Chocolate Chip","Dark Chocolate Drizzle","Cookies","Honey","Cheese", "Salt"]
  },
  "classicsalted": {
    "img":"./assets/classiccaramel.jpg",
    "cost":"৳90.00",
    "title":"Classic Salted Caramel",
    "desc":`Relish in the timeless taste of golden caramel drizzled over each airy popcorn kernel. It's a snack that's simply delightful—no frills, just deliciousness. Dive into the comforting goodness of our Classic Caramel Popcorn and experience the pure joy of this timeless treat.`,
    "addons":["Cheese","Butter","Caramel","Salt","Peanut Butter","Dark Chocolate Drizzle","Chocolate Chip"]
  },
  "cookiesandcream":{
    "img":"./assets/cookiesandcream.jpg",
    "cost":"৳100.00",
    "title":"Cookies and Cream",
    "desc":`In a world filled with chaos and uncertainty, our Caramel Popcorn serves as a beacon of joy, a fleeting moment of bliss amidst the hustle and bustle of everyday life. With each bite, you surrender to the euphoria of pure indulgence, embracing the fleeting moments of happiness that elevate the mundane to the extraordinary.`,
    "addons":["Butter","White Chocolate","Dark Chocolate Drizzle","Chocolate Chip","Cashew Nut","Peanut Butter"]
  }
}
window.onload = function () {
  let mobile = false;
  $(".checkbox").on("click", function () {
    if ($(this).hasClass("checked")) {
      $(this).removeClass("checked");
      $(this).addClass("unchecked");
    } else {
      $(this).removeClass("unchecked");
      $(this).addClass("checked");
    }
  })
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