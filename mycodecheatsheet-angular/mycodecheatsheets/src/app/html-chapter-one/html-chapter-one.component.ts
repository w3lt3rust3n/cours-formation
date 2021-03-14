import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-chapter-one',
  templateUrl: './html-chapter-one.component.html',
  styleUrls: ['./html-chapter-one.component.css']
})
export class HtmlChapterOneComponent implements OnInit {
  ols = [{
    class: "html-1",
    name: "Balises de premier niveau"
  },
  {
    class: "html-2",
    name: "Balises d'en-tête"
  },
  {
    class: "html-3",
    name: "Balises de structuration du texte"
  },
  {
    class: "html-4",
    name: "Balises de liste"
  },
  {
    class: "html-5",
    name: "Balises de tableau"
  },
  {
    class: "html-6",
    name: "Balises de formulaire"
  },
  {
    class: "html-7",
    name: "Balises sectionnantes"
  }
  ];

  lsOne = [{
    code: "<html>",
    desc: "Balise principale"
  },
  {
    code: "<head>",
    desc: "En-tête de la page"
  },
  {
    code: "<body>",
    desc: "Corps de la page"
  }
  ];

  lsTwo = [{
    code: "<meta>",
    desc: "Métadonnées de la page web (charset, mots-clés, etc...)"
  },
  {
    code: "<script>",
    desc: "Code JavaScript"
  },
  {
    code: "<style>",
    desc: "Code CSS"
  },
  {
    code: "<title>",
    desc: "Titre de la page"
  }];

  lsThree = [{
    code: "<abbr>",
    desc: "Abbréviation"
  },
  {
    code: "<blockquote>",
    desc: "Citation (longue)"
  },
  {
    code: "<cite>",
    desc: "Citation du titre d'une oeuvre ou d'un évènement"
  },
  {
    code: "<q>",
    desc: "Citation (courte)"
  },
  {
    code: "<sup>",
    desc: "Exposant"
  },
  {
    code: "<sub>",
    desc: "Indice"
  },
  {
    code: "<strong>",
    desc: "Mise en valeur forte"
  },
  {
    code: "<em>",
    desc: "Mise en valeur normale"
  },
  {
    code: "<mark>",
    desc: "Mise en valeur visuelle"
  },
  {
    code: "<h1>",
    desc: "Titre de niveau 1"
  },
  {
    code: "<h2>",
    desc: "Titre de niveau 2"
  },
  {
    code: "<h3>",
    desc: "Titre de niveau 3"
  },
  {
    code: "<h4>",
    desc: "Titre de niveau 4"
  },
  {
    code: "<h5>",
    desc: "Titre de niveau 5"
  },
  {
    code: "<h6>",
    desc: "Titre de niveau 6"
  },
  {
    code: "<img>",
    desc: "Image"
  },
  {
    code: "<figure>",
    desc: "Figure (image, code, etc.)"
  },
  {
    code: "<figcaption>",
    desc: "Description de la figure"
  },
  {
    code: "audio",
    desc: "Son"
  },
  {
    code: "<video>",
    desc: "Vidéo"
  },
  {
    code: "<source>",
    desc: "Format pour les balises <audio> et <video>"
  },
  {
    code: "<a>",
    desc: "LIen hypertext"
  },
  {
    code: "<br>",
    desc: "Retour à la ligne"
  },
  {
    code: "<address>",
    desc: "Adresse de contact"
  },
  {
    code: "<del>",
    desc: "Texte supprimé"
  },
  {
    code: "<ins>",
    desc: "Texte inséré"
  },
  {
    code: "<dfn>",
    desc: "Définition"
  },
  {
    code: "<kbd>",
    desc: "Saisie clavier"
  },
  {
    code: "<pre>",
    desc: "Affichage formaté (pour les codes sources)"
  },
  {
    code: "<progress>",
    desc: "Barre de progression"
  },
  {
    code: "<time>",
    desc: "Date ou heure"
  }];

  lsFour = [{
    code: "<ul>",
    desc: "Liste à puces non numérotée"
  },
  {
    code: "<ol>",
    desc: "Liste numérotée"
  },
  {
    code: "<li>",
    desc: "Élément de la liste"
  },
  {
    code: "<dl>",
    desc: "Liste de définitions"
  },
  {
    code: "<dt>",
    desc: "Terme à définir"
  },
  {
    code: "<dd>",
    desc: "Définition du terme"
  }];

  lsFive = [{
    code: "<table>",
    desc: "Tableau"
  },
  {
    code: "<tcaption>",
    desc: "Titre du tableau"
  },
  {
    code: "<tr>",
    desc: "Ligne de tableau"
  },
  {
    code: "<th>",
    desc: "Cellule d'en-tête"
  },
  {
    code: "<td>",
    desc: "Cellule"
  },
  {
    code: "<thead>",
    desc: "Section de l'en-tête du tableau"
  },
  {
    code: "<tbody>",
    desc: "Section du corps du tableau"
  },
  {
    code: "<tfoot>",
    desc: "Section du pied de page"
  }];

  lsSix = [{
    code: "<form>",
    desc: "Formulaire"
  },
  {
    code: "<fieldset>",
    desc: "Groupe de champs"
  },
  {
    code: "<legend>",
    desc: "Titre d'un groupe de champs"
  },
  {
    code: "<label>",
    desc: "Libellé d'un champs"
  },
  {
    code: "<input>",
    desc: "Champs de formulaire"
  },
  {
    code: "<textarea>",
    desc: "Zone de saisie multilignes"
  },
  {
    code: "<select>",
    desc: "Liste déroulante"
  },
  {
    code: "<option>",
    desc: "Élément d'une liste déroulante"
  },
  {
    code: "<optgroup>",
    desc: "Groupe d'éléments d'une liste déroulante"
  }];

  lsSeven = [{
    code: "<header>",
    desc: "En-tête"
  },
  {
    code: "<nav>",
    desc: "Liens principaux de navigation"
  },
  {
    code: "<footer>",
    desc: "Pied de page"
  },
  {
    code: "<section>",
    desc: "Section de page"
  },
  {
    code: "<article>",
    desc: "Article (contenu autonome)"
  },
  {
    code: "<aside>",
    desc: "INformation complémentaires"
  }];

  constructor() { }

  ngOnInit(): void {
  }

}
