const PRODUCTS = {
  "garliccheese": {
    "img": "./assets/garliccheese.jpg",
    "title": "Garlic Cheese",
    "cost": "৳90.00",
    "desc": `Savor the robust taste of garlic-infused cheese enveloping each fluffy popcorn piece. It's a snack that speaks for
          itself—bold, cheesy, and utterly satisfying. Treat yourself to the straightforward pleasure of our Garlic Cheese Popcorn
          and indulge in the irresistible combination of flavors with every bite.`,
    "addons": ["Cheese", "Garlic", "Mustard", "Paprika", "Dried Capsicum", "Butter"]
  },
  "cheesecaramel": {
    "img": "./assets/cheesecaramel.jpg",
    "title": "Cheese Caramel",
    "cost": "৳100.00",
    "desc": `Experience the creamy delight of white cheese coating every popcorn kernel. It's simple, it's tasty, and it hits the spot. Dive into the deliciousness of our White Cheese Popcorn and enjoy the cheesy goodness with every crunchy bite.`,
    "addons": ["Cheese", "Garlic", "Mustard", "Caramel", "Butter", "Paprika"]
  },
  "caramelchocolate": {
    "img": "./assets/chocolatecaramel.jpg",
    "cost": "৳100.00",
    "title": "Chocolate Caramel",
    "desc": `Delight in the perfect marriage of rich chocolate and buttery caramel, coating each crunchy popcorn kernel. It's a treat that needs no embellishment—just pure, decadent satisfaction. Experience the irresistible allure of our Caramel Chocolate Popcorn and indulge in the simple pleasure of heavenly sweetness with every mouthful.`,
    "addons": ["Chocolate Chip", "Dark Chocolate Drizzle", "Cookies", "Honey", "Cheese", "Salt"]
  },
  "classiccaramel": {
    "img": "./assets/classiccaramel.jpg",
    "cost": "৳90.00",
    "title": "Classic Salted Caramel",
    "desc": `Relish in the timeless taste of golden caramel drizzled over each airy popcorn kernel. It's a snack that's simply delightful—no frills, just deliciousness. Dive into the comforting goodness of our Classic Caramel Popcorn and experience the pure joy of this timeless treat.`,
    "addons": ["Cheese", "Butter", "Caramel", "Salt", "Peanut Butter", "Dark Chocolate Drizzle", "Chocolate Chip"]
  },
  "cookiesandcream": {
    "img": "./assets/cookiesandcream.jpg",
    "cost": "৳100.00",
    "title": "Cookies and Cream",
    "desc": `In a world filled with chaos and uncertainty, our Caramel Popcorn serves as a beacon of joy, a fleeting moment of bliss amidst the hustle and bustle of everyday life. With each bite, you surrender to the euphoria of pure indulgence, embracing the fleeting moments of happiness that elevate the mundane to the extraordinary.`,
    "addons": ["Butter", "White Chocolate", "Dark Chocolate Drizzle", "Chocolate Chip", "Cashew Nut", "Peanut Butter"]
  }
}
let currentItem = null;
var rand = function () {
  return Math.random().toString(36).substr(2);
};

var token = function () {
  return rand() + rand();
};

