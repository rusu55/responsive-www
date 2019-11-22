jQuery($ => {
  "usestrict";
  let $window = $(window);
  let body = $("body");
  let $root = $("html, body");

  /* ----------- Counters ---------- */
  $(".counters").appear(function() {
    $(".count_nums").countTo();
  });

  /*--- smooth page scroll ----*/
  $("a.pagescroll").on("click", function(event) {
    event.preventDefault();
    /* -- gets the top position in px of the element--*/
    let action = $(this.hash).offset().top;
    $("html,body").animate({ scrollTop: action }, 1200);
  });

  /* --- animations on elements --- */

  if ($(".wow").length && $(window).outerWidth() >= 350) {
    let wow = new WOW({
      boxClass: "wow",
      animateClass: "animated",
      offset: 0,
      mobile: true,
      live: true
    });
    wow.init();
  }

  /* --- Menu Fixed --*/

  let headerHeight = $("header").outerHeight();
  let navbar = $("nav.navbar");
  if (navbar.hasClass("static-nav")) {
    $(window).scroll(function() {
      let $scroll = $(window).scrollTop();
      let $navbar = $(".static-nav");

      if ($scroll > 150) {
        $navbar.addClass("fixedmenu");
      } else {
        $navbar.removeClass("fixedmenu");
      }
    });
  }

  /* Side menu button actions */

  let sideMenuToggle = $("#sidemenu_toggle");
  let sideMenu = $(".side-menu");
  if (sideMenuToggle.length) {
    sideMenuToggle.on("click", function() {
      $("body").addClass("overflow-hidden");
      sideMenu.addClass("side-menu-active");
      $(function() {
        setTimeout(function() {
          $("#close_side_menu").fadeIn(300);
        }, 300);
      });
    });
    $(
      "#close_side_menu , #btn_sideNavClose , .side-nav .nav-link.pagescroll"
    ).on("click", function() {
      $("body").removeClass("overflow-hidden");
      sideMenu.removeClass("side-menu-active");
      $("#close_side_menu").fadeOut(200);
      $(() => {
        setTimeout(() => {
          $(".sideNavPages").removeClass("show");
          $(".fas").removeClass("rotate-180");
        }, 400);
      });
    });
  }

  /* -- Paralax --*/
  $(".parallax").parallaxie({
    //speed value btw (-1 to 1)
    speed: 0.55,
    offset: 0
  });
});

/* -- Revolution Slider -- */
//creative agency index
$("#rev_creative")
  .show()
  .revolution({
    sliderType: "standard",
    sliderLayout: "auto",
    scrollbarDrag: "true",
    dottedOverlay: "none",
    navigation: {
      keyboardNavigation: "off",
      keyboard_direction: "horizontal",
      mouseScrollNavigation: "off",
      arrows: {
        enable: false,
        hide_onmobile: true,
        hide_onleave: false,
        hide_under: 767,
        left: {
          h_align: "left",
          v_align: "center",
          h_offset: 20,
          v_offset: 30
        },
        right: {
          h_align: "right",
          v_align: "center",
          h_offset: 20,
          v_offset: 30
        }
      },
      touch: {
        touchenabled: "on",
        swipe_threshold: 75,
        swipe_min_touches: 1,
        swipe_direction: "horizontal",
        drag_block_vertical: false
      }
    },
    viewPort: {
      enable: true,
      outof: "pause",
      visible_area: "90%"
    },
    responsiveLevels: [4096, 1024, 778, 480],
    gridwidth: [1140, 1024, 750, 480],
    gridheight: [600, 500, 500, 350],
    lazyType: "none",
    parallax: {
      type: "mouse",
      origo: "slidercenter",
      speed: 9000,
      levels: [2, 3, 4, 5, 6, 7, 12, 16, 10, 50]
    },
    shadow: 0,
    spinner: "off",
    stopLoop: "off",
    stopAfterLoops: -1,
    stopAtSlide: -1,
    shuffle: "off",
    autoHeight: "off",
    hideThumbsOnMobile: "off",
    hideSliderAtLimit: 0,
    hideCaptionAtLimit: 0,
    disableProgressBar: "off",
    hideAllCaptionAtLilmit: 0,
    debugMode: false,
    fallbacks: {
      simplifyAll: "off",
      nextSlideOnWindowFocus: "off",
      disableFocusListener: false
    }
  });
