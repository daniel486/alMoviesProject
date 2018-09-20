import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailMovieComponent } from './detail-movie.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SafePipe } from '../../pipes/safe.pipe';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieDescriptor } from '../../types/detailMovie.type';
import { SimilarMoviesDescriptor } from '../../types/similar.type';
import { CastMoviesDescriptor } from '../../types/cast.type';

class MockActivatedRoute extends ActivatedRoute {
  constructor() {
    super();
    this.params = of({id: "550"})
  }
}

describe('DetailMovieComponent', () => {
  let component: DetailMovieComponent;
  let fixture: ComponentFixture<DetailMovieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, BrowserAnimationsModule ],
      declarations: [ DetailMovieComponent, SafePipe ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMovieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  fit('should create the DetailMovieComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should create the movie', () => {
    component.movie = MovieDescriptor.import({
      "birthday":"1969-10-03",
      "known_for_department":"Production",
      "deathday":null,
      "id":550,
      "name":"Jennifer Todd",
      "also_known_as":[],
      "gender":1,
      "biography":"",
      "popularity":0.6,
      "place_of_birth":"Los Angeles, California, USA",
      "profile_path":"\/aIecrmmYpqnyCWQArAueqD60qok.jpg",
      "adult":false,
      "imdb_id":"nm0865189",
      "homepage":null
    });
    //expect(component.actor.name).toEqual("Jennifer Todd");
  });

  fit('should create the similar movies', () => {
    component.similar = SimilarMoviesDescriptor.import({
      "page":1,
      "results":[
        {
          "adult":false,
          "backdrop_path":"/jMzVSwQp1lLVq9fnQQ4yOjr1YZ2.jpg",
          "genre_ids":[28,80,18,53],
          "id":949,
          "original_language":"en",
          "original_title":"Heat",
          "overview":"Obsessive master thief, Neil McCauley leads a top-notch crew on various daring heists throughout Los Angeles while determined detective, Vincent Hanna pursues him without rest. Each man recognizes and respects the ability and the dedication of the other even though they are aware their cat-and-mouse game may end in violence.",
          "poster_path":"/zMyfPUelumio3tiDKPffaUpsQTD.jpg",
          "release_date":"1995-12-15",
          "title":"Heat",
          "video":false,
          "vote_average":7.8,
          "vote_count":2644,
          "popularity":22.893
        },
        {
          "adult":false,
          "backdrop_path":"/bzkTNB2lXijMbRuk0CVq3jJPTCv.jpg",
          "genre_ids":[80,18,53],
          "id":11657,
          "original_language":"fr",
          "original_title":"Le Cercle rouge",
          "overview":"Master thief Corey is fresh out of prison. But instead of toeing the line of law-abiding freedom, he finds his steps leading back to the shadowy world of crime, crossing those of a notorious escapee and alcoholic ex-cop. As the unlikely trio plots a heist against impossible odds, their trail is pursued by a relentless inspector, and fate seals their destinies.",
          "poster_path":"/jUA29RNHCs82s0v4nDlhZVS9SNC.jpg",
          "release_date":"1970-10-19",
          "title":"Le Cercle Rouge",
          "video":false,
          "vote_average":7.7,
          "vote_count":185,
          "popularity":8.161
        }
      ],
      "total_pages":1,
      "total_results":2
    });
    expect(component.similar.movies[0].title).toEqual("Heat");
  });

  it('should create the cast of the movie', () => {
    component.cast = CastMoviesDescriptor.import({
      "birthday":"1969-10-03",
      "known_for_department":"Production",
      "deathday":null,
      "id":550,
      "name":"Jennifer Todd",
      "also_known_as":[],
      "gender":1,
      "biography":"",
      "popularity":0.6,
      "place_of_birth":"Los Angeles, California, USA",
      "profile_path":"\/aIecrmmYpqnyCWQArAueqD60qok.jpg",
      "adult":false,
      "imdb_id":"nm0865189",
      "homepage":null
    });
    //expect(component.actor.name).toEqual("Jennifer Todd");
  });
});
