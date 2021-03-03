// SCROLL 1
// console.log(window);
// let p = document.querySelector('.text');
// console.log(p);

// window.addEventListener("scroll", function() {
//     console.log(window.scrollY);
//     if(window.scrollY > 400){
//         p.classList.add("changeBackground");
//     } else {
//         p.classList.remove("changeBackground");
//     }
// })

// SCROLL 2

let compteur = document.querySelector('.compteur'); // Tu prends ta div (class="compteur" dans mon HTML).
//console.log(compteur);
let val; // Tu déclares une variable vide pour y stocker une valeur (en l'occurence le scrollY)

window.addEventListener("scroll", function() {
    val = window.scrollY; // Tu stockes la valeur de scrollY dans val
    compteur.classList.add("compteur");// Tu ajoutes compteur
    compteur.innerText = "Scroll : " + val; 
    console.log();
})

// let p = document.querySelector('text');
// console.log(p);

// window.addEventListener("scroll", function() {
//     console.log(window.scrollY);
//     if(window.scrollY > 400) {
//         p.classList.add("changeBackground");
//     } else {
//         p.classList.remove("changeBackground");
//     }
// })