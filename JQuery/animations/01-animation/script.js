$(document).ready(function () {
    // animate(param, duree, fcncallabck)
    $('#afficher').click(function () {
        $('.box').animate({
            width: "100%",
            height: "100%"
        }, 12000, function () {
            console.log("c'est fini");
        });
    })
});