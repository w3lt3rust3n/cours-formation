// // Permet de mettre le <script> dans le head et consiste à attendre que tout charge avant de continuer. 
document.addEventListener("DOMContentLoaded", function() { // permet de lire le script quand tout le dom est chargé
//     console.log(document); // clg pour console log rapide
//     console.log(document.forms['formulaire']);

//     document.addEventListener('keyup', function() {
//         console.log(document.forms['formulaire'].value);
//         console.log(document.forms['formulaire']['pwarea'].value);
//     })

//     document.forms['formulaire']['country'].addEventListener('change', function() {
//         console.log(document.forms['formulaire']['country'].value);
//     })
//     // console.log(document.forms['formulaire']['sex'].value);
//     document.forms['formulaire']['sex'][0].addEventListener('click', function() {
//         console.log(document.forms['formulaire']['sex'][0].value);
//     })
//     document.forms['formulaire']['sex'][1].addEventListener('click', function() {
//         console.log(document.forms['formulaire']['sex'][1].value);
//     })

//     document.forms['formulaire']['sex'][2].addEventListener('click', function() {
//         console.log(document.forms['formulaire']['sex'][2].value);
//     })
    
    let monForm = document.forms['formulaire'];

//     // console.log(monForm['sex']);
//     // console.log(monForm.sex[0]);
//     // console.log(monForm.sex[1]);
//     // console.log(monForm.sex[2]);

//     let sex;
    
//     monForm.sex[0].addEventListener("change", function() {
//         sex = monForm.sex[0].value;
//         // console.log(sex);
//     })
//     monForm.sex[1].addEventListener("change", function() {
//         sex = monForm.sex[1].value;
//         // console.log(sex);
//     })

//     monForm.sex[2].addEventListener("change", function() {
//         sex = monForm.sex[2].value;
//         // console.log(sex);
//     })

//     let gender;
//     for(let i=0; i < monForm.sex.length; i++)
//     {
//         monForm.sex[i].addEventListener("change", function() {
//             gender = monForm.sex[i].value;
//             console.log('Gender ' + i + ' -> ' + gender);
//             // console.log('Gender -> ' + gender);
            
//         })
//     }

//     let i = 0;
//     while(i < monForm.sex.length){
//         let j = i;
//         monForm.sex[j].addEventListener("change", function(){
//             gender = monForm.sex[j].value;
//             console.log('Gender ' + x + ' -> ' + gender);
           
//         })
//         i++;
//     }

//     // --------- Checkbox ----------
//     // let html;   
//     console.dir(monForm.htmlskills);

//     function checking() {
//         console.log(monForm.htmlskills.checked);
//         if(monForm.htmlskills.checked === true) { // Peut aussi s'écrire if(monForm.htmlskills.checked) puisque c'est un boolean.
//             html = monForm.html.value;
//         } else {
//             html = "";
//         }

//         // On peut faire une ternaire pour condenser le code if else du haut.
//         // monForm.htmlskills.checked ? html = monForm.html.value : html = "";
//     }

    monForm.htmlskills.addEventListener("change", checking);
    
    // ------- Checkbox et toutes les valeurs -------------
    let html, css, php;

    function checking(valeurCheckBox, formName) {
        if (formName.checked) {/* === true */
            valeurCheckBox = formName.value;
        } else {
            valeurCheckBox = "";
        }
        console.log(valeurCheckBox);
    }
    // monForm.htmlskills.addEventListener("change", () => { checking(html, monForm.htmlskills) });
    monForm.htmlskills.addEventListener("change", () => { checking(html, monForm.htmlskills) });
    monForm.cssskills.addEventListener("change", () => { checking(css, monForm.cssskills) });
    monForm.phpskills.addEventListener("change", () => { checking(php, monForm.phpskills) });


// --------------------------------------------------------------
// ------ Submit ------------------------------------------------

console.dir(monForm);
monForm.addEventListener("submit", function(event) {
    event.preventDefault();
    if(monForm.pwarea.value.length < 6) {
        // document.querySelector(".erreur").innerHTML = "Vous n'avez pas rentré un mot de passe de plus de 6 caractères";
        errorInput(monForm.pwarea, "test");
    }
})

// Préparation d'une fonction pour encadrer en rouge le champs en cas d'erreur.
function errorInput(element, message) {
    // J'ajoute une classe (bordure rouge au champ en erreur)
    element.classList.add('errorForm');

    const errorMessage = document.createElement('div');
    errorMessage.innerText = message;
    errorMessage.classList.add('errorMessage');
    element.parentNode.append(errorMessage);
}


})