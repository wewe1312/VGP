// WPOPUP v 1.0
// WORK WITH JQUERY

//W POPUP ON OFF
$('.wpopup').each(function(){
    $(this).hide();
    $(this).on('click', function(){
        $(this).hide();
    });
    $(this).find('.close').on('click', function(){
        $(this).parents('.wpopup').hide();
    });
});

$('.wpopup-inner').on('click', function(){
    event.stopPropagation();
});

// ON CLICK BUTTON TRIGGER
$('.wpopup-trigger').on('click', function(){
    let target = $(this).data('w-popup-target');
    console.log(target);
    $(target).show();
});
