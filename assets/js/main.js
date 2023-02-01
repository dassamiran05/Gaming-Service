(function ($) {
    "user strict";

    $(document).ready(function () {
        // preloader
        $(".preloader").delay(500).animate({
            "opacity": "0"
        }, 500, function () {
            $(".preloader").css("display", "none");
        });
    });

    new WOW().init();


    var fixed_top = $(".header-section");
    $(window).on("scroll", function () {
        if ($(window).scrollTop() > 500) {
            fixed_top.addClass("animated fadeInDown header-fixed");
        }
        else {
            fixed_top.removeClass("animated fadeInDown header-fixed");
        }
    });


    // slider
// var swiper = new Swiper('.client-slider', {
//     slidesPerView: 3,
//     spaceBetween: 0,
//     centeredSlides: true,
//     loop: true,
//     autoplay: {
//       speeds: 1000,
//       delay: 4000,
//     },
//     breakpoints: {
//       991: {
//         slidesPerView: 2,
//       },
//       767: {
//         slidesPerView: 1,
//       },
//       575: {
//         slidesPerView: 1,
//       },
//     }
//   });
  
  // slider
  var swiper = new Swiper('.client-wrapper', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.ruddra-next',
      prevEl: '.ruddra-prev',
    },
    autoplay: {
      speeds: 1000,
      delay: 3000,
    },
    speed:1000,
    breakpoints: {
      991: {
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 1,
      },
      575: {
        slidesPerView: 1,
      },
    }
  });
  
  // slider
//   var swiper = new Swiper('.blog-post-wrapper', {
//     slidesPerView: 1,
//     spaceBetween: 30,
//     loop: true,
//     navigation: {
//       nextEl: '.ruddra-next',
//       prevEl: '.ruddra-prev',
//     },
//     autoplay: {
//       speeds: 1000,
//       delay: 3000,
//     },
//     speed: 1500,
//     breakpoints: {
//       991: {
//         slidesPerView: 1,
//       },
//       767: {
//         slidesPerView: 1,
//       },
//       575: {
//         slidesPerView: 1,
//       },
//     }
//   });
  
  // slider
//   var swiper = new Swiper('.play-wrapper', {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     loop: true,
//     navigation: {
//       nextEl: '.ruddra-next',
//       prevEl: '.ruddra-prev',
//     },
//     autoplay: {
//       speeds: 1000,
//       delay: 3000,
//     },
//     speed: 1000,
//     breakpoints: {
//       991: {
//         slidesPerView: 2,
//       },
//       767: {
//         slidesPerView: 1,
//       },
//       575: {
//         slidesPerView: 1,
//       },
//     }
//   });
  
//   var swiper = new Swiper('.brand-wrapper', {
//     slidesPerView: 4,
//     spaceBetween: 30,
//     loop: true,
//     autoplay: {
//       speeds: 1000,
//       delay: 2000,
//     },
//     breakpoints: {
//       991: {
//         slidesPerView: 2,
//       },
//       767: {
//         slidesPerView: 2,
//       },
//       575: {
//         slidesPerView: 1,
//       },
//     }
//   });


})(jQuery);