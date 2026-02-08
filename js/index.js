$(document).ready(function() {
    $('.pub-image-hover').mouseover(function() {
        $(this).find('video').show();
        $(this).find('img').hide();
    });
    $('.pub-image-hover').mouseout(function() {
        $(this).find('video').hide();
        $(this).find('img').show();
    });
});
