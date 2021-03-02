var nbClic=0; //création de la variable : nom et valeur initiale 
function compteClic() {
   
document.getElementById('texte1').value=nbClic;
nbClic++; //incrémentation de nbClic de 1

}

onClick="compteClic()";