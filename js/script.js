$(document).ready(function() {
    console.log("ready!");
    $('.burger').on('click', function() {
        $(this).toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.my-desktop-menu').addClass('active');
        } else {
            $('.my-desktop-menu').removeClass('active');
        }

    });
    $('.my-desktop-menu a').on('click', function(){
        $('.my-desktop-menu').removeClass('active');
        $('.burger').removeClass('active');
    });

    //Reveal gnu linux hidden menu
    var trigger = $('.trigger-hidden-menu');
    var hiddenSection = $('.hidden-section');
    hiddenSection.hide();
    trigger.on('click', function(e) {
        e.preventDefault();
        // alert('je suis cliqué');
        hiddenSection.slideToggle();
    });

    //Using Waypoints
    $(".menu a:contains('services')").on('click', function(event) {
        console.log('services is cliqued');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#services").offset()
                .top - 64
        }, 1000);
    }); 
    $(".menu a:contains('features')").on('click', function(event) {
        console.log('features is cliqued');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#features").offset()
                .top - 64
        }, 1000);
    });
    $(".menu a:contains('downloads')").on('click', function(event) {
        console.log('downloads is cliqued');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#downloads").offset()
                .top - 64
        }, 1000);
    });
    $(".menu a:contains('contribution')").on('click', function(event) {
        console.log('contribution is cliqued');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#contribution").offset()
                .top - 64
        }, 1000);
    });
    $(".menu a:contains('about')").on('click', function(event) {
        console.log('about is cliqued');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#about").offset()
                .top - 64
        }, 1000);
    });
    //go-to-dl
    $(".features a:contains('app')").on('click', function(event) {
        console.log('downloads is cliqued');
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $("#downloads").offset()
                .top - 64
        }, 1000);
    });

    /* Dynamic top menu positioning
     *
     */

    var num = 100; //number of pixels before modifying styles

    $(window).bind('scroll', function () {
        if ($(window).scrollTop() > num) {
            $('nav').addClass('fixed');
        } else {
            $('nav').removeClass('fixed');
        }
    });


});