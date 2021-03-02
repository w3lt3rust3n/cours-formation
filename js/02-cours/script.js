// // Récupération de l'objet window (le plus haut dans la hiérarchie).
// console.log(window);
// // Récupération de l'objet document 
// console.log(document);

// // Variable qui contient l'ensemble des <p> du HTML.
// let tableauP = document.getElementsByTagName("p");

// //innerHTML pour lire le contenu de la balise. forEach ne fonctionne pas avec ce type de boucle.
// for (let i = 0; i < tableauP.length; i++) {
//   console.log(tableauP[i].innerHTML);
// }

// // Même chose mais pour les class.
// let tabClass = document.getElementsByClassName("introduction");

// for (let x = 0; x < tabClass.length; x++) {
//   console.log(tabClass[x].innerHTML);
// }

// let titre = document.getElementById("titre");
// console.log(titre);
// console.log(titre.innerHTML);

// // Ce for() ne fonctionne pas car les id ne sont pas des tableau. Ils sont uniques
// // for (let i=0; i < titre.length; i++)
// // { 
// //     console.log(titre[i].innerHTML);
// // }
// //
//////////////// Mettre du HTML avec JS

// // Création d'un titre en utilisant la balise <h2></h2>
// let h2 = document.createElement('h2');

// // <h2></h2>
// let contenuH2 = document.createTextNode("Mon titre 2");
// // mon titre 2
// h2.append(contenuH2);
// //<h2>Mon titre 2</h2>
// let position = document.getElementById("titre").parentNode;

// position.insertBefore(h2, document.getElementById("titre").nextSibling); // On peut pas insérer après donc on utilise .nextSibling pour dire après.

// let ul = document.createElement("ul");
// let li = document.createElement("li");

// let contenuLi = document.createTextNode("Lundi");
// // append ou appendChild.
// li.append(contenuLi);
// ul.append(li);
// // ul.appendChild(li);
// // li.appendChild(contenuLi);

// // On utilise [0] après getElementsByTagName parce qu'il peut y avoir plusieurs h2 donc on utilise l'index 0. 
// let positionH2 = document.getElementsByTagName("h2")[0].parentNode;
// positionH2.insertBefore(ul, document.getElementsByTagName("h2")[0].nextSibling); 

// // Les Query Selector pour manipuler le CSS

// let h1Style = document.querySelector("h1");
// console.log(h1Style);
// h1Style.style.backgroundColor = "red";

// let pStyle = document.querySelectorAll("p");
// console.log("Nombre de <p> : " + pStyle.length);

// for(let i = 0; i < pStyle.length; i++)
// {
//     pStyle[i].style.color = "yellow";
// }

// Exercice: Créer un <p> qui contient un <span> avec 5 lorem en gras.

// let p = document.createElement("p");
// let span = document.createElement("span");
// let contenuP = document.createTextNode("Lorem ipsum dolor sit amet.");

// p.appendChild(span);
// span.appendChild(contenuP);

// let positionP = document.getElementsByTagName('p')[4].parentNode;
// positionP.insertBefore(p, document.getElementsByTagName("p")[4].nextSibling);

// let pspan = document.querySelector("span");
// pspan.style.fontWeight = "bold";

// Exo: Sans utiliser createElement pour le <span>

let span = document.createElement("p");
span.innerHTML = "<span>Bonjour !</span>";
let positionSpan = document.getElementById("titre").parentNode;
positionSpan.insertBefore(span, document.getElementById('titre').nextSibling);

let span1 = document.querySelector('span');
span.style.color = 'green';


