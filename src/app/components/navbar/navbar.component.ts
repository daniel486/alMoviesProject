import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  activeLink = "";
  movies = "Movies";
  actors = "Actors";
  tvShows = "TV Shows";
  fontColorClass = "txt-company-white";

  constructor() { }

  ngOnInit() {
  }

}
