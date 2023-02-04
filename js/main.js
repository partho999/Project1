(function($){
	'use strict'

	// Menu:

	$('.bar-icon').on('click', function(){
		$('.menu-icon').animate({ left : 0 });
	});

	$('.bar-icon-close span').on('click', function(){
		$('.menu-icon').animate({ left : -300 });
	});

	// sub Menu:
	$('.menu-icon ul li').on('click', function(){
		$(this).children('ul').slideToggle();
	});
	
	// Social icon:

	$('.social-icon').on('click', function(){
		$('.social-natowork').animate({ right : 0 });
	});

	$('.social-icon-close').on('click', function(){
		$('.social-natowork').animate({ right : -600 });
	});

	var myCarousel = document.querySelector('#myCarousel')
	var carousel = new bootstrap.Carousel(myCarousel)

	// Hear Photo view start:

	// photo 1:
	$('#images').on( 'click', function(){
		$('.photo-container').show();
	});
	$('#close-photo').on( 'click', function(){
		$('.photo-container').hide();
	});
	// photo 2:
	$('#images-2').on( 'click', function(){
		$('.photo-container-2').show();
	});
	$('#close-photo-2').on( 'click', function(){
		$('.photo-container-2').hide();
	});
	// photo 3:
	$('#images-3').on( 'click', function(){
		$('.photo-container-3').show();
	});
	$('#close-photo-3').on( 'click', function(){
		$('.photo-container-3').hide();
	});
	// photo 4:
	$('#images-4').on( 'click', function(){
		$('.photo-container-4').show();
	});
	$('#close-photo-4').on( 'click', function(){
		$('.photo-container-4').hide();
	});

// Hear Photo view is end.


}) (jQuery);