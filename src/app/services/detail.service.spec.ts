import { TestBed, inject } from '@angular/core/testing';

import { DetailService } from './detail.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('DetailService', () => {

  let service: DetailService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [DetailService]
    });
  });

  beforeEach(() => {
    service = TestBed.get(DetailService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create the search service', inject([DetailService], (service: DetailService) => {
    expect(service).toBeTruthy();
  }));

  it('should obtain the movie detail', () => {
    let response = {
      "backdrop_path": "/87hTDiay2N2qWyX4Ds7ybXi9h8I.jpg",
      "genres": [{
        "id": 18,
        "name": "Drama"
      }, {
        "id": 18,
      }],
      "homepage": "http://www.foxmovies.com/movies/fight-club",
      "id": 550,
      "overview": "A ticking-time-bomb insomniac and a slippery soap salesman channel primal male aggression into a shocking new form of therapy. Their concept catches on, with underground \"fight clubs\" forming in every town, until an eccentric gets in the way and ignites an out-of-control spiral toward oblivion.",
      "popularity": 31.515,
      "poster_path": "/adw6Lq9FiC9zjYEpOqfq03ituwp.jpg",
      "release_date": "1999-10-15",
      "spoken_languages": [
        {
          "name": "English"
        }, {
          "test": "test"
        }
      ],
      "title": "Fight Club",
      "vote_average": 8.4,
      "vote_count": 13768,
      "videos": {
        "results": [{
          "key": "SUXWAEX2jlg",
          "name": "Fight Club Trailer - HD",
          "type": "Trailer"
        }]
      }
    };

    service.getMovieDetail(550).subscribe();

    const req = httpMock.expectOne("https://api.themoviedb.org/3/movie/550?api_key=14383e7a1e2a63bc1e67c0052614384f&append_to_response=videos");

    expect(req.request.method).toEqual("GET");

    req.flush(response);


  });

  it('should obtain the similar movies', () => {
    let response = {
      "results": [{
        "id": 1994,
        "title": "Daniel's Life",
        "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
      }, {
        "id": 1990,
        "title": "Catalina's Life",
        "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
      }]
    };

    service.getSimilarMovies(550).subscribe();

    const req = httpMock.expectOne("https://api.themoviedb.org/3/movie/550/similar?api_key=14383e7a1e2a63bc1e67c0052614384f");

    expect(req.request.method).toEqual("GET");

    req.flush(response);


  });

  it('should obtain the movie cast', () => {
    let response = {
      "cast": [{
        "id": 128,
        "gender": 1,
        "name": "Maria",
        "character": "Evil",
        "job": "Assistant",
        "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
      }, {
        "id": 129,
        "gender": 0,
        "name": "Manuel",
        "character": "Driver",
        "job": "Count",
        "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
      }],
      "crew": [{
        "id": 228,
        "gender": 1,
        "name": "Catalina",
        "character": "Martha",
        "job": "Graphic Designer",
        "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
      }, {
        "id": 229,
        "gender": 0,
        "name": "Daniel",
        "character": "Felipe",
        "job": "Engineer",
        "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
      }]
    };

    service.getMovieCast(550).subscribe();

    const req = httpMock.expectOne("https://api.themoviedb.org/3/movie/550/credits?api_key=14383e7a1e2a63bc1e67c0052614384f");

    expect(req.request.method).toEqual("GET");

    req.flush(response);


  });

  it('should obtain the actor detail', () => {
    let response = {
      "id": 45,
      "birthday": "1994-07-12",
      "name": "Daniel Felipe García",
      "gender": 0,
      "biography": "System's engineering student at the Universidad del Valle.",
      "popularity": 5,
      "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
      "place_of_birth": "Cali"
    };

    service.getActorDetail(45).subscribe();

    const req = httpMock.expectOne("https://api.themoviedb.org/3/person/45?api_key=14383e7a1e2a63bc1e67c0052614384f");

    expect(req.request.method).toEqual("GET");

    req.flush(response);


  });

  it('should obtain the serie detail', () => {
    let response = {
      "backdrop_path": "/4jMlfAIlN1zKNcqE6xjuQsrFse2.jpg",
      "first_air_date": "1989-12-17",
      "genres": [{
        "id": 16,
        "name": "Animation"
      }, {
        "id": 35,
        "name": "Comedy"
      }],
      "homepage": "http://www.thesimpsons.com/",
      "id": 456,
      "name": "The Simpsons",
      "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
      "popularity": 124.977,
      "poster_path": "/yTZQkSsxUFJZJe67IenRM0AEklc.jpg",
      "vote_average": 7.1,
      "vote_count": 1690,
      "videos": {
        "results": [{
          "id": "5336dbb79251417db4000ed8",
          "iso_639_1": "en",
          "iso_3166_1": "US",
          "key": "DX1iplQQJTo",
          "name": "Simpsons",
          "site": "YouTube",
          "size": 720,
          "type": "Trailer"
        }]
      }
    };

    service.getSerieDetail(456).subscribe();

    const req = httpMock.expectOne("https://api.themoviedb.org/3/tv/456?api_key=14383e7a1e2a63bc1e67c0052614384f&append_to_response=videos");

    expect(req.request.method).toEqual("GET");

    req.flush(response);


  });

  it('should obtain the similar series', () => {
    let response = {
      "results": [{
        "id": 1994,
        "name": "Angular Life",
        "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
      }, {
        "id": 1990,
        "name": "Testing Life",
        "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
      }]
    };

    service.getSimilarSeries(550).subscribe();

    const req = httpMock.expectOne("https://api.themoviedb.org/3/tv/550/similar?api_key=14383e7a1e2a63bc1e67c0052614384f");

    expect(req.request.method).toEqual("GET");

    req.flush(response);


  });

  it('should obtain the serie cast', () => {
    let response = {
      "cast": [{
        "id": 128,
        "gender": 1,
        "name": "Maria",
        "character": "Evil",
        "job": "Assistant",
        "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
      }, {
        "id": 129,
        "gender": 0,
        "name": "Manuel",
        "character": "Driver",
        "job": "Count",
        "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
      }],
      "crew": [{
        "id": 228,
        "gender": 1,
        "name": "Catalina",
        "character": "Martha",
        "job": "Graphic Designer",
        "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
      }, {
        "id": 229,
        "gender": 0,
        "name": "Daniel",
        "character": "Felipe",
        "job": "Engineer",
        "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
      }]
    };

    service.getSerieCast(550).subscribe();

    const req = httpMock.expectOne("https://api.themoviedb.org/3/tv/550/credits?api_key=14383e7a1e2a63bc1e67c0052614384f");

    expect(req.request.method).toEqual("GET");

    req.flush(response);


  });
});
