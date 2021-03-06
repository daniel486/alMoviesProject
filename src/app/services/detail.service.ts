import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { MovieDescriptor } from '../types/detailMovie.type';
import { CastMoviesDescriptor, CastSeriesDescriptor } from '../types/cast.type';
import { SimilarMoviesDescriptor, SimilarSeriesDescriptor } from '../types/similar.type';
import { ActorDescriptor } from '../types/detailActor.type';
import { TvDescriptor } from '../types/detailTvSeries.type';

@Injectable({
  providedIn: 'root'
})
export class DetailService {

  private urlMovieDetail: string = "https://api.themoviedb.org/3/movie/";
  private apiKey: string = "?api_key=14383e7a1e2a63bc1e67c0052614384f";
  private appendResponseVideos: string = "&append_to_response=videos";
  private similar: string = "/similar";
  private credits: string = "/credits";
  private urlActorDetail: string = "https://api.themoviedb.org/3/person/";
  private urlSerieDetail: string = "https://api.themoviedb.org/3/tv/";

  constructor(
    private http: HttpClient
  ) { }

  /**
   * This function return the movie detail that will be render in the template
   * @param idMovie This is the movie id to make the petition on TMDB API
   */
  getMovieDetail(idMovie:number){
    return this.http.get(this.urlMovieDetail + idMovie + this.apiKey + this.appendResponseVideos)
    .pipe(
      map((data)=>{
        return MovieDescriptor.import(data);
      })
    );
  }

  /**
   * This function return the similar movies to make them appear in the detail movie
   * template
   * @param idMovie This is the movie id to make the petition on TMDB API
   */
  getSimilarMovies(idMovie:number){
    return this.http.get(this.urlMovieDetail + idMovie + this.similar + this.apiKey)
    .pipe(
      map((data)=>{
        return SimilarMoviesDescriptor.import(data);
      })
    );
  }

  /**
   * This function return the movie cast and the crew to make them appear in the detail
   * movie template
   * @param idMovie This is the movie id to make the petition on TMDB API
   */
  getMovieCast(idMovie:number){
    return this.http.get(this.urlMovieDetail + idMovie + this.credits + this.apiKey)
    .pipe(
      map((data)=>{
        return CastMoviesDescriptor.import(data);
      })
    );
  }

  /**
   * This function return the actor details that will be render in the template from
   * detail-actor component
   * @param idActor This is the actor id to make the petition on TMDB API
   */
  getActorDetail(idActor:number){
    return this.http.get(this.urlActorDetail + idActor + this.apiKey)
    .pipe(
      map((data)=>{
        return ActorDescriptor.import(data);
      })
    );
  }

  /**
   * This function return the serie detail that will be rendered in the template from
   * detail-tv component
   * @param idSerie This is the serie id to make the petition on TMDB API
   */
  getSerieDetail(idSerie:number){
    return this.http.get(this.urlSerieDetail + idSerie + this.apiKey + this.appendResponseVideos)
    .pipe(
      map((data)=>{
        return TvDescriptor.import(data);
      })
    );
  }

  /**
   * This function return the similar series to make them appear in the detail-tv
   * template
   * @param idSerie This is the serie id to make the petition on TMDB API
   */
  getSimilarSeries(idSerie:number){
    return this.http.get(this.urlSerieDetail + idSerie + this.similar + this.apiKey)
    .pipe(
      map((data)=>{
        return SimilarSeriesDescriptor.import(data);
      })
    );
  }

  /**
   * This function return the serie cast and the crew to make them appear in the
   * detail-tv template
   * @param idSerie This is the serie id to make the petition on TMDB API
   */
  getSerieCast(idSerie:number){
    return this.http.get(this.urlSerieDetail + idSerie + this.credits + this.apiKey)
    .pipe(
      map((data)=>{
        return CastSeriesDescriptor.import(data);
      })
    );
  }
}
