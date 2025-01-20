$(document).ready(function () {
    $('.bxslider-main').bxSlider({
        mode: 'vertical',
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 360,
        slideMargin: 10,
        controls: false,
        pager: true,
        auto: true,
        autoStart: true,
        onSliderLoad: function () {
            $(".bx-pager").css({
                position: "absolute",
                top: "50%",
                right: "40px",
                transform: "translateY(10%)",
                display: "flex",
                "flex-direction": "column",
                gap: "10px",
                "align-items": "end"
            });
            $(".bx-pager-link.active").css("background-color", "#ed017f");
        },
        onSlideAfter: function () {
            $(".bx-pager-link").css("background-color", "#666");
            $(".bx-pager-link.active").css("background-color", "#ed017f");
        },
    });
    $('#bxslider').bxSlider({
        mode: 'horizontal',
        minSlides: 4,
        maxSlides: 4,
        slideWidth: 360,
        slideMargin: 10,
        controls: false,
        pager: true,
        auto: true,
        autoStart: true,
        onSlideAfter: function () {
            $(".bx-pager-link").css('background-color', "#666");
            $(".bx-pager-link.active").css('background-color', "#ed017f");
        }
    });
    $(".bx-pager-link").css('background-color', "#666");
    $(".bx-pager-link.active").css('background-color', "#ed017f");
    $(".bx-wrapper").css('max-width', "none");
})

