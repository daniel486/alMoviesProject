import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDescriptor } from '../../types/detailMovie.type';
import { SimilarMoviesDescriptor } from '../../types/similar.type';
import { CastMoviesDescriptor } from '../../types/cast.type';
import { DetailService } from '../../services/detail.service';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-detail-movie',
  templateUrl: './detail-movie.component.html',
  styleUrls: ['./detail-movie.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class DetailMovieComponent implements OnInit {

  private routerSubscribeDetail: any;
  private routerSubscribeSimilar: any;
  private routerSubscribeCast: any;
  public movie: MovieDescriptor = new MovieDescriptor();
  public similar: SimilarMoviesDescriptor = new SimilarMoviesDescriptor();
  public cast: CastMoviesDescriptor = new CastMoviesDescriptor();
  public embedUrl: string = "https://www.youtube.com/embed/";

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService
  ) { }

  ngOnInit() {
    this.routerSubscribeDetail = this.route.params.subscribe(params => {
      let idMovie: number = +params['id'];
      this.detailService.getMovieDetail(idMovie).subscribe(
        (data: any) => {
          this.movie = data;
        }
      );
    });

    this.routerSubscribeSimilar = this.route.params.subscribe(params => {
      let idMovie: number = +params['id'];
      this.detailService.getSimilarMovies(idMovie).subscribe(
        (data: any) => {
          this.similar = data;
        }
      );
    });

    this.routerSubscribeCast = this.route.params.subscribe(params => {
      let idMovie: number = +params['id'];
      this.detailService.getMovieCast(idMovie).subscribe(
        (data: any) => {
          console.log(data);
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
  getMovieTrailerUrl(key: string): string{
    return this.embedUrl + key;
  }

  /**
   * In this function we construct the string that will appear with the
   * genres in the movie detail.
   * @param mov this param is a MovieDescriptor to get the genres array
   */
  getDetailMovieGenres(movie: MovieDescriptor): string{

    let genresDetail: string = "| ";

    for(let i: number = 0; i < movie.genres.length; i++){
      if(i == (movie.genres.length - 1)){
        genresDetail += movie.genres[i].name + " |";
      }else{
        genresDetail += movie.genres[i].name + ", ";
      }
    }

    return genresDetail;
  }

}
