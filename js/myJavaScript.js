(function ($) {
  $(document).ready(function () {

    // hide .navbar first
    $(".navbar").hide();

    // fade in .navbar
    $(function () {
        $(window).scroll(function () {

             // set distance user needs to scroll before we start fadeIn
            if ($(this).scrollTop() > $(mainHeader).height()) {
                $('.navbar').fadeIn();
            } else {
                $('.navbar').fadeOut();
            }
        });
    });

  });
}(jQuery));
