


// priorité des calculs 

let x = 1 - 2 - 3; //Calcule (1 - 2) - 3 = -1 - 3 = - 4
let y = 1 - (2 - 3); //Calcule 1 - (2 - 3) = 1 - (- 1) = 1 + 1 = 2
let z = 2 ** 3 ** 2; //Calcule 3 ** 2 = 3 * 3 = 9 puis 2 ** 9 = 512

//On affiche les résultats dans une boite d'alerte en utilisant l'opérateur de concaténation "+". 
//On retourne à la ligne dans l'affichage avec "\n" 
alert('x contient : ' + x +
      '\ny contient : ' + y +
      '\nz contient : ' + z);

