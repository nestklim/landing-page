;(function($) {
	"use strict";


	$('.ba-slider').slick({

		prevArrow: '<button class="ba-arrow ba-arrow--left"></button>',
  		nextArrow: '<button class="ba-arrow ba-arrow--right"></button>',
  		dots: true,
  		dotsClass: 'ba-slick-dots',
  		initialSlide: 1

	});

		 $('#slick-slide00').children('button').text('AIRPORT TRANSFER');
		 $('#slick-slide01').children('button').text('BUSINESS TRAVEL');
		 $('#slick-slide02').children('button').text('WEEKEND TOUR');
		 $('#slick-slide03').children('button').text('INTERCITY RIDE');


})(jQuery);
