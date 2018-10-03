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
import { DetailService } from '../../services/detail.service';

class MockActivatedRoute extends ActivatedRoute {
  constructor() {
    super();
    this.params = of({ id: "550" })
  }
}

describe('DetailMovieComponent', () => {
  let component: DetailMovieComponent;
  let fixture: ComponentFixture<DetailMovieComponent>;
  let service: DetailService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, BrowserAnimationsModule],
      declarations: [DetailMovieComponent, SafePipe],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        [DetailService]
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMovieComponent);
    component = fixture.componentInstance;
    service = TestBed.get(DetailService);
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create the DetailMovieComponent', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create the movie', () => {
    fixture.detectChanges();
    let spyActor = spyOn(service, 'getMovieDetail');
    spyActor.and.returnValue(of(MovieDescriptor.import(
      {
        "adult": false,
        "backdrop_path": "/o5l7nvYLfisSndoOIbMxoUHfdNd.jpg",
        "belongs_to_collection": null,
        "budget": 40000000,
        "genres": [
          { "id": 28, "name": "Action" },
          { "id": 878, "name": "Science Fiction" },
          { "id": 12, "name": "Adventure" }
        ],
        "homepage": null,
        "id": 841,
        "imdb_id": "tt0087182",
        "original_language": "en",
        "original_title": "Dune",
        "overview": "In the year 10,191, the world is at war for control of the desert planet Dune – the only place where the time-travel substance 'Spice' can be found. But when one leader gives up control, it's only so he can stage a coup with some unsavory characters.",
        "popularity": 17.43,
        "poster_path": "/ngUaHgSZGkKy1Izwjk7qwZLOC5A.jpg",
        "production_companies": [{ "id": 10308, "logo_path": null, "name": "Dino De Laurentiis Company", "origin_country": "US" }],
        "production_countries": [{ "iso_3166_1": "US", "name": "United States of America" }],
        "release_date": "1984-12-14",
        "revenue": 30925690,
        "runtime": 137,
        "spoken_languages": [
          { "iso_639_1": "en", "name": "English" },
          { "iso_639_1": "it", "name": "Italiano" }
        ],
        "status": "Released",
        "tagline": "A world beyond your experience, beyond your imagination.",
        "title": "Dune",
        "video": false,
        "vote_average": 6.4,
        "vote_count": 803,
        "videos":{}
      }
    )));
    component.ngOnInit();
    

    console.log(component.movie);

    expect(service.getMovieDetail).toHaveBeenCalled();
    expect(component.movie.title).toEqual("Dune");

    
  });

  it('should create the similar movies', () => {
    fixture.detectChanges();
    let spyActor = spyOn(service, 'getSimilarMovies');
    spyActor.and.returnValue(of(SimilarMoviesDescriptor.import(
      {
        "page": 1,
        "results": [
          {
            "adult": false,
            "backdrop_path": "/jMzVSwQp1lLVq9fnQQ4yOjr1YZ2.jpg",
            "genre_ids": [28, 80, 18, 53],
            "id": 949,
            "original_language": "en",
            "original_title": "Heat",
            "overview": "Obsessive master thief, Neil McCauley leads a top-notch crew on various daring heists throughout Los Angeles while determined detective, Vincent Hanna pursues him without rest. Each man recognizes and respects the ability and the dedication of the other even though they are aware their cat-and-mouse game may end in violence.",
            "poster_path": "/zMyfPUelumio3tiDKPffaUpsQTD.jpg",
            "release_date": "1995-12-15",
            "title": "Heat",
            "video": false,
            "vote_average": 7.8,
            "vote_count": 2644,
            "popularity": 22.893
          },
          {
            "adult": false,
            "backdrop_path": "/bzkTNB2lXijMbRuk0CVq3jJPTCv.jpg",
            "genre_ids": [80, 18, 53],
            "id": 11657,
            "original_language": "fr",
            "original_title": "Le Cercle rouge",
            "overview": "Master thief Corey is fresh out of prison. But instead of toeing the line of law-abiding freedom, he finds his steps leading back to the shadowy world of crime, crossing those of a notorious escapee and alcoholic ex-cop. As the unlikely trio plots a heist against impossible odds, their trail is pursued by a relentless inspector, and fate seals their destinies.",
            "poster_path": "/jUA29RNHCs82s0v4nDlhZVS9SNC.jpg",
            "release_date": "1970-10-19",
            "title": "Le Cercle Rouge",
            "video": false,
            "vote_average": 7.7,
            "vote_count": 185,
            "popularity": 8.161
          }
        ],
        "total_pages": 1,
        "total_results": 2
      }
    )));
    component.ngOnInit();
    

    console.log(component.similar);

    expect(service.getSimilarMovies).toHaveBeenCalled();
    expect(component.similar.movies[0].title).toEqual("Heat");
  });

  it('should create the cast of the movie', () => {
    fixture.detectChanges();
    let spyActor = spyOn(service, 'getMovieCast');
    spyActor.and.returnValue(of(CastMoviesDescriptor.import(
      {
        "id": 841,
        "cast": [{
          "cast_id": 23,
          "character": "Paul Atreides",
          "credit_id": "52fe427fc3a36847f8023661",
          "gender": 2,
          "id": 6677,
          "name": "Kyle MacLachlan",
          "order": 0,
          "profile_path": "/7DnMuDlSdpycAQQxOIDmV66qerc.jpg"
        }, {
          "cast_id": 16,
          "character": "Lady Jessica Atreides",
          "credit_id": "52fe427fc3a36847f8023645",
          "gender": 1,
          "id": 12513,
          "name": "Francesca Annis",
          "order": 1,
          "profile_path": "/rtbYkuenkq8Kfc5LwzWYtVD3eNH.jpg"
        }],
        "crew": [{
          "cast_id": 23,
          "character": "Paul Atreides",
          "credit_id": "52fe427fc3a36847f8023661",
          "gender": 2,
          "id": 6677,
          "name": "Kyle MacLachlan",
          "order": 0,
          "profile_path": "/7DnMuDlSdpycAQQxOIDmV66qerc.jpg"
        }]
      }
    )));
    component.ngOnInit();
    

    console.log(component.cast);

    expect(service.getMovieCast).toHaveBeenCalled();
    expect(component.cast.actors[0].character).toEqual("Paul Atreides");
    expect(component.cast.actors[1].character).toEqual("Lady Jessica Atreides");
  });

  it('should return the url for the trailer given the key', () => {
    fixture.detectChanges();
    let movieTrailer: string = component.getMovieTrailerUrl("WaG1KZqrLvM");
    expect(component).toBeDefined();
    expect(movieTrailer).toBe("https://www.youtube.com/embed/WaG1KZqrLvM");
  });

  it('Should send the detail movie genres based on a MovieDescriptor', () => {
    fixture.detectChanges();
    console.log(component.movie);
    expect(component.movie).toBeDefined();
    component.movie = MovieDescriptor.import({
      "adult": false,
      "backdrop_path": "/o5l7nvYLfisSndoOIbMxoUHfdNd.jpg",
      "belongs_to_collection": null,
      "budget": 40000000,
      "genres": [
        { "id": 28, "name": "Action" },
        { "id": 878, "name": "Science Fiction" },
        { "id": 12, "name": "Adventure" }
      ],
      "homepage": null,
      "id": 841,
      "imdb_id": "tt0087182",
      "original_language": "en",
      "original_title": "Dune",
      "overview": "In the year 10,191, the world is at war for control of the desert planet Dune – the only place where the time-travel substance 'Spice' can be found. But when one leader gives up control, it's only so he can stage a coup with some unsavory characters.",
      "popularity": 17.43,
      "poster_path": "/ngUaHgSZGkKy1Izwjk7qwZLOC5A.jpg",
      "production_companies": [{ "id": 10308, "logo_path": null, "name": "Dino De Laurentiis Company", "origin_country": "US" }],
      "production_countries": [{ "iso_3166_1": "US", "name": "United States of America" }],
      "release_date": "1984-12-14",
      "revenue": 30925690,
      "runtime": 137,
      "spoken_languages": [
        { "iso_639_1": "en", "name": "English" },
        { "iso_639_1": "it", "name": "Italiano" }
      ],
      "status": "Released",
      "tagline": "A world beyond your experience, beyond your imagination.",
      "title": "Dune",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 803,
      "videos":{"results":[
        {
          "id":"5b7721540e0a26045a00118b",
          "iso_639_1":"en",
          "iso_3166_1":"US",
          "key":"WHh8dzxTSNw",
          "name":"Dune (1984) - Trailer in HD (Fan Remaster)",
          "site":"YouTube",
          "size":1080,
          "type":"Trailer"}]}
    });

    console.log(component.movie);

    let genresDetail: string = component.getDetailMovieGenres(component.movie);

    expect(component).toBeDefined();
    expect(genresDetail).toEqual("| Action, Science Fiction, Adventure |");
  });
});
