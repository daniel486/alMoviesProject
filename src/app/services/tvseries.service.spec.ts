import { TestBed, inject } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TvseriesService } from './tvseries.service';

describe('TvseriesService', () => {

  let service: TvseriesService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [TvseriesService]
    });
  });

  beforeEach(() => {
    service = TestBed.get(TvseriesService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create the TV serie service', inject([TvseriesService], (service: TvseriesService) => {
    expect(service).toBeTruthy();
  }));

  it('should fill the TV list', () => {
    let response = {
      "page": 1,
      "total_results": 20023,
      "total_pages": 1002,
      "results": [{
        "original_name": "The Simpsons",
        "genre_ids": [16, 35],
        "name": "The Simpsons",
        "popularity": 80.234,
        "origin_country": ["US"],
        "vote_count": 1690,
        "first_air_date": "1989-12-17",
        "backdrop_path": "\/4jMlfAIlN1zKNcqE6xjuQsrFse2.jpg",
        "original_language": "en",
        "id": 456,
        "vote_average": 7.1,
        "overview": "Set in Springfield, the average American town, the show focuses on the antics and everyday adventures of the Simpson family; Homer, Marge, Bart, Lisa and Maggie, as well as a virtual cast of thousands. Since the beginning, the series has been a pop culture icon, attracting hundreds of celebrities to guest star. The show has also made name for itself in its fearless satirical take on politics, media and American life in general.",
        "poster_path": "\/yTZQkSsxUFJZJe67IenRM0AEklc.jpg"
      }, {
        "original_name": "Game of Thrones",
        "genre_ids": [18, 10759, 10765],
        "name": "Game of Thrones",
        "popularity": 61.002,
        "origin_country": ["US"],
        "vote_count": 4875,
        "first_air_date": "2011-04-17",
        "backdrop_path": "\/gX8SYlnL9ZznfZwEH4KJUePBFUM.jpg",
        "original_language": "en",
        "id": 1399,
        "vote_average": 8.2,
        "overview": "Seven noble families fight for control of the mythical land of Westeros. Friction between the houses leads to full-scale war. All while a very ancient evil awakens in the farthest north. Amidst the war, a neglected military order of misfits, the Night's Watch, is all that stands between the realms of men and icy horrors beyond.",
        "poster_path": "\/gwPSoYUHAKmdyVywgLpKKA4BjRr.jpg"
      }]
    };

    service.getTvSeries().subscribe();

    const req = httpMock.expectOne("https://api.themoviedb.org/3/tv/popular?api_key=14383e7a1e2a63bc1e67c0052614384f");

    expect(req.request.method).toEqual("GET");

    req.flush(response);

    
  });
});
