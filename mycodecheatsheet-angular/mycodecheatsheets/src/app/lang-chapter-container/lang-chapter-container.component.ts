import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lang-chapter-container',
  templateUrl: './lang-chapter-container.component.html',
  styleUrls: ['./lang-chapter-container.component.css']
})
export class LangChapterContainerComponent implements OnInit {
  chapterTab = [
    "Liste des balises",
    "Les metadonnées"
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
