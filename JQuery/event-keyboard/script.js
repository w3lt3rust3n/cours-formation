$(document).ready(function() {
    $('#nom').keydown(function () { // keydown() c'est quand tu presses une touche
        $(this).css("background", "blue"); // On utilise 
    });

    $('#nom').keyup(function () {
        $(this).css("background", "initial");
    })

    $('p').click(function () {
        alert($("a").attr("href"));
    });

    Cliquer sur l'image afficher l'attribut href et le modifier 

    $('img').click(function() {
        alert($("a").attr("href"));
        console.log($('href'));
        $('a').attr("href", "https://qwant.com"); // pour modifier le href
        alert($("a").attr("href"));
        $("a").text("Qwant");
        $(this).attr("src", "https://placehold.it/600"); // Pour changer les attributs d'une même balise, il faut refaire le $(...).attr().
        $(this).attr("alt", "photo de 600");
    })

    // Cliquer sur le a pour changer l'image et le alt
    $('a').click(function(e) {
        e.preventDefault();
        $('img').attr("src", "https://placehold.it/600");
        $('img').attr("alt", "photo de 600");
    })

})