import { TestBed, inject } from '@angular/core/testing';

import { SearchService } from './search.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SearchService', () => {

  let service: SearchService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [SearchService]
    });
  });

  beforeEach(() => {
    service = TestBed.get(SearchService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create the search service', inject([SearchService], (service: SearchService) => {
    expect(service).toBeTruthy();
  }));

  it('should excecute the multiple search', () => {
    let response = {
      "page": 1,
      "total_results": 1,
      "total_pages": 1,
      "results": [{
        "original_name": "Johnny Test",
        "id": 1769,
        "media_type": "tv",
        "name": "Johnny Test",
        "vote_count": 19,
        "vote_average": 4.68,
        "poster_path": "\/wr7i6FxsLxT1PpaETCpGjchgT3C.jpg",
        "first_air_date": "2005-09-17",
        "popularity": 5.081,
        "genre_ids": [16, 35],
        "original_language": "en",
        "backdrop_path": "\/bYZtFjLJg1BoIsr2yH48WqdBKqm.jpg",
        "overview": "Johnny Test is an American \/Canadian animated television series. It premiered on Kids' WB, on The WB Television Network, on September 17, 2005. It was introduced to Cartoon Network UK on January 12, 2006 as a sneak preview on Jungle Saturdays Block, and then on June 5, 2006, added to its daily lineup. Despite the merger of the UPN and that programming block's parent channel into The CW Television Network, the show still continued to air on Kids' WB, on The CW, with its second and third seasons, through October 28, 2006, to March 1, 2008. The series currently airs in the United States on Cartoon Network, as of January 7, 2008, and in Canada on Teletoon, as of September 8, 2006. International airings include Teletoon in Canada, Nick Germany, Nick Netherlands, Disney Channel Spain and on Cartoon Network in Latin America, Hungary, Poland, Romania, Denmark, Ireland, India and Sweden. The show was produced by Warner Bros. Animation for the first season and later seasons by Cookie Jar Entertainment & DHX Media. Starting from season 6, the show is produced by 9 Story Entertainment. The series is rated TV-Y7 for seasons 1-4, and TV-Y7-FV for season 5 onwards.",
        "origin_country": ["CA", "US"]
      }]
    };

    service.getMultipleSearch("test").subscribe();

    const req = httpMock.expectOne("https://api.themoviedb.org/3/search/multi?api_key=14383e7a1e2a63bc1e67c0052614384f&query=test");

    expect(req.request.method).toEqual("GET");

    req.flush(response);

    
  });
});
