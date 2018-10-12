import { Component, OnInit } from '@angular/core';
import { ActorList } from '../../types/actors.type';
import { ActorsService } from '../../services/actors.service';
import { routerTransition } from '../../router.animations';
import { PageEvent } from '@angular/material';

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
  length = 0;
  pages = 0;

  constructor(
    private actorsService: ActorsService
  ) { }

  setActualPage(event: PageEvent) {
    event.pageIndex = event.pageIndex + 1;
    this.actorsService.getActors(event.pageIndex).subscribe(
      (data: any) => {
        this.actors = data;
      }
    );
  }

  ngOnInit() {
    this.actorsService.getActors(1).subscribe(
      (data: any) => {
        this.actors = data;
        this.length = this.actors.total_results;
        this.pages = this.actors.total_pages;
      }
    );
  }

}
