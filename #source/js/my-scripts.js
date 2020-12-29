$(function () {
  

  // Turn img to background ===========================================

  function ibg() {
    $.each($(".ibg"), function (index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css({
          background:
            'url("' + $(this).find("img").attr("src") + '") center no-repeat',
          "background-size": "cover",
        });

        $(this).find("img").first().css("display", "none");
      }
    });
  }

  ibg();

  // Burger btn ===============================================

  const burgerBtnFirst = $(".menu__icon"),
    burgerBtnSecond = $(".menu-intro__icon"),
    introMenuBody = $(".menu-intro__body");

  burgerBtnFirst.on("click", function (event) {
    event.preventDefault();

    $(".menu__body").toggleClass("active");
    $(this).toggleClass("active");
  });

  burgerBtnSecond.on("click", function (event) {
    event.preventDefault();

    $(this).toggleClass("active");
    introMenuBody.toggleClass("active");
  });
});
