let x = -10;

if(x > 1){
    console.log('x contient une valeur strictement supérieure à 1');
}else if(x == 1){
    console.log('x contient la valeur 1');
}else if(x < 1){
    console.log('x contient une valeur strictement inférieure à 1');
}else if(x < 0){
    console.log('x contient une valeur strictement inférieure à 0');
}else if(x < -2){
    console.log('x contient une valeur strictement inférieure à -2');
}else{
    console.log('La valeur de x n\'a pas pu être comparée à un nombre');
}