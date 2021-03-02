// let ligne = document.querySelector('tbody tr');
// console.log(ligne);
// ligne.addEventListener("click", function(){
//     ligne.classList.add("background");
// });

let lignes = document.querySelectorAll('tbody tr');
console.log(lignes);

for(let i = 0; i <lignes.length; i++){
    lignes[i].addEventListener("click", function(){
        lignes[i].classList.toggle('background');
});
}

let link = document.querySelector("a");
console.log(link);
link.addEventListener("click", function(event) {
    event.preventDefault(); // Désactiveer le lien
    console.log(event);
    let cible = link.getAttribute("href"); // Récupérer le lien
    console.log(cible);
    let response = confirm('Voulez-vous sortir du site ?'); // Confirmation
    if(response == true) { // Si confirlmation est vrai
        window.location.href = cible; // affectation du l'url
    } else {
        alert('merci de rester avec nous');
    }
});