// JavaScript Document

// Navbaren blir fixed på toppen av siden selv om du scroller, så lenge vinduet er mindre enn 768px bredt.
// Med hjelp herfra: http://stackoverflow.com/questions/11047514/jquery-add-remove-class-when-window-width-changes

function resize() {
    if ($(window).width() < 768) {
     $('nav').addClass('navbar-fixed-top');
    }
    else {$('nav').removeClass('navbar-fixed-top');}
}

$(document).ready( function() {
    $(window).resize(resize);
    resize();
});
