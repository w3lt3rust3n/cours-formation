import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  linkTab = [
    {
      id: "html",
      name: "HTML"
    },
    {
      id: "css",
      name: "CSS"
    },
    {
      id: "js",
      name: "JavaScript"
    },
    {
      id: "jquery",
      name: "JQuery"
    },
    {
      id: "ng",
      name: "Angular"
    },
    {
      id: "ajax",
      name: "Ajax"
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
