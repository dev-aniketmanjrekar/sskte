(function ($) {
    "use strict";
	
    /*---------------------
    	// preloader active
    --------------------- */
    $(window).on('load', function() {
        jQuery(".preloader").fadeOut(500);
    });
	
    $(document).ready(function () {
    /*----------------------------
    	Mobile Menu Active
    	------------------------------*/
    $("#navigation").slicknav({
        prependTo: ".responsive-menu-wrap"
    });
    /*----------------------------
    		Skill Bar1 Active
    	------------------------------*/
    $('#skill-bar1').LineProgressbar({
        percentage: 90,
        // fillBackgroundColor: '#98cb2b',
        fillBackgroundColor: '#3498db',
        backgroundColor: '#ffffff',
        height: '14px',
    });

    $('#skill-bar2').LineProgressbar({
        percentage: 70,
        // fillBackgroundColor: '#98cb2b',
        fillBackgroundColor: '#3498db',
        backgroundColor: '#ffffff',
        height: '14px',
    });

    $('#skill-bar3').LineProgressbar({
        percentage: 95,
        // fillBackgroundColor: '#98cb2b',
        fillBackgroundColor: '#3498db',
        backgroundColor: '#ffffff',
        height: '14px',
    });

    $('#skill-bar4').LineProgressbar({
        percentage: 80,
        // fillBackgroundColor: '#98cb2b',
        fillBackgroundColor: '#3498db',
        backgroundColor: '#ffffff',
        height: '14px',
    });

    /*----------------------------
    		Counter Active
    	------------------------------*/
    $('.counter').counterUp({
        delay: 2,
        time: 1000
    });

    /*--------------------------
         testimonial Active
        ---------------------------- */
    $('.carousel').carousel({
        pause: true,
        interval: false,
    });

    /*----------------------------
    		Team Member Slider Active
    	------------------------------*/
    $(".all-team-member").owlCarousel({
        loop: true,
        autoplay: false,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left '></i>", "<i class='fa fa-angle-right '></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }
    });

    /*----------------------------
    		Client Slider Active
    	------------------------------*/
    $(".all-client-slider").owlCarousel({
        loop: true,
        autoplay: false,
        smartSpeed: 1000,
        dots: false,
        nav: true,
        navText: ["<i class='fa fa-angle-left '></i>", "<i class='fa fa-angle-right '></i>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    /*----------------------------
    		scrolltop active
    	------------------------------*/
    $('body').materialScrollTop();
    /*----------------------------
    		popup active
    	------------------------------*/
    $(".video-view").magnificPopup({
        type: "iframe"
    });

    /*----------------------------
            isotop type 1 active
        ------------------------------*/
    $('.portfolio-menu-1 li').on('click', function () {
        $('.portfolio-menu-1 li.active').removeClass('active');
        $(this).addClass('active');
    });

    $('#container').imagesLoaded(function () {

        $('.portfolio-menu-1 li').on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $folios1.isotope({
                filter: filterValue
            });
        });
        var $folios1 = $('.typ1-all-folio').isotope({
            itemSelector: '.typ1-folios-item',
            percentPosition: true,
            layoutMode: 'fitRows',
            transitionDuration: '0.9s',
            // only opacity for reveal/hide transition
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            },
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.typ1-folios-item'
            },
        });
    });
    /*----------------------------
    		   isotop type 2 active
    	------------------------------*/
    $('#container').imagesLoaded(function () {
        $('.portfolio-menu-1 li').on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $folios2.isotope({
                filter: filterValue
            });
        });
        var $folios2 = $('.typ2-all-folio').isotope({
            itemSelector: '.typ2-folios-item',
            percentPosition: true,
            layoutMode: 'fitRows',
            transitionDuration: '0.9s',
            // only opacity for reveal/hide transition
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            },
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.typ2-folios-item'
            },
        });
    });
    /*----------------------------
    		   Isotop type 3 active
    	------------------------------*/
    $('#container').imagesLoaded(function () {

        $('.portfolio-menu-1 li').on('click', function () {
            var filterValue = $(this).attr('data-filter');
            $folios3.isotope({
                filter: filterValue
            });
        });
        var $folios3 = $('.typ3-all-folio').isotope({
            itemSelector: '.typ3-folios-item',
            percentPosition: true,
            transitionDuration: '0.9s',
            // only opacity for reveal/hide transition
            hiddenStyle: {
                opacity: 0
            },
            visibleStyle: {
                opacity: 1
            },
            masonry: {
                // use outer width of grid-sizer for columnWidth
                columnWidth: '.typ3-folios-item'
            }
        });
    });
    /*----------------------------
    		NiceSelect Active
    	------------------------------*/
        $('select').niceSelect();
    /*----------------------------
    		Price Filter Active
    	------------------------------*/

    $("#price-range").slider({
        range: true,
        min: 0,
        max: 500,
        values: [120, 388],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#price-range").slider("values", 0) +
        " - $" + $("#price-range").slider("values", 1));
    /*----------------------------
    		WOW active
    	------------------------------*/
    new WOW().init();

    });

})(jQuery);