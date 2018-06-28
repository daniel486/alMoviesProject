import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDescriptor } from '../../types/detailMovie.type';
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

  private routerSubscribe: any;
  public movie: MovieDescriptor = new MovieDescriptor();

  constructor(
    private route: ActivatedRoute,
    private detailService: DetailService
  ) { }

  ngOnInit() {
    console.log("trata");
    this.routerSubscribe = this.route.params.subscribe(params => {
      console.log("pasa");
      let idMovie: number = +params['id'];
      console.log(idMovie);
      this.detailService.getMovieDetail(idMovie).subscribe(
        (data: any) => {
          console.log("entro2");
          this.movie = data;
        }
      );
    });
  }

  ngOnDestroy(){
    this.routerSubscribe.unsubscribe();
  }

}
