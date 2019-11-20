jQuery($ => {
  "usestrict";
  let $window = $(window);
  let body = $("body");
  let $root = $("html, body");

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

      if ($scroll > 250) {
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
});
