import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: ['./list-actors.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ListActorsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
