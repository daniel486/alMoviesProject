import { Component, OnInit } from '@angular/core';
import { MovieList } from '../../types/movies.type';
import { MoviesService } from '../../services/movies.service';
import { routerTransition } from '../../router.animations';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ListMoviesComponent implements OnInit {

  public movies: MovieList = new MovieList();

  constructor(
    private moviesService: MoviesService
  ) { }

  ngOnInit() {
    this.moviesService.getMovies().subscribe(
      (data: any) => {
        this.movies = data;
        //console.log(this.movies);
      }
    );
  }

}
