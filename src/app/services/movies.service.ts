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

  
  getMovies(){
    //console.log(this.url + this.apiKey);
    return this.http.get(this.url + this.apiKey)
    .pipe(
      map((data)=>{
        //console.log(data);
        //console.log(MovieList.import(data));
        return MovieList.import(data);
        
      })
    );
  }
  

}
