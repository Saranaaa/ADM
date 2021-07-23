(function ($) {
    'use strict';
    $(window).on('load',function(){

        //==========preloder===========
        var preLoder = $(".preloader");
        preLoder.fadeOut(1000);

        // ===========portfolio isotop data filter===========
        $('.controls').on( 'click', '.port-btn', function() {
            $(this).addClass('active').siblings().removeClass('active');
            var filterValue = $(this).attr('data-filter');
            $('.items').isotope({ filter: filterValue });
        });
        $('.items').isotope({
            itemSelector: '.single-item',
            layoutMode: 'fitRows',
            percentPosition: true
        });
    });


    //==========fixed header & scroll to top button===========
    $(window).on('scroll', function(){
        if($(window).scrollTop() > 300) {
            $('.header .bottom-header, .header-2').addClass('animated fadeInDown fixed-header');
            $('.scroll-to-top').fadeIn();
            $('.scroll-to-top button').addClass('active');
        } else {
            $('.header .bottom-header, .header-2').removeClass('animated fadeInDown fixed-header');
            $('.scroll-to-top').fadeOut();
            $('.scroll-to-top button').removeClass('active');
        }
    });
    $(document).ready(function(){

        // ===========nav sidebar show===========
        $(".side-bar-show").on('click', function(){
            $(".sidebar-bg, .main-sidebar").addClass("active")
            $("body").addClass("clear")
        })
        $(".sidebar-bg , .close-btn").on('click', function(){
            $(".sidebar-bg, .main-sidebar").removeClass("active")
            $("body").removeClass("clear")
        })

        // ==========odometer==========
        $('.odometer').appear(function(e) {
            var odo = $(".odometer");
            odo.each(function() {
                var countNumber = $(this).attr("data-count");
                $(this).html(countNumber);
            });
        });

        // ==========banner slider===========
        $('.banner').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1000,
            mouseDrag: false,
            touchDrag: false,
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
        });

        //==========banner text animation===========
        jQuery(".banner").on("translate.owl.carousel", function () {
            jQuery(this).find(".owl-item .banner-txt > *").removeClass("fadeInUp animated").css("opacity","0");
        });          
        jQuery(".banner").on("translated.owl.carousel", function () {
            jQuery(this).find(".owl-item.active .banner-txt > *").addClass("fadeInUp animated").css("opacity","1");
        });
        
        // ==========service slider===========
        $('.service-slider').owlCarousel({
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            dots: false,
            navText: ['<i class="icofont-double-left"></i>','<i class="icofont-double-right"></i>'],
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    margin: 10,
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                },
                1500: {
                    nav: true
                }
            }
        });
        
        // ==========service slider for homepage 2===========
        $('.service-slider-2').owlCarousel({
            items: 3,
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    margin: 10,
                    items: 2
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
        
        // ==========testimonial slider===========
        var testimonialSlider = $('.comment-slider');
        testimonialSlider.owlCarousel({
            loop: true,
            margin: 60,
            nav: false,
            smartSpeed: 1000,
            autoplay: true,
            thumbs: true,
            thumbsPrerendered: true,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 1
                },
                576: {
                    items: 1
                },
                768: {
                    items: 1
                },
                992: {
                    items: 1
                },
                1200: {
                    items: 1
                },
                1920: {
                    items: 1
                }
            }
        });
        $('.owl-next').on('click', function() {
            testimonialSlider.trigger('next.owl.carousel');
        })
        $('.owl-prev').on('click', function() {
            testimonialSlider.trigger('prev.owl.carousel', [300]);
        })
        
        // ==========testimonial slider for home page 2===========
        $('.comment-slider-2').owlCarousel({
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            center: true,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 1
                },
                576: {
                    items: 1.5
                },
                768: {
                    items: 2
                },
                960: {
                    items: 3
                },
                1200: {
                    items: 3
                }
            }
        });
        
        // ==========project slider===========
        $('.project-slider').owlCarousel({
            items: 1,
            loop: true,
            smartSpeed: 1000,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            dots: false,
            nav: true,
            navText: ['<i class="icofont-double-left"></i>','<i class="icofont-double-right"></i>'],
        });
        
        // ==========recent work slider for homepage 2===========
        $('.work-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            centerMode: true,
            centerPadding : 0,
            variableWidth: true,
            dots:true,
            autoplay : true,
            prevArrow : '<div class="container"><button type="button" class="slick-prev"><i class="icofont-double-left"></i></button></div>',
            nextArrow : '<div class="container"><button type="button" class="slick-next"><i class="icofont-double-right"></i></button></div>',
            responsive: [
                {
                    breakpoint: 320,
                    settings: {
                        variableWidth: false
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        arrows : false
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows : false
                    }
                }
            ]
        });

        // ==========partner slider===========
        $('.partner-slider').owlCarousel({
            loop: true,
            smartSpeed: 1000,
            margin: 0,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            dots: false,
            nav: false,
            responsive: {
                0: {
                    items: 3
                },
                480: {
                    items: 4
                },
                768: {
                    items: 5
                },
                960: {
                    items: 5
                },
                1200: {
                    items: 5
                }
            }
        });

        // ==========project details page main image slider===========
        $('.project-details-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            asNavFor: '.project-thumbnails'
        });
        $('.project-thumbnails').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.project-details-slider',
            centerMode: true,
            centerPadding : 0,
            autoplay : true,
            arrows : false
        });
        
        // ===========faq section collapse===========
        $('.collapse').on('shown.bs.collapse', function(){
            $(this).parent().find('.fa-plus').removeClass('fa-plus').addClass('fa-minus');
        }).on('hidden.bs.collapse', function(){
            $(this).parent().find('.fa-minus').removeClass('fa-minus').addClass('fa-plus');
        })
    });
}(jQuery));