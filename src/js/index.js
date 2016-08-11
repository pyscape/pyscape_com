$(function() {
    // Init the Owl Carousel slider script - remove this code if it is not in use
    $('.owl-carousel').owlCarousel({
        animateOut: 'fadeOut',
        autoHeight:true,
        items:1,
        loop: true,
        autoplay: true,
        autoplaySpeed: 1500,
        margin:0,
        stagePadding:0,
        nav: false,
        smartSpeed:0

    });
    $('.nav .in li a').click(function() {
        $('#navToggle').click();
    });
});
