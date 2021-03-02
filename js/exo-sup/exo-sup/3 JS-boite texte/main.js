function afficheMessage() {
    var rep=prompt('Quelle est la capitale de la France ?');
    if (rep=="Paris"||rep=="PARIS" ||rep=="paris") {
    alert('BRAVO !!!');
    } else {
    alert('Réponse incorrecte !');
    }
}

onClick="afficheMessage()";