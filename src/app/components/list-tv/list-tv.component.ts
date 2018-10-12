import { Component, OnInit } from '@angular/core';
import { TvList } from '../../types/tvseries.type';
import { TvseriesService } from '../../services/tvseries.service';
import { routerTransition } from '../../router.animations';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-list-tv',
  templateUrl: './list-tv.component.html',
  styleUrls: ['./list-tv.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ListTvComponent implements OnInit {

  public series: TvList = new TvList();
  length = 0;
  pages = 0;
  page = 1;

  constructor(
    private seriesService: TvseriesService
  ) { }

  /**
   * This function is going to change the actual page of the popular series.
   */
  setActualPage(event: PageEvent) {
    event.pageIndex = event.pageIndex + 1;
    this.seriesService.getTvSeries(event.pageIndex).subscribe(
      (data: any) => {
        this.series = data;
      }
    );
  }

  ngOnInit() {
    this.seriesService.getTvSeries(1).subscribe(
      (data: any) => {
        this.series = data;
        this.length = this.series.total_results;
        this.pages = this.series.total_pages;
      }
    );
  }

}
