$(document).ready(function () {

    // L'ajout de class CSS.
    $("p").click(function () {
        $(this).addClass("fontSize");
    });

    $("h1").mouseenter(function () { 
        $("p").removeClass("fontSize");
    });

    $("p").mouseenter(function () {
        $(this).toggleClass("fontSize");
    })
});