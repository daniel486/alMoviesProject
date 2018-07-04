import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MovieDescriptor } from '../types/detailMovie.type';
import { SimilarMoviesDescriptor } from '../types/similar.type';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private urlMovieDetail: string = "https://api.themoviedb.org/3/movie/";
  private apiKey: string = "?api_key=14383e7a1e2a63bc1e67c0052614384f";
  private appendResponseVideos: string = "&append_to_response=videos";
  private similar: string = "/similar";

  constructor(
    private http: HttpClient
  ) { }

  getMovieDetail(idMovie:number){
    return this.http.get(this.urlMovieDetail + idMovie + this.apiKey + this.appendResponseVideos)
    .pipe(
      map((data)=>{
        return MovieDescriptor.import(data);
      })
    );
  }

  getSimilarMovies(idMovie:number){
    return this.http.get(this.urlMovieDetail + idMovie + this.similar + this.apiKey)
    .pipe(
      map((data)=>{
        return SimilarMoviesDescriptor.import(data);
      })
    );
  }
}
