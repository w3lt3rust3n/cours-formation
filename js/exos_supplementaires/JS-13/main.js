let x = 15;
let y = -20;
let z = 0;

if(x <= 25 - 15 && x >= 0 || y < 0){
    document.getElementById('p1').innerHTML =
    'Cette phrase s\'affiche si x contient une valeur comprise entre 0 et 10 OU si y contient une valeur strictement négative (ou si ces deux conditions sont réunies)';
}

if(x <= 25 - 15 && (x >= 0 || y < 0)){
    document.getElementById('p2').innerHTML =
    'Cette phrase s\'affiche si x contient une valeur inférieure ou égale à 10 ET si soit x contient une valeur supérieure à 0, soit y contient une valeur strictement négative (soit les deux conditions sont réunies)';
}

if(!z == true){
    document.getElementById('p3').innerHTML =
    'z contient une valeur évaluée à false';
}





