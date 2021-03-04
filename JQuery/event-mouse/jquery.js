// $(selecteur).methode(function() {});
// C'est pareil que pour charger le js quand il est déclaré dans le <head></head>
$(document).ready(function() {

    // $('p').hide(); // Méthode pour cacher le contenu d'une balise.
    // console.log($('p')); // Pour obtenir les valeurs  de <p>
    // $('h1').hide(); 
    // $('.section').show(); // Ca fonctionne aussi avec les class.
    // $('h1 span').hide(); // On peut mettre plusieurs balises dans le sélecteur. hide() pour cacher.
    // $('p span').show(); // show() pour montrer. 
    //$('.textToEdit').replaceWith("Mon Texte");
    // $('.textToEdit').text("Mon Texte");
    // $('div').html("<h2>J'ai modifié mon texte</h2>");

    // $("#afficher").click(function() {
    //     $("h2").hide();
    // });

    // $("#dbclick").dblclick(function () {
    //     $(".madiv").css("background-color", "yellow");
    // });

    // Le code si dessous sert à changer de couleur au double-click. 
    let changing = true; // On a besoin de déclarer un booleen pour opérer le changement. 
    $("#dbclick").dblclick(function() { //dblclick() est une méthode pour utiliser le double-clique de la souris.
        if(changing == true) { // 
            $(".madiv").css("background-color", "yellow");
            changing = false;
        } else {
            $(".madiv").css("background-color", "red");
            changing = true;
        }
    });

    $(".mouse").mouseenter(function () { 
        $(this).css("font-size", "50px");
    });

    $(".mouse").mouseleave(function () { 
        $(this).css("font-size", "30px");
    });
    

    // function hover(elementName) {
    //     $(elementName).mouseenter(function () {
    //         $(this).css("background", "red");
    //     });
    //     $(elementName).mouseleave(function () {
    //         $(this).css("background", "yellow");
    //     })
    // }
    // hover(".mouse");

    $(".mouse").hover(function (){
        $(".mouse").mouseenter(function () {
            $(this).css("background", "red");
        });
        $(".mouse").mouseleave(function () {
            $(this).css("background", "yellow");
        })
    })
});