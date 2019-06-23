//jQuery is required to run this code
$(document).ready(function () {
    $('#database-slider').slick({
        slidesToShow: 3,
        autoplay: true,
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
    });
});
