document.addEventListener("DOMContentLoaded", function() {


    let monForm = document.forms['formulaires'];

    document.addEventListener('keyup', function() {
        console.log(document.forms['formulaires']['nom'].value);
    })
    document.forms['formulaires']['pays'].addEventListener('change', function() {
            console.log(document.forms['formulaires']['pays'].value);
        })
        /* console.log(monForm['sexe']);
        console.log(monForm.sexe[0]);
        console.log(monForm.sexe[1]); */
    let sex;

    /* monForm.sexe[0].addEventListener("change", function() {
        sex = monForm.sexe[0].value;
        console.log(sex);
    })
    monForm.sexe[1].addEventListener("change", function() {
        sex = monForm.sexe[1].value;
        console.log(sex);
    }) */
    /* for (let i = 0; i < monForm.sexe.length; i++) {
        monForm.sexe[i].addEventListener("change", function() {
            sex = monForm.sexe[i].value;
            console.log(sex);
        })
    } */
    let i = 0;
    while (i < monForm.sexe.length) {
        let j = i;
        monForm.sexe[j].addEventListener("change", function() {
            sex = monForm.sexe[j].value;
            console.log(sex);
        })
        i++;
    }
    console.log(i);
    // checkbox
    let html, css, php;

    function checking(valeurCheckBox, formName) {
        if (formName.checked /*  === true */ ) {
            valeurCheckBox = formName.value;
        } else {
            valeurCheckBox = "";
        }
        // ternaire identique à la condition précédente
        //monForm.html.checked ? html = monForm.html.value : html = "";
        console.log(valeurCheckBox);
    }
    monForm.html.addEventListener("change",
        () => { checking(html, monForm.html) });

    monForm.css.addEventListener("change", () => { checking(css, monForm.css) });
    monForm.php.addEventListener("change", () => { checking(php, monForm.php) });
    // Préparation d'une fonction chargée d'encadrer en rouge le champ
    // en erreur
    function errorInput(element, message) {
        //J'ajoute une class(bordure rouge au champ en erreur)
        element.classList.add('errorForm');
        const errorMessage = document.createElement('div');
        errorMessage.innerText = message;
        errorMessage.classList.add('errorMessage');
        element.parentNode.append(errorMessage);
    }
    // Gestion du submit et récuperation des valeurs
    console.dir(monForm);
    monForm.addEventListener("submit", function(event) {
        event.preventDefault();
        //récuperer les valeurs envoyées
        console.log("preventdefault", monForm.nom.value);
        //vérification de champ prenom vide
        if (monForm.prenom.value.length < 1) {
            //envoi d'un messae d'erreur personnalisé
            errorInput(monForm.prenom, "Vous n'avez pas rempli ce champs !!!");
        }
        //vérification d'un mot de pass de plus 6 chars
        if (monForm.prenom.value.length < 6) {
            //envoi d'un messae d'erreur personnalisé
            errorInput(monForm.pass, "format incorrect");
        }
    })



})