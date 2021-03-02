// Ajouter une classe sans passer par le CSS.

let titre = document.querySelector("h1");
console.log(titre);
titre.classList.add("maClasse");

let flex = document.querySelector("div");
flex.classList.add("flex");

let img = document.querySelector("img");
console.log(img);
img.getAttribute("src");
console.log(img.getAttribute("src"));
img.setAttribute("src", "https://placehold.it/200");

let url = document.querySelector("a");
console.log(url);
url.setAttribute("href", "https://google.com");

//modifier l'attribute href de l'élément a. Exemple: exemple.com => google.com

let lien = document.querySelector("a");
lien.setAttribute("href", "https://google.com");
lien.setAttribute("target", "_blank");
lien.innerText = "Google";
