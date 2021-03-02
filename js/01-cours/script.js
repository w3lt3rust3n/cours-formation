// // TYPES DE BASE
// let variable;
// let age = 20;
// let nom = "Maxence";
// let vrai = true;
// let formule = undefined;

// console.log(variable);
// console.log(age);
// console.log(nom);

// console.log(typeof age);
// console.log(typeof nom);
// console.log(typeof variable);

// age = "lola";
// console.log("age vaut :" + typeof age);

// // ------------------------------------------------------

// let nombre1 = 14;
// let nombre2 = 42;

// // let somme = nombre1 + nombre2;

// console.log(nombre1 + nombre2);

// const ville = "Paris";
// console.log(ville);

// // TYPE COMPLEXE

// let tableau = [1, 2, 3];
// console.log(tableau[0]);
// console.log(tableau[2]);

// let jours = [
//   "lundi",
//   "mardi",
//   "mercredi",
//   "jeudi",
//   "vendredi",
//   "samedi",
//   "dimanche",
// ];
// jours[2] = "sa me dit";
// console.log(jours[2]);

// let multi = ["linux", 1, false];
// console.log(multi[0]);
// console.log(multi[1]);
// console.log(multi[2]);
// console.log("Le type est : " + typeof multi);

// let voiture = {
//   couleur: "rouge",
//   vitesse: 1000,
// };

// console.log(voiture);
// console.log(voiture.couleur);
// console.log(voiture["couleur"]);

// let personne = {
//   prenom: "Maxence",
//   age: 29,
// };

// console.log(personne);
// console.log(personne.prenom);
// console.log(personne.age);

// // Fonction pour afficher des infos dans console.log
// function affichage() {
//   console.log("salut");
// }

// affichage();

// function addition() {
//   console.log(4 + 2);
// }

// addition();

// function additionTest(var1, var2) {
//   console.log(var1 + var2);
// }

// additionTest(4, 4);
// additionTest("ciel ", "si ceci se sait");

// // ---------------------------------------------------

// let exercice = "exercice";
// console.log("mon " + exercice);

// let a = 10;
// let b = 10;
// let c = a + b;

// console.log("La somme est égale à : " + (a + b));
// console.log("La somme est égale à : " + c);

// // -------- CONDITION IF ELSE -------------------------

// if (4 > 2) {
//   console.log("Le chiffre 4 est sup à 2");
// } else {
//   console.log("Le chiffre " + a + "est inf à" + 2);
// }

// let x = 10;

// if(x == 10){
//     console.log("Le code est bon.");
// } else {
//     console.log("Le code est erroné.");
// }

// // Exo: Si le nombre d'articles est inférieur à 5 pas de promos sinon si le nombre est supérieur à 5 et inférieur à 10 alors 30% sur le panier, sinon 50% sur le panier.

// let article = 8;

// if(article < 5){
//     console.log("Pas de promotion");
// } else if((article > 5) || (article < 10)){
//     console.log("Promotion de 30% sur le panier");
// } else{
//     console.log("50% sur le panier");
// }

// // --- SWITCH ---

// let couleur = "rouge";

// switch(couleur){
//     case "blue":
//         console.log('la couleur est blue');
//         break;
//     case "jaune":
//         console.log("la couleur est jaune");
//         break;
//     case "rouge":
//         console.log("la couleur est rouge");
//         break;
//     default:
//         console.log("Aucune couleur");
//         break;
// }

// // Exo: Créer un switch pour les jours de la semaine sachant que le jour déclaré est le venderdi

// let jour = "vendredi";
// switch(jour){
//     case "lundi":
//         console.log("On est lundi");
//         break;
//     case "mardi":
//         console.log("On est mardi");
//         break;
//     case "mercredi":
//         console.log("On est mercredi");
//         break;
//     case "jeudi":
//         console.log("On est jeudi");
//         break;
//     case "vendredi":
//         console.log("On est vendredi");
//         break;
//     case "samedi":
//         console.log("On est samedi");
//         break;
//     case "dimanche":
//         console.log("On est dimanche");
//         break;
//     default:
//         console.log("On est un jour inconnu");
//     break;
// }

// // ------ Les Boucles ---------//
// let days = [
//     "lundi",
//     "mardi",
//     "mercredi",
//     "jeudi",
//     "vendredi",
//     "samedi",
//     "dimanche",
//   ];

//   for(let i=0; i < 10; i++){
//     console.log(i);
//     console.log(days[i]);
// }

// let j = 0;
// while(j<60){
//     console.log(j);
//     j++; // Ou j + 1;
// }

// tableau [ 14, "nina", true ]
// l'affichage indice 1 => 14 indice 2 => "nina" indice 3 => true;

// let valeurs = [14, 
//                 "nina",
//                 true,
// ];

// // 
// let k = 0;

// while(k < valeurs.length){
//     console.log("indice " + (k + 1) + "=>" + valeurs[k]);
//     k++;
// }

// // Impro personnel (pas le cours)
// let tablo = ["kiki", 
// "tout", 
// "dur",
// ];

// let x = "mon";
// let y = "ami";

// for(let i = 0; i < tablo.length; i++)
// {
//     tablo.push(x);
//     tablo.push(y);
// }

// for(let i = 0; i < tablo.length; i++)
// {
//     console.log(tablo[i]);
// }

// tabelement
tabElement = [1, 2, 3];
for(let element of tabElement)
{
    console.log(element);
}

// Foreach
tabElement.forEach(element => {
    console.log(element);
});

// Exo: tableau de couleur tabColor=['rouge', 'jaune', 'noir'];
let tabColor = ['rouge', 'jaune', 'noir', 'vert', 'bleu'];

for(let element of tabColor)
{
    console.log(element);
}

tabColor.forEach(element => {
    console.log(element);
})
