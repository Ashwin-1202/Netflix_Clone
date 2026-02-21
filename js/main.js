(function ($) {
    "use strict";

    $(document).ready(function () {

        function default_home_carouselInit() {
            $('.owl-carousel.trending_active').owlCarousel({
                dots: false,
                loop: false,
                rewind: true,
                margin: 10,
                stagePadding: 0,
                nav: true,
                navText: ['<i class="fas fa-chevron-left"></i>','<i class="fas fa-chevron-right"></i>'],
                autoplay: false,
                smartSpeed: 500,
                responsive: {
                    0: { items: 2, margin: 5 },
                    576: { items: 3 },
                    768: { items: 4 },
                    992: { items: 5 },
                    1200: { items: 6 }
                }
            });
        }
        default_home_carouselInit();

    });

})(jQuery);