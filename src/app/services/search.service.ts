import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { SearchDescriptor } from '../types/search.type';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  private url = "https://api.themoviedb.org/3/search/multi";
  private apiKey = "?api_key=14383e7a1e2a63bc1e67c0052614384f";
  private query = "&query=";

  constructor(
    private http: HttpClient
  ) { }

  /**
   * This function provide the multiple search from TMDB API to search
   * movies, actors and tv series based on a query.
   * @param queryInput This query is to get the information from TMDB API
   */
  getMultipleSearch(queryInput: string){
    return this.http.get(this.url + this.apiKey + this.query + queryInput)
    .pipe(
      map((data)=>{
        return SearchDescriptor.import(data);
      })
    );
  }
}
