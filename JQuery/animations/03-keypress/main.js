$(document).ready(function() {
    $('p').append('je suis a la fin du texte<br>'); // Positionne à la fin de <p> pour y mettre du contenu.
    $('p').prepend('je suis au debut<br>'); // Positionne au début de <p> pour y mettre du contenu.
    $('p').after("<h2>Un titre 2</h2>"); // Positionne APRES <p>.
    $('p').before('<h1>Mon Titre 1'); // Positionne AVANT <p>.

    // Ajouter une div avec une image après le p.
    $('p').after('<div><img src="https://placehold.it/350" alt="">');

    $(window).scroll(() => {
        $(".information").fadeIn("slow");
    });
});

