(function ($) {
  $(window).scroll(function () {
    let scroll = $(window).scrollTop();
    let header = $("header").height();

    if (scrollY >= 1000) {
      $("header").addClass("background-header");
    } else {
      $("header").removeClass("background-header");
    }
  });

  // Menu Dropdown Toggle
  if ($(".menu-trigger").length) {
    $(".menu-trigger").on("click", function () {
      $(this).toggleClass("active");
      $(".header-area .nav").slideToggle(200);
    });
  }

  $(".owl-service-item").owlCarousel({
    items: 4,
    loop: true,
    dots: true,
    nav: true,
    autoplay: true,
    margin: 30,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    animateOut: "zoomOutLeft",
    animateIn: "fadeInRight",
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
  });
})(window.jQuery);

let img = document.querySelector(".show-img");
let img1 = document.querySelector(".show-img1");
let img2 = document.querySelector(".show-img2");
function tables(tabel) {
  img.src = tabel;
}
function tables1(tabel) {
  img1.src = tabel;
}
function tables2(tabel) {
  img2.src = tabel;
}
