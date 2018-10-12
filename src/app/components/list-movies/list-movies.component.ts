import { Component, OnInit } from '@angular/core';
import { MovieList } from '../../types/movies.type';
import { MoviesService } from '../../services/movies.service';
import { routerTransition } from '../../router.animations';
import { PageEvent } from '@angular/material';

@Component({
  selector: 'app-list-movies',
  templateUrl: './list-movies.component.html',
  styleUrls: ['./list-movies.component.scss'],
  animations: [routerTransition()],
  host: {'[@routerTransition]': ''}
})
export class ListMoviesComponent implements OnInit {

  public movies: MovieList = new MovieList();
  length = 0;
  pages = 0;

  constructor(
    private moviesService: MoviesService
  ) { }

  setActualPage(event: PageEvent) {
    event.pageIndex = event.pageIndex + 1;
    this.moviesService.getMovies(event.pageIndex).subscribe(
      (data: any) => {
        this.movies = data;
      }
    );
  }

  ngOnInit() {
    this.moviesService.getMovies(1).subscribe(
      (data: any) => {
        this.movies = data;
        this.length = this.movies.total_results;
        this.pages = this.movies.total_pages;
      }
    );
  }

}
