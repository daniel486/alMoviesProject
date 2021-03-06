import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MovieList } from '../types/movies.type';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  private url = "https://api.themoviedb.org/3/movie/popular";
  private apiKey = "?api_key=14383e7a1e2a63bc1e67c0052614384f";

  constructor(
    private http: HttpClient
  ) { }

  /**
   * This function provides the popular movies from TMDB API to render the list
   * of movies.
   */
  getMovies(page: number){
    return this.http.get(this.url + this.apiKey + "&page=" + page)
    .pipe(
      map((data)=>{
        return MovieList.import(data);
        
      })
    );
  }
  

}
