import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { TvList } from '../types/tvseries.type';

@Injectable({
  providedIn: 'root'
})
export class TvseriesService {

  private url = "https://api.themoviedb.org/3/tv/popular";
  private apiKey = "?api_key=14383e7a1e2a63bc1e67c0052614384f";

  constructor(
    private http: HttpClient
  ) { }

  /**
   * This function provides the popular tv series from TMDB API to render the list
   * of TV Series in the list-tv component.
   */
  getTvSeries(page: number){
    return this.http.get(this.url + this.apiKey + "&page=" + page)
    .pipe(
      map((data)=>{
        return TvList.import(data);
      })
    );
  }

}
