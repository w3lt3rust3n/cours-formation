import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  nom:string = "michel";
  valeur:boolean = true;

  tab = [
    {
      nom: "lola",
      age: 10
    },
    {
      nom: 'mika',
      age: 40
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
