$(function() {
  $(".header-nav-btn").on("click", function() {
    if ($(".header-nav-btn").hasClass("active")) {
      $(".header-nav").fadeOut();
    } else {
      $(".header-nav")
        .fadeIn()
        .css("display", "flex");
    }

    $(".header-nav-btn").toggleClass("active");
  });
});
