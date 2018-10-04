import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { ActorList } from '../types/actors.type';

@Injectable({
  providedIn: 'root'
})
export class ActorsService {

  private url = "https://api.themoviedb.org/3/person/popular";
  private apiKey = "?api_key=14383e7a1e2a63bc1e67c0052614384f";

  constructor(
    private http: HttpClient
  ) { }

  /**
   * This function provides the popular people from TMDB API to render the list
   * of actors.
   */
  getActors(){
    return this.http.get(this.url + this.apiKey)
    .pipe(
      map((data)=>{
        return ActorList.import(data);
      })
    );
  }
}
