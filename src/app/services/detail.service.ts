import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MovieDescriptor } from '../types/detailMovie.type';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private urlMovieDetail = "https://api.themoviedb.org/3/movie/";
  private apiKey = "?api_key=14383e7a1e2a63bc1e67c0052614384f";

  constructor(
    private http: HttpClient
  ) { }

  getMovieDetail(idMovie:number){
    return this.http.get(this.urlMovieDetail + idMovie + this.apiKey)
    .pipe(
      map((data)=>{
        return MovieDescriptor.import(data);
      })
    );
  }
}
