import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-html-header',
  templateUrl: './html-header.component.html',
  styleUrls: ['./html-header.component.css']
})
export class HtmlHeaderComponent implements OnInit {
  langTitleTab = [ {
    class: "html-title",
    title: "HTML - HyperText Markup Langage",
    ext: "myFile.html"
  },
  {
    class: "css-title",
    title: "CSS - Cascading Style Sheets",
    ext: "myFile.css"
  },
  {
    class: "js-title",
    title: "JS - JavaScript",
    ext: "myFile.js"
  },
  {
    class: "jquery-title",
    title: "JQuery (Librairie JS)",
    ext: "myFile.js"
  },
  {
    class: "ng-title",
    title: "Angular (Framework)",
    ext: "Aucune extension relative à Angular"
  },
  {
    class: "ajax-title",
    title: "Ajax -  Asynchronous JavaScript And XML",
    ext: "myFile.js"
  }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
