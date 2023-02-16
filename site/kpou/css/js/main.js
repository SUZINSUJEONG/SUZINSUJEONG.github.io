(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
   $(document).ready(function () {
         function toggleNavbarMethod() {

            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }

            /*if ($(window).width() > 992) {
                $('.navbar .dropdown').on('click', function (e) {
                    $('.dropdown-menu').slideDown('300');
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }*/
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);

        /*function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function (e) {
                    $('.dropdown-menu').addClass('on').stop();
                });
                $('.navbar .dropdown').mouseleave(function (e) {
                    $('.dropdown-menu').removeClass('on');
                });
            } else {
                $('.navbar .dropdown').off('on');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);*/


        // Back to top button
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.back-to-top').fadeIn('slow');
            } else {
                $('.back-to-top').fadeOut('slow');
            }
        });
        $('.back-to-top').click(function () {
            $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
            return false;
        });



        
    });


    
       
    $(function(){
        $('.show-hide').show();
        $('.show-hide span').addClass('show');
 
        $('.show-hide span').click(function(){
            if( $(this).hasClass('show') ) {
                $('input[name="login[password]"]').attr('type','text');
                $(this).removeClass('show');
            } else {
                $('input[name="login[password]"]').attr('type','password');
                $(this).addClass('show');
            }
        });
        $('form button[type="submit"]').on('click', function(){
            $('.show-hide span').text('Show').addClass('show');
            $('.show-hide').parent().find('input[name="login[password]"]').attr('type','password');
        });
    });
        
    
})(jQuery);


 

