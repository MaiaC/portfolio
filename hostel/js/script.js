$('.carousel').bxSlider({
  minSlides: 1,
  maxSlides: 3,
  slideWidth: 330,
  slideMargin: 0,
  controls: false,
  responsive: true
});

$('select').selectmenu();

$('header.main-header').css('height', $('#slideshow').height() / 2 + 140 );

$(window).on('resize', function() {
	$('header.main-header').css('height', $('#slideshow').height() / 2 + 140 );
});