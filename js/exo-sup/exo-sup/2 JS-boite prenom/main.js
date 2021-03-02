function afficheMessage() {
    alert('Bonjour '+document.getElementById('texte').value+' !');
    }
onClick="afficheMessage()";
//je concatène bonjour avec la valeur de l'élément qui a l'id 'texte' et je concatène un !
//j'exécute la fonction "affiche message" au clic.