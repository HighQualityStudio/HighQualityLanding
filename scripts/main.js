/* PRELOADER */
$(window).on('load', function () {
    $preloader = $('#cube-loader'),
    $loader = $preloader.find('.caption');
    $loader.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});

/* PORTFOLIO */
 $('.gallery ul li a').click(function() {
     var itemID = $(this).attr('href');
     $('.gallery ul').addClass('item_open');
     $(itemID).addClass('item_open');
     return false;
 });
 $('.close').click(function() {
     $('.port, .gallery ul').removeClass('item_open');
     return false;
 });

 $(".gallery ul li a").click(function() {
     $('html, body').animate({
         scrollTop: parseInt($("#top").offset().top)
     }, 400);
 });