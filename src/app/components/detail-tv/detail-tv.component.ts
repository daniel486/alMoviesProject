import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TvDescriptor } from '../../types/detailTvSeries.type';
import { SimilarSeriesDescriptor } from '../../types/similar.type';
import { CastSeriesDescriptor } from '../../types/cast.type';
import { DetailService } from '../../services/detail.service';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-detail-tv',
  templateUrl: './detail-tv.component.html',
  styleUrls: ['./detail-tv.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class DetailTvComponent implements OnInit {

  private routerSubscribeDetail: any;
  private routerSubscribeSimilar: any;
  private routerSubscribeCast: any;
  public serie: TvDescriptor = new TvDescriptor();
  public similar: SimilarSeriesDescriptor = new SimilarSeriesDescriptor();
  public cast: CastSeriesDescriptor = new CastSeriesDescriptor();
  public embedUrl: string = "https://www.youtube.com/embed/";

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService
  ) { }

  ngOnInit() {
    this.routerSubscribeDetail = this.route.params.subscribe(params => {
      let idSerie: number = +params['id'];
      this.detailService.getSerieDetail(idSerie).subscribe(
        (data: any) => {
          this.serie = data;
        }
      );
    });

    this.routerSubscribeSimilar = this.route.params.subscribe(params => {
      let idSerie: number = +params['id'];
      this.detailService.getSimilarSeries(idSerie).subscribe(
        (data: any) => {
          this.similar = data;
        }
      );
    });

    this.routerSubscribeCast = this.route.params.subscribe(params => {
      let idSerie: number = +params['id'];
      this.detailService.getSerieCast(idSerie).subscribe(
        (data: any) => {
          this.cast = data;
        }
      );
    });
  }

  ngOnDestroy(){
    this.routerSubscribeDetail.unsubscribe();
    this.routerSubscribeSimilar.unsubscribe();
    this.routerSubscribeCast.unsubscribe();
  }

  /**
   * This function return the url that will be put in the iframe that
   * will show the trailer.
   * @param key this param is the key from the youtube video
   */
  getSerieTrailerUrl(key: string): string{
    return this.embedUrl + key;
  }

  /**
   * In this function we construct the string that will appear with the
   * genres in the serie detail.
   * @param serie this param is a TvDescriptor to get the genres array
   */
  getDetailSerieGenres(serie: TvDescriptor): string{

    let genresDetail: string = "| ";

    for(let i: number = 0; i < serie.genres.length; i++){
      if(i == (serie.genres.length - 1)){
        genresDetail += serie.genres[i].name + " |";
      }else{
        genresDetail += serie.genres[i].name + ", ";
      }
    }

    return genresDetail;
  }

}
