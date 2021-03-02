let prenom = "Je m'appelle Anne"; /*je déclare mes variables et je leur assigne une valeur*/
let dpt = 76;
let dpt2 = '76';

/* attention aux guillemets pour échappement : Let  a = "je m’appelle anne "
Let a = 'je m\'appelle anne' */



document.getElementById('p1').innerHTML = 'Type de prenom : ' + typeof prenom;
document.getElementById('p2').innerHTML = 'Type de dpt : ' + typeof dpt;
document.getElementById('p3').innerHTML = 'Type de dpt2 : ' + typeof dpt2;


/*document.getElementById  signifie : "dansle document(objet global), va chercher l'élément qui a pour Id ('') qui est dans le HTML", 
affiche 'type de ...' et à la suite (+) indique le type de chaque variable.*/