/* Loading Script */
$(window).load(function () {
    "use strict";
    $(".loader").delay(500).fadeOut();
    $("#mask").delay(1000).fadeOut("slow");
});

/* Flexslider */
$(window).load(function () {
    "use strict";
    $('.flexslider').flexslider({
        animation: "fade",
        start: function (slider) {
            $('.np-controls a.next').click(function (event) {
                event.preventDefault();
                slider.flexAnimate(slider.getTarget("next"));
            });
            $('.np-controls a.previous').click(function (event) {
                event.preventDefault();
                slider.flexAnimate(slider.getTarget("previous"));
            });
        }
    });
});

/* Mixitup Portfolio */
jQuery(document).ready(function ($) {
    "use strict";
    $('#portfolio').mixitup({
        targetSelector: '.item',
        transitionSpeed: 450
    });
});

/* Nivo - Lightbox */
jQuery(document).ready(function ($) {
    "use strict";
    $('.nivo-lbox').nivoLightbox({effect: 'fade'});
});

/* Skills */
jQuery(document).ready(function ($) {
    "use strict";
    $('.skills-info').appear(function () {
        $(".skill").each(function () {
            var percent = $(this).parent().parent().find(" > p span").text();
            $(this).css('width', percent);
        });
    }, {accX: 0, accY: -150});
});

/* Google map */
$(function () {
    "use strict";
    var map = new GMaps({
        el: "#map",
        lat: 35.8400,
        lng: 50.9391,
        zoom: 15,
        zoomControl: true,
        zoomControlOpt: {
            style: "BIG",
            position: "TOP_LEFT"
        },
        panControl: true,
        streetViewControl: false,
        mapTypeControl: false,
        overviewMapControl: false
    });

    var styles = [
        {
            stylers: [
                {hue: "#00ffe6"},
                {saturation: -100}
            ]
        }
    ];

    map.addStyle({
        styledMapName: "Styled Map",
        styles: styles,
        mapTypeId: "map_style"
    });

    map.setStyle("map_style");

    map.addMarker({
        lat: 35.8400,
        lng: 50.9391,
        icon: "images/marker.png"
    });
});

