/*-----------------------------------------------------------------------------------

    Theme Name: Septosha - Medical Health Care Template
    Description: Medical Health Care Template
    Author: chitrakootweb
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Header class - on scroll
        03. Scroll To Top
        04. Parallax
        05. Video
        06. Category Toggle and Select option
        07. Time Picker
        08. Resize function
        09. FullScreenHeight function
        10. ScreenFixedHeight function
        11. FullScreenHeight and screenHeight with resize function
        12. Category Selector
        13. Sliders
        14. Tabs
        15. CountUp
        16. Countdown
        17. Isotop and Popup
        
        
    ---------------------------------- */    

    (function($) {

        "use strict";
    
        var $window = $(window);
    
    
            /*------------------------------------
                01. Preloader
            --------------------------------------*/
            $('#preloader').delay(1000);
            $('#preloader').fadeOut('normal2', function() {
                $(this).remove();
            });
    
            /*------------------------------------
                02. Header class - on scroll
            --------------------------------------*/
    
            $window.on('scroll', function() {
                var scroll = $window.scrollTop();
                if (scroll <= 50) {
                    $("header").removeClass("scrollHeader").addClass("fixedHeader");
                } 
                else {
                    $("header").removeClass("fixedHeader").addClass("scrollHeader");
                }
            });
    
            /*------------------------------------
                03. Scroll To Top
            --------------------------------------*/
    
            $window.on('scroll', function() {
                if ($(this).scrollTop() > 500) {
                    $(".scroll-to-top").fadeIn(400);
    
                } else {
                    $(".scroll-to-top").fadeOut(400);
                }
            });
    
            $(".scroll-to-top").on('click', function(event) {
                event.preventDefault();
                $("html, body").animate({
                    scrollTop: 0
                }, 600);
            });
    
            /*------------------------------------
                04. Parallax
            --------------------------------------*/
    
            // sections background image from data background
            var pageSection = $(".parallax,.bg-img");
            pageSection.each(function(indx) {
    
                if ($(this).attr("data-background")) {
                    $(this).css("background-image", "url(" + $(this).data("background") + ")");
                }
            });
            
            /*------------------------------------
                05. Video
            --------------------------------------*/
    
            $('.story-video').magnificPopup({
                delegate: '.video',
                type: 'iframe'
            });
    
            /*------------------------------------
                06. Category Toggle and Select option
            --------------------------------------*/
    
            var resizeTimer;
            $window.on('resize', function (e) {
                clearTimeout(resizeTimer);
                resizeTimer = setTimeout(function () {
                    if ($window.width() > 991) {
                        $('.categories .dept-category').show();
                    } else {
                        $('.categories .dept-category').hide();
                    }
                }, 250);
            });
    
            //Category toggle on mobile devices
            $('.collapse-sm').on('click', function () {
                $('.categories .dept-category').slideToggle();
                if ( $(this).hasClass('current') ) {
                    $(this).removeClass('current');
                } else {
                    $(this).removeClass('current');
                    $(this).addClass('current');
                }
            });
    
            //Select option for departments
            $('.select-departments').on('click', function () {
                if ( $('.select-departments .dropdown').hasClass('current') ) {
                    $('.select-departments .dropdown').removeClass('current');
                } else {
                    $('.select-departments .dropdown').removeClass('current');
                    $('.select-departments .dropdown').addClass('current');
                }
            });
    
            //Select option for doctors
            $('.select-doctors').on('click', function () {
                if ( $('.select-doctors .dropdown').hasClass('current') ) {
                    $('.select-doctors .dropdown').removeClass('current');
                } else {
                    $('.select-doctors .dropdown').removeClass('current');
                    $('.select-doctors .dropdown').addClass('current');
                }
            });
    
            /*------------------------------------
                07. Time Picker
            --------------------------------------*/
    
            var input = $('#time-input-popup').clockpicker({
                placement: 'bottom',
                align: 'left',
                autoclose: true,
                'default': 'now'
            });
    
            var input = $('#time-input').clockpicker({
                placement: 'bottom',
                align: 'left',
                autoclose: true,
                'default': 'now'
            });
    
            /*------------------------------------
                08. Resize function
            --------------------------------------*/
    
            $window.resize(function(event) {
                setTimeout(function() {
                    SetResizeContent();
                }, 500);
                event.preventDefault();
            });
    
            /*------------------------------------
                09. FullScreenHeight function
            --------------------------------------*/
    
            function fullScreenHeight() {
                var element = $(".full-screen");
                var $minheight = $window.height();
                element.css('min-height', $minheight);
            }
    
            /*------------------------------------
                10. ScreenFixedHeight function
            --------------------------------------*/
    
            function ScreenFixedHeight() {
                var $headerHeight = $("header").height();
                var element = $(".screen-height");
                var $screenheight = $window.height() - $headerHeight;
                element.css('height', $screenheight);
            }
    
            /*------------------------------------
                11. FullScreenHeight and screenHeight with resize function
            --------------------------------------*/        
    
            function SetResizeContent() {
                fullScreenHeight();
                ScreenFixedHeight();
            }
    
            SetResizeContent();
    
        // === when document ready === //
        $(document).on("ready", function() {
    
            /*------------------------------------
                12. Category Selector
            --------------------------------------*/
    
            var urlparam = window.location.pathname.split('/');
            var menuselctor = window.location.pathname;
            if (urlparam[urlparam.length - 1].length > 0)
                menuselctor = urlparam[urlparam.length - 1];
            else
                menuselctor = urlparam[urlparam.length - 2];
    
            $('.dept-category li').find('a[href="' + menuselctor + '"]').closest('li').addClass('active');
    
    
            /*------------------------------------
                13. Sliders
            --------------------------------------*/
    
            // Testmonials carousel1
            $('#testmonials-carousel').owlCarousel({
                loop: true,
                responsiveClass: true,
                autoplay: true,
                smartSpeed: 800,            
                nav: false,
                dots: true,
                center:true,
                margin: 0,
                responsive: {
                    0: {
                        items: 1
                    },
                    768: {
                        items: 1
                    },
                    992: {
                        items: 1
                    }
                }
            });
    
           // Departments carousel
            $('#departments').owlCarousel({
                loop: true,
                nav: true,
                navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],
                dots: false,
                autoplay: true,
                autoplayTimeout: 3000,
                responsiveClass: true,
                autoplayHoverPause: false,
                responsive: {
                    0: {
                        items: 1,
                        margin: 0
                    },
                    576: {
                        items: 2,
                        margin: 14
                    },                
                    992: {
                        items: 3,
                        margin: 15,
                        },
                    1200: {
                        items: 4,
                        margin: 19,
                    }
                }
            });
    
            // Sliderfade
            $('.slider-fade .owl-carousel').owlCarousel({
                items: 1,
                loop:true,
                dots: false,
                nav: true,
                navText: ['<span class="fas fa-chevron-left"></span>', '<span class="fas fa-chevron-right"></span>'],            
                margin: 0,
                autoplay:true,
                smartSpeed:500,
                mouseDrag:false,
                animateIn: 'fadeIn',
                animateOut: 'fadeOut',
                responsive: {
                    0: {
                        nav: false,
                        dots: true
                    },
                    992: {
                        nav: true,
                        dots: false
                    }
                }            
            }); 
    
            // Departments owlCarousel
            $('.department-details .owl-carousel').owlCarousel({
                items: 1,
                loop:true,
                dots: false,
                margin: 0,
                autoplay:true,
                smartSpeed:500
            }); 
    
            // Default owlCarousel
            $('.owl-carousel').owlCarousel({
                items: 1,
                loop:true,
                dots: true,
                margin: 0,
                autoplay:true,
                smartSpeed:500
            });   
    
            // Slider text animation
            var owl = $('.slider-fade');
            owl.on('changed.owl.carousel', function(event) {
                var item = event.item.index - 2;     // Position of the current item
                $('h3').removeClass('animated fadeInUp');
                $('h1').removeClass('animated fadeInUp');
                $('p').removeClass('animated fadeInUp');
                $('.butn').removeClass('animated fadeInUp');
                $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInUp');
                $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInUp');
                $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
                $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated fadeInUp');
            });
    
            /*------------------------------------
                14. Tabs
            --------------------------------------*/
    
            //Horizontal Tab
            if ($(".horizontaltab").length !== 0) {
                $('.horizontaltab').easyResponsiveTabs({
                    type: 'default', //Types: default, vertical, accordion
                    width: 'auto', //auto or any width like 600px
                    fit: true, // 100% fit in a container
                    tabidentify: 'hor_1', // The tab groups identifier
                    activate: function(event) { // Callback function if tab is switched
                        var $tab = $(this);
                        var $info = $('#nested-tabInfo');
                        var $name = $('span', $info);
                        $name.text($tab.text());
                        $info.show();
                    }
                });
            }
    
            /*------------------------------------
                15. CountUp
            --------------------------------------*/
    
            $('.countup').counterUp({
                delay: 25,
                time: 2000
            });
    
            /*------------------------------------
                16. Countdown
            --------------------------------------*/
    
            // CountDown for coming soon page
            $(".countdown").countdown({
                date: "01 Jan 2021 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
                format: "on"
            });
          
        });
    
        // === when window loading === //
        $window.on("load", function() {
    
            /*------------------------------------
                17. Isotop and Popup
            --------------------------------------*/
    
            // isotope with magnificPopup
            $('.gallery').magnificPopup({
                delegate: '.popimg',
                type: 'image',
                gallery: {
                    enabled: true
                }
            });
    
            $('.appointment').magnificPopup({
                type: 'inline',
                preloader: false
            });
    
            var $gallery = $('.gallery').isotope({
                // options
            });
    
            // filter items on button click
            $('.filtering').on('click', 'span', function() {
                var filterValue = $(this).attr('data-filter');
                $gallery.isotope({
                    filter: filterValue
                });
            });
    
            $('.filtering').on('click', 'span', function() {
                $(this).addClass('active').siblings().removeClass('active');
            });
    
            // stellar
            $window.stellar();
    
        });
    
    })(jQuery);