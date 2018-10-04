import { TestBed, inject } from '@angular/core/testing';
import { MoviesService } from './movies.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('MoviesService', () => {

  let service: MoviesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [MoviesService]
    });
  });

  beforeEach(() => {
    service = TestBed.get(MoviesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create the movie service', inject([MoviesService], (service: MoviesService) => {
    expect(service).toBeTruthy();
  }));

  it('should get the list of movies', () => {
    let response = {
      "page": 1,
      "total_results": 2,
      "total_pages": 1,
      "results": [{
        "vote_count": 1804,
        "id": 348350,
        "video": false,
        "vote_average": 6.7,
        "title": "Solo: A Star Wars Story",
        "popularity": 214.308,
        "poster_path": "\/3IGbjc5ZC5yxim5W0sFING2kdcz.jpg",
        "original_language": "en",
        "original_title": "Solo: A Star Wars Story",
        "genre_ids": [28, 12, 878],
        "backdrop_path": "\/96B1qMN9RxrAFu6uikwFhQ6N6J9.jpg",
        "adult": false,
        "overview": "Through a series of daring escapades deep within a dark and dangerous criminal underworld, Han Solo meets his mighty future copilot Chewbacca and encounters the notorious gambler Lando Calrissian.",
        "release_date": "2018-05-15"
      }, {
        "vote_count": 674,
        "id": 439079,
        "video": false,
        "vote_average": 5.9,
        "title": "The Nun",
        "popularity": 185.617,
        "poster_path": "\/sFC1ElvoKGdHJIWRpNB3xWJ9lJA.jpg",
        "original_language": "en",
        "original_title": "The Nun",
        "genre_ids": [27, 9648, 53],
        "backdrop_path": "\/fgsHxz21B27hOOqQBiw9L6yWcM7.jpg",
        "adult": false,
        "overview": "When a young nun at a cloistered abbey in Romania takes her own life, a priest with a haunted past and a novitiate on the threshold of her final vows are sent by the Vatican to investigate. Together they uncover the order’s unholy secret. Risking not only their lives but their faith and their very souls, they confront a malevolent force in the form of the same demonic nun that first terrorized audiences in “The Conjuring 2,” as the abbey becomes a horrific battleground between the living and the damned.",
        "release_date": "2018-09-05"
      }]
    };

    service.getMovies().subscribe();

    const req = httpMock.expectOne("https://api.themoviedb.org/3/movie/popular?api_key=14383e7a1e2a63bc1e67c0052614384f");

    expect(req.request.method).toEqual("GET");

    req.flush(response);

  });
});
