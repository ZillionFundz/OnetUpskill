$(document).ready(function () {
    $('button').click(function (e) {
        $(this).append('<span></span>');
        var top = e.pageY;
        var left = e.pageX;
        $(this).children().offset({ top: top, left: left }).fadeOut(500);
    });
})