// JavaScript Document

$(document).ready(function(){
	//Slick slider
	$('.slider-newsboard').slick({
		dots: true,
		infinite: true,
		speed: 600,
		autoplay: true,
		cssEase: 'ease-out',
		arrows: false,
	});
	
	//Slick slider
	$('.block-slide-char').slick({
		dots: true,
		infinite: true,
		speed: 600,
		autoplay: true,
		cssEase: 'ease-out',
		arrows: false,
		fade: false,
	});
	
	//Moblie Menu
	$('.btn-menu').click(function(){
		$('.mobile-menu').css({'height':'300px'});
	});	
	$('.mm-close').click(function(){
		$('.mobile-menu').css({'height':'0px'});
	});	

	
	//Tab-switch
	$('.we-tabs').each(function(){
		var content = $(this).children('.content');
		content.children('ul').hide();
		content.children('ul').first().show();
		$('.title ul li').click(function(){
			$('.title ul li').removeClass('active');
			$(this).addClass('active');	
			var i = $(this).data('tab');
			//alert(i);
			content.children('ul').hide();
			content.children('[data-id="'+i+'"]').show();
		});
	});
	
	//Trailer
	$('#popup-video').hide();
	$('#btn-close-popup').click(function(){
		$('#popup-video').fadeOut();
		$('.youtube-block').attr('src','');
	});
	$('.popup-youtube').click(function(){
		var i = $(this).data('url');
		$('#popup-video').fadeIn();
		$('.youtube-block').attr('src',i);
	});

});

// handle links with @href started with '#' only
$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');
    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }
    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();
    // top position relative to the document
    var pos = $(id).offset().top;
    // animated top scrolling
    $('body, html').animate({scrollTop: pos},600);
});


/*
$(window).scroll(function() {
    var height = $(window).scrollTop();
    var wwidth = $(window).width();

    if(height  > 200 && wwidth >= 992) {
        $('header').addClass('minimize');
    }
	else {$('header').removeClass('minimize');}
});
*/