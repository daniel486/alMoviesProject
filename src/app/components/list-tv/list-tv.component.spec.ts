import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ListTvComponent } from './list-tv.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TvseriesService } from '../../services/tvseries.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TvList } from '../../types/tvseries.type';
import { of } from 'rxjs';

describe('ListTvComponent', () => {
  let component: ListTvComponent;
  let fixture: ComponentFixture<ListTvComponent>;
  let service: TvseriesService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, BrowserAnimationsModule ],
      declarations: [ ListTvComponent ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [ TvseriesService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTvComponent);
    component = fixture.componentInstance;
    service = TestBed.get(TvseriesService);
    fixture.detectChanges();
  });

  it('should create the ListTvComponent', () => {
    expect(component).toBeTruthy();
  });

  it('should obtain the list of tv series', () => {
    let spyMovies = spyOn(service, 'getTvSeries');
    spyMovies.and.returnValue(of(TvList.import(
      {
        "total_pages": 1,
        "results": [{
          "id": 550,
          "name": "Game of Life",
          "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg"
        }, {
          "id": 551,
          "name": "Rick & Morty",
          "poster_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
        }]
      }
    )));
    component.ngOnInit();

    expect(service.getTvSeries).toHaveBeenCalled();
    expect(component.series.tv_series[0].name).toEqual("Game of Life");
    expect(component.series.tv_series[1].name).toEqual("Rick & Morty");
  });
});
