
//CHECK MOBILE
var isMobile = $('#isMobile').css('display') == 'block';
//alert(isMobile);

//Init Swuper
if (isMobile){
    const swiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
          },
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      });
};

//W CLONE
$('template.wblock-clone').each(function(){
    let target = $(this).data('w-clone-target');
    let times = $(this).data('w-clone-times');
    let clone = $(this).html();
    for (let i = 0; i < times; i++) {
        $(target).append(clone);
    } 
});

//TOOLTIPS
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

//LOGIN
$('.btn-login').click(function(){
    $(this).toggleClass('btn-logout');
});
   
//BXH
$('.table-bxh').hide();
$('#' + $('#bxh-select').val()).show();
$('#bxh-select').change(function(){
    $('.table-bxh').hide();
    $('#' + $(this).val()).show();
});

// COUNTDOWN
setInterval(function(){
    var teasercountdown = countdown( new Date() , new Date(2021, 11, 11, 10, 00, 00));
    //console.log(teasercountdown.days);
    $('.countdown-element.day').children('.num').html(teasercountdown.days);
    $('.countdown-element.hour').children('.num').html(teasercountdown.hours);
    $('.countdown-element.minute').children('.num').html(teasercountdown.minutes);
    $('.countdown-element.sec').children('.num').html(teasercountdown.seconds);
}, 1000);



// SHOW HIDE TRIGGER
$('.wshow-trigger').each(function(){
    $(this).on('click', function(){
        $(this).siblings().removeClass('active');
        $(this).addClass('active')
        let target = $(this).data('w-show-target'),
            group = $(this).data('w-show-group');
        console.log(target);
        $(group).removeClass('show');
        $(target).addClass('show');
        

    });
});

var animateActiveClass = ' animate__animated';
$('.animate__onready').each(function(){
    $(this).addClass(animateActiveClass).css("animation-play-state", "paused");;
});

// JQUERY NEW SHOW HIDE FUNCTION
(function( $ ){
    $.fn.whide = function() {
        let anim = this.data('w-animation-name');
        this.addClass(anim).css("animation-play-state", "running");
        this.on('animationend', function(){
            $(this).css("display", "none" );
        });
        return this;
    }; 
 })( jQuery );

// WANIMATE
$('.wblock-lightsweep img').each(function(){
    lightsweep = $(this).clone().insertAfter($(this));
    lightsweep.addClass('lightSweep');
});



/////////////////////////////////////////////////
// ON JS IS DONE
$(document).ready(function(){
    console.log('READY');
    $('#loader').whide();
    //START ANIMATON WHEN READY
    $('.animate__onready').each(function(){
        $(this).css("animation-play-state", "running");;
    });
});

/////////////////////////////////////////////////
// ON FIRST SCREEN IS DONE
$('.loadedpoint img').one( "load", function() {
    console.log('1st Loaded');
});

/////////////////////////////////////////////////
// ON ENTIRE PAGE IS DONE
$( window ).one( "load", function() {
    console.log('Page Loaded');
});


