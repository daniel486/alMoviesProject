import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActorDescriptor } from '../../types/detailActor.type';
import { DetailService } from '../../services/detail.service';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-detail-actor',
  templateUrl: './detail-actor.component.html',
  styleUrls: ['./detail-actor.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class DetailActorComponent implements OnInit {

  private routerSubscribeDetail: any;
  public actor: ActorDescriptor = new ActorDescriptor();

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService
  ) { }

  ngOnInit() {
    this.routerSubscribeDetail = this.route.params.subscribe(params => {
      let idActor: number = +params['id'];
      this.detailService.getActorDetail(idActor).subscribe(
        (data: any) => {
          this.actor = data;
        }
      );
    });
  }

  ngOnDestroy(){
    this.routerSubscribeDetail.unsubscribe();
  }

}
