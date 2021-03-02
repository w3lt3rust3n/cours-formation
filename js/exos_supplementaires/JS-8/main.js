let x = 7; //On stocke le chiffre 7 dans la variable x

/*Les comparaisons sont effectuées avant l'affectation. Le JavaScript va donc
 *commencer par comparer et renvoyer true ou false et nous allons stocker ce
 *résultat dans nos variables test*/
let test1 = x == 7;
let test2 = x === 7;
let test3 = x == '7';
let test4 = x === '7';
let test5 = x != '7';
let test6 = x !== '7';
let test7 = x > 7;
let test8 = x >= 7;
let test9 = x < 7;

alert('Valeur dans la variable x égale à 7 (en valeur) ? : ' + test1 +
      '\nValeur dans la variable x égale à 7 (valeur & type) ? : ' + test2 +
      '\nValeur dans la variable x égale à "7" (en valeur) ? : ' + test3 +
      '\nValeur dans la variable x égale à "7" (valeur & type) ? : ' + test4 +
      '\nValeur dans la variable x différente de "7" (en valeur) ? : ' + test5 +
      '\nValeur dans la variable x différente de "7" (valeur & type) ? : ' + test6 +
      '\nValeur dans la variable x strictement supérieure à 7 ? : ' + test7 +
      '\nValeur dans la variable x supérieure ou égale à 7 ? : ' + test8 +
      '\nValeur dans la variable x strictement inférieure à 7 ? : ' + test9);