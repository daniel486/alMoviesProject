import { Component, OnInit } from '@angular/core';
import { ActorList } from '../../types/actors.type';
import { ActorsService } from '../../services/actors.service';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-list-actors',
  templateUrl: './list-actors.component.html',
  styleUrls: ['./list-actors.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ListActorsComponent implements OnInit {

  public actors: ActorList = new ActorList();
  public actorClass: string = "actor-card";

  constructor(
    private actorsService: ActorsService
  ) { }

  ngOnInit() {
    this.actorsService.getActors().subscribe(
      (data: any) => {
        this.actors = data;
      }
    );
  }

}