window.onload = function () {
  let mobile = false;
  console.log("ea")
  function updateCartCount() {
    if (localStorage.getItem("cart") !== null) {
      const dat = JSON.parse(localStorage.getItem("cart"));
      console.log(dat);
      $("#cartCountP").html(dat.length);
      $("#cartCount").css('display', 'flex');

    } else {
      $("#cartCount").css('display', 'none');

    }
  }
  updateCartCount();
  $("#mainNav").click(function () {
    window.location.href = "/";
  })
  $(".mas").click(function () {
    window.location.href = "/cart.html"
  })
  $("#orderNow").click(function () {
    window.location.href = "/store.html"
  })
  $("#storeL").click(function () {
    window.location.href = "/store.html"
  }) 
  $("#followUs").click(function () {
    window.location.href = "https://www.facebook.com/people/PopAcorn/61557374052889/"
  })
  $(".mbarc").on("click", function () {
    if (!mobile) {
      $("#menu").css("opacity", 0);
      $("#menu").css("display", "flex");
      $(".menulink").animate({
        height: "70px"
      }, 300)
      $("#menu").animate({
        opacity: 1
      }, 100)
      $("#mbar").animate({
        opacity: 0
      }, 100, function () {
        $(".mab").css("display", "none");
        $("#x").attr("style", "display:block");
        $("#mbar").animate({
          opacity: 1
        }, 100)
      })
      mobile = true;
    } else {
      $("#menu").animate({
        opacity: 0
      }, 100, function () {
        $("#menu").css("display", "none");
        $(".menulink").animate({
          height: "50px"
        }, 5)

      })
      $("#mbar").animate({
        opacity: 0
      }, 100, function () {
        $("#x").attr("style", "display:none")
        $(".mab").css("display", "block")
        $("#mbar").animate({
          opacity: 1
        }, 100)
      })
      mobile = false;
    }
  })
  $("#returnStore").click(function () {
    $("#productInfo").animate({
      opacity: 0,
    }, 200, function () {
      $("#productInfo").css('display', "none");
      $("#store").css("display", "flex");

    })
  })
  $("#mlStore").click(() => window.location.href = "./store.html");
  $("#mlDelivery").click(() => window.location.href = "./index.html#dlvryinfo");
  $("#mlContact").click(() => window.location.href = "./index.html#contact");

  $("#addToCart").click(function () {
    let cart = [];
    if (localStorage.getItem("cart") !== null) {
      cart = JSON.parse(localStorage.getItem("cart"));
    } else {

    }
    let addOns = {};
    $('.options').each(function (i, obj) {
      addOns[$(this).attr("id")] = {
        "val": $(this).find(">:first-child").hasClass("checked"),
        "name": String($("#" + $(this).attr("id") + " p").html()).substring(2)
      }
    });
    console.log(addOns);
    cart.push({
      "id": currentItem,
      "addons": addOns,
      "portion": $("#portion").val(),
      "uid": token()
    })
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();

  })
  $(".itemHref").click(function() {
    window.location.href="/store.html?product=" + $(this).attr("product");
  })
  const urlParams = new URLSearchParams(window.location.search);
  const product = urlParams.get('product')
  if (product != null && Object.keys(PRODUCTS).includes(product) && String(window.location.href
  ).includes("store.html")) {
    const ID = product;
    const data = PRODUCTS[ID];
    $("#productTitle").html(data.title);
    $("#productCost").html(data.cost);
    $("#productDesc").html(data.desc);
    $("#productImg").attr("src", data.img);
    currentItem = ID;
    $("#addons").html("");
    for (let item of data.addons) {
      $("#addons").append(`
        <div class="options" id="option${String(item).replaceAll(" ", "").toLowerCase()}" >
          <div class="checkbox unchecked">
            <i class="fa-solid fa-check"></i>
          </div>
          <p>+ ${item}</p>
        </div>
      `)
    }
    $(".checkbox").on("click", function () {
      if ($(this).hasClass("checked")) {
        $(this).removeClass("checked");
        $(this).addClass("unchecked");
      } else {
        $(this).removeClass("unchecked");
        $(this).addClass("checked");
      }
    })
    $("#store").css("display", "none");
    $("#productInfo").css('opacity', 0);
    $("#productInfo").css("display", "flex");
    $("#productInfo").animate({
      opacity: 1,
    }, 500)
  }
  $(".product").click(function () {
    const ID = $(this).attr("id");
    const data = PRODUCTS[ID];
    $("#productTitle").html(data.title);
    $("#productCost").html(data.cost);
    $("#productDesc").html(data.desc);
    $("#productImg").attr("src", data.img);
    currentItem = ID;
    $("#addons").html("");
    for (let item of data.addons) {
      $("#addons").append(`
        <div class="options" id="option${String(item).replaceAll(" ", "").toLowerCase()}" >
          <div class="checkbox unchecked">
            <i class="fa-solid fa-check"></i>
          </div>
          <p>+ ${item}</p>
        </div>
      `)
    }
    $(".checkbox").on("click", function () {
      if ($(this).hasClass("checked")) {
        $(this).removeClass("checked");
        $(this).addClass("unchecked");
      } else {
        $(this).removeClass("unchecked");
        $(this).addClass("checked");
      }
    })
    $("#store").css("display", "none");
    $("#productInfo").css('opacity', 0);
    $("#productInfo").css("display", "flex");
    $("#productInfo").animate({
      opacity: 1,
    }, 500)
  })
}