$(document).ready(function () {
    $("figure>img").mouseenter(function () { 
        $(this).animate({
            width: "+=5%",
            height: "+=5%"
        }, 300);
    }).mouseleave(function () {
        $(this).animate({
            width: "-=5%",
            height: "-=5%"
        }, 300);
    });
});