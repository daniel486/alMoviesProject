import { Component, OnInit } from '@angular/core';
import { TvList } from '../../types/tvseries.type';
import { TvseriesService } from '../../services/tvseries.service';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-list-tv',
  templateUrl: './list-tv.component.html',
  styleUrls: ['./list-tv.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ListTvComponent implements OnInit {

  public series: TvList = new TvList();

  constructor(
    private seriesService: TvseriesService
  ) { }

  ngOnInit() {
    this.seriesService.getTvSeries().subscribe(
      (data: any) => {
        this.series = data;
      }
    );
  }

}
