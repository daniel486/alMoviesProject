import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListMoviesComponent } from './list-movies.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { MoviesService } from '../../services/movies.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MovieList } from '../../types/movies.type';
import { of } from 'rxjs';

describe('ListMoviesComponent', () => {
  let component: ListMoviesComponent;
  let fixture: ComponentFixture<ListMoviesComponent>;
  let service: MoviesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, BrowserAnimationsModule ],
      declarations: [ ListMoviesComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ MoviesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListMoviesComponent);
    component = fixture.componentInstance;
    service = TestBed.get(MoviesService);
    fixture.detectChanges();
  });

  it('should create ListMoviesComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should obtain the list of movies', () => {
    let spyMovies = spyOn(service, 'getMovies');
    spyMovies.and.returnValue(of(MovieList.import(
      {
        "total_pages": 1,
        "results": [{
          "id": 20,
          "title": "Your Name",
          "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
          "popularity": 448,
          "vote_average": 5
        }, {
          "id": 19,
          "title": "7 Sins",
          "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
          "popularity": 247,
          "vote_average": 3
        }]
      }
    )));
    component.ngOnInit();

    expect(service.getMovies).toHaveBeenCalled();
    expect(component.movies.movies[0].title).toEqual("Your Name");
    expect(component.movies.movies[1].title).toEqual("7 Sins");
  });
});
