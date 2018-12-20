/* PRELOADER */
$(window).on('load', function () {
    $preloader = $('#cube-loader'),
    $loader = $preloader.find('.caption');
    $loader.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});
