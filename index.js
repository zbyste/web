// Sticky Header - nic teď nedělá - lze přidat shadow na scroll
$(window).scroll(function () {

    if ($(window).scrollTop() > 10) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});


// Active state - clicking on the tile
$(document).ready(function() {
    $('#portfolio .portfolio-item .portfolio-link .portfolio-hover').click(function() {
        $(this).addClass('active');
        setTimeout(function(){
            $('.active').removeClass('active');
        },1500);
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// MDB Lightbox Init
$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});
