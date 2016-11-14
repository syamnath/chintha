$(function() {
    "use strict";


    /* ==========================================================================
   Preload
   ========================================================================== */
    
    $(window).load(function() {
        
        $("#status").fadeOut();
        
        $("#preloader").delay(1000).fadeOut("slow");

        // slider fix the spacing issue of the slider next btn

            var imageHeight = $('#second-slider .col-md-4 img').height();
            var btnHeight  = $('.arrow').height();

            console.log(imageHeight)
            console.log(btnHeight)
            var topposition =  (imageHeight-btnHeight-8)/2
             console.log(topposition)
             $('.arrow').css("top", topposition + "px");
    });


    /* ==========================================================================
   parallax scrolling 
   ========================================================================== */
    
    
		
		if (!(/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i).test(navigator.userAgent || navigator.vendor || window.opera)) {
        		if($(window).width()>992){skrollr.init({forceHeight:false})}$(window).on("resize",function(){if($(window).width()<=	992){skrollr.init().destroy()}});$(window).on("resize",function(){if($(window).width()>992){skrollr.init({forceHeight:false})}});
    }




    
    
 /* ==========================================================================
       Number animation
       ========================================================================== */   

    
    $('.counter').waypoint(function() {
        
        var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',');
        
        $('.total-number-1').animateNumber({
            number: 100, //change value here
            numberStep: comma_separator_number_step
        }, 2000);
        
        $('.total-number-2').animateNumber({
            number: 1000, //change value here
            numberStep: comma_separator_number_step
        }, 2000);
        
        $('.total-number-3').animateNumber({
            number: 1200, //change value here
            numberStep: comma_separator_number_step
        }, 2000);
        
        $('.total-number-4').animateNumber({
            number: 1500, //change value here
            numberStep: comma_separator_number_step
        }, 2000);
    
    
    
    }, {
        offset: '80%'
    
    });


    /* ==========================================================================
   Tweet
   ========================================================================== */
    
    
    $('.tweet').twittie({
        username: 'envatomarket', // change username here
        dateFormat: '%b. %d, %Y',
        template: '{{tweet}}',
        count: 10
    }, function() {
        var item = $('.tweet ul');
        
        item.children('li').first().show().siblings().hide();
        setInterval(function() {
            item.find('li:visible').fadeOut(500, function() {
                $(this).appendTo(item);
                item.children('li').first().fadeIn(500);
            });
        }, 5000);
    });


    /* ==========================================================================
   Smooth Scroll
   ========================================================================== */
    
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: (target.offset().top - 40)
                }, 1000);
                return false;
            }
        }
    });



    /* ==========================================================================
   Review slider
   ========================================================================== */
    
    $('.review-slider').slick({
        dots: true,
        arrows: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnHover: false
    });

    /* ==========================================================================
     sub form
     ========================================================================== */
    
    $(document).ready(function() {
        
        function loading() {
            $('.result').show().html('Sending...');
        }

        
        function formResult(data) {
            $('.result').html(data);
            $('#mc-form input').val('');
        }
        
        function onSubmit() {
            $('#mc-form').submit(function() {
                var action = $(this).attr('action');
                loading();
                $.ajax({
                    url: action,
                    type: 'POST',
                    data: {
                        email: $('#mailchimp-email').val(),
                        fname: $('#mailchimp-fname').val(),
                        lname: $('#mailchimp-lname').val()
                    },
                    success: function(data) {
                        formResult(data);
                    },
                    error: function(data) {
                        formResult(data);
                    }
                });
                return false;
            });
        }
        onSubmit();
    
    });

    /* ==========================================================================
       Contact Form
       ========================================================================== */
    
    
    $('#contact-form').validate({
        
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: "<i class='fa fa-exclamation-triangle'></i>Please specify your name.",
            email: {
                required: "<i class='fa fa-exclamation-triangle'></i>We need your email address to contact you.",
                email: "<i class='fa fa-exclamation-triangle'></i>Please enter a valid email address."
            },
            message: "<i class='fa fa-exclamation-triangle'></i>Please enter your message."
        },
        submitHandler: function(form) {
            $(form).ajaxSubmit({
                type: "POST",
                data: $(form).serialize(),
                url: "php/contact-me.php",
                success: function() {
                    $('#contact-form :input').attr('disabled', 'disabled');
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $(this).find(':input').attr('disabled', 'disabled');
                        $(this).find('label').css('cursor', 'default');
                        $('.success-cf').fadeIn();
                    });
										$('#contact-form')[0].reset();
                },
                error: function() {
                    $('#contact-form').fadeTo("slow", 0.15, function() {
                        $('.error-cf').fadeIn();
                    });
                }
            });
        }
    });


    /* ==========================================================================
   ScrollTop Button
   ========================================================================== */
    
    
    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scroll-top a').fadeIn(200);
        } else {
            $('.scroll-top a').fadeOut(200);
        }
    });
    
    
    $('.scroll-top a').click(function(event) {
        event.preventDefault();
        
        $('html, body').animate({
            scrollTop: 0
        }, 1000);
    });


    /* ==========================================================================
   sticky nav
   ========================================================================== */
    
    
    
    var menu = $('.navbar');
    
    var stickyNav = menu.offset().top;
    
    $(window).scroll(function() {
        if ($(window).scrollTop() > 100) {
            menu.addClass('stick');
        } else {
            menu.removeClass('stick');
        
        }
    });


	/* ==========================================================================
	   Collapse nav bar
	   ========================================================================== */
	$(".navbar-nav li a").on('click', function() {
	    $(".navbar-collapse").collapse('hide');
	});
        /* ==========================================================================
       Author slider in the details block
       ========================================================================== */


    $('.slider-2').slick({
        slidesToShow: 1,
        prevArrow: '<div class="arrow feat-prev"><i class="fa fa-chevron-left" aria-hidden="true"></i></div>',
        nextArrow: '<div class="arrow feat-next"><i class="fa fa-chevron-right" aria-hidden="true"></i></div>',
        slide: '.featured-slide-2',
        asNavFor: '.slider-nav-2',
        fade: true,
        autoplay: false
    });

    $('.slider-nav-2').slick({
        slidesToShow: 6,
        slide: '.slide-link-2',
        asNavFor: '.slider-2',
        arrows: false,
        focusOnSelect: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
          ]
    });


});
