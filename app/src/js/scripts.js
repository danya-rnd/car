//= ../../../node_modules/jquery/dist/jquery.js
//= ../../../node_modules/jquery/js/swiper.js

$(document).ready(function() {
	setTimeout(function() {
		$('.calculator').css({
			'transform': 'translateY(-50%) translateX(0%)',
			'transition': '.5s'
		});
	}, 2000)
	
	var reviewsSlider = new Swiper('.reviews__slider', {
		slidesPerView: 5,
		spaceBetween: 48,
		allowTouchMove: false,
		loop: true,
		navigation: {
			nextEl: '.reviews__next',
			prevEl: '.reviews__prev'
		}
	});

	var auctionsSlider = new Swiper('.auctions__slider', {
		slidesPerView: 4,
		spaceBetween: 35,
		allowTouchMove: false,
		loop: true,
		navigation: {
			nextEl: '.auctions__next',
			prevEl: '.auctions__prev'
		}
	});

	$('.inventory__tab').on('click', function(e) {
		$('.inventory__tab').removeClass('active');
		$(e.target).addClass('active');
	})

	$('.filters__title').on('click', function(e) {
		var parent = $(this).text();
		// var target = parent.find('.filters__hidden');
		console.log(parent)
		// $(target).toggleClass('active');
	})
});