// WPOPUP YOUTUBE v 1.1
// WORK WITH WPOPUP.JS

// First, import html template

$('body').append(
`
    <div id="wpopup-youtube" class="wpopup wpopup-wrapper">
        <div class="wpopup-inner box-youtube mx-auto wblock-shadow">
            <button class="wbtn btn-xclose close wcursor-noevent position-absolute bottom-100 end-0">
                <span class="wicon wicon-xclose"></span>
            </button>
            <!--Content-->
            <div class="content">
                <div class="ratio ratio-16x9">
                    <iframe style="z-index: 2" id="iframe-youtube" width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <div class="d-flex justify-content-center align-items-center">
                        <div class="spinner-border text-light" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    </div>
` 
);

// YOUTUBE BLOCK
$('.wpopup-trigger-youtube').on('click', function(){
    let link = $(this).data('w-popup-youtube');
    $('#iframe-youtube').attr({'src': link});
    //audioPause(teaseraudio);
});
$('#wpopup-youtube').on('click', function(){
    $(this).find('#iframe-youtube').attr({'src': ''});
    //audioResume(teaseraudio);
});


