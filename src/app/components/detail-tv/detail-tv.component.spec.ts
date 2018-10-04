import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { DetailTvComponent } from './detail-tv.component';
import { SafePipe } from '../../pipes/safe.pipe';
import { ActivatedRoute } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TvDescriptor } from '../../types/detailTvSeries.type';
import { SimilarSeriesDescriptor } from '../../types/similar.type';
import { CastSeriesDescriptor } from '../../types/cast.type';
import { DetailService } from '../../services/detail.service';

describe('DetailTvComponent', () => {
  let component: DetailTvComponent;
  let fixture: ComponentFixture<DetailTvComponent>;
  let service: DetailService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, BrowserAnimationsModule ],
      declarations: [ DetailTvComponent, SafePipe ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [
        //useValue is another form to give the params to ActivatedRoute
        //This is for avoid the use of a mock for the ActivatedRoute
        { provide: ActivatedRoute, useValue: {
          params: of({ id: "1" })
        } },
        [DetailService]
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTvComponent);
    component = fixture.componentInstance;
    service = TestBed.get(DetailService);
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create the detailTvComponent', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create the serie', () => {
    fixture.detectChanges();
    let spySerie = spyOn(service, 'getSerieDetail');
    spySerie.and.returnValue(of(TvDescriptor.import(
      {
        "backdrop_path": null,
        "created_by": [{
          "id": 32568,
          "credit_id": "5253854019c29579402069da",
          "name": "Johnny Speight",
          "profile_path": null
        }],
        "episode_run_time": [30],
        "first_air_date": "1965-07-22",
        "genres": [{
          "id": 35,
          "name": "Comedy"
        }],
        "homepage": "",
        "id": 550,
        "in_production": false,
        "languages": ["en"],
        "last_air_date": "1975-12-17",
        "last_episode_to_air": {
          "air_date": "1975-12-17",
          "episode_number": 6,
          "id": 31100,
          "name": "Unemployment",
          "overview": "",
          "production_code": null,
          "season_number": 7,
          "show_id": 550,
          "still_path": null,
          "vote_average": 0.0,
          "vote_count": 0
        },
        "name": "Till Death Us Do Part",
        "next_episode_to_air": null,
        "networks": [{
          "name": "BBC One",
          "id": 4,
          "logo_path": "/mVn7xESaTNmjBUyUtGNvDQd3CT1.png",
          "origin_country": "GB"
        }],
        "number_of_episodes": 50,
        "number_of_seasons": 7,
        "origin_country": ["GB"],
        "original_language": "en",
        "original_name": "Till Death Us Do Part",
        "overview": "Till Death Us Do Part is a ground-breaking British sitcom that aired on BBC1 from 1965 to 1975. First airing as a Comedy Playhouse pilot, the show aired in seven series until 1975. Six years later, ITV continued the sitcom, calling it Till Death.... From 1985 to 1992, the BBC produced a sequel In Sickness and in Health.\n\nCreated by Johnny Speight, Till Death Us Do Part centred on the East End Garnett family, led by patriarch Alf Garnett, a reactionary white working-class man who holds racist and anti-socialist views. His gentle and long-suffering wife Else was played by Dandy Nichols, and his daughter Rita by Una Stubbs. Rita's bright but layabout husband Mike Rawlins is a socialist. The character Alf Garnett became a well known character in British culture, and Mitchell played him on stage and television up until 1998, when Speight died.\n\nIn addition to the spin-off In Sickness and in Health, Till Death Us Do Part was re-made in many countries including Brazil, Germany and the United States.\n\nMany episodes from the first three series are thought to no longer exist, having been wiped in the late 1960s and early '70s as was the policy at the time.",
        "popularity": 1.611,
        "poster_path": "/1IsbecDzH4aoAv5Mqp6dM4JSnY0.jpg",
        "production_companies": [],
        "seasons": [{
          "air_date": "1965-07-22",
          "episode_count": 5,
          "id": 1692,
          "name": "Specials",
          "overview": "",
          "poster_path": null,
          "season_number": 0
        }],
        "status": "Ended",
        "type": "Scripted",
        "vote_average": 7.4,
        "vote_count": 13,
        "videos": {
          "results": []
        }
      }
    )));
    component.ngOnInit();
    

    console.log(component.serie);

    expect(service.getSerieDetail).toHaveBeenCalled();
    expect(component.serie.name).toEqual("Till Death Us Do Part");
    
  });

  it('should create the similar series', () => {
    fixture.detectChanges();
    let spySerie = spyOn(service, 'getSimilarSeries');
    spySerie.and.returnValue(of(SimilarSeriesDescriptor.import(
      {
        "page": 1,
        "results": [{
          "backdrop_path": "/7u1hTVQ7TFbf220yeUo0mtBuKW8.jpg",
          "first_air_date": "1981-09-08",
          "genre_ids": [35],
          "id": 72,
          "original_language": "en",
          "original_name": "Only Fools and Horses",
          "overview": "The misadventures of two wheeler dealer brothers Del Boy and Rodney Trotter of “Trotters Independent Traders PLC” who scrape their living by selling dodgy goods believing that next year they will be millionaires.",
          "origin_country": ["GB"],
          "poster_path": "/3UIzEm9dyT3DloFQOfJHwvcF52u.jpg",
          "popularity": 12.447,
          "name": "Only Fools and Horses",
          "vote_average": 8.2,
          "vote_count": 101
        }, {
          "backdrop_path": "/3LmhxMKvD0lqpfLA2iu6oMhRLHt.jpg",
          "first_air_date": "1983-06-15",
          "genre_ids": [35, 10768],
          "id": 7246,
          "original_language": "en",
          "original_name": "Blackadder",
          "overview": "Blackadder is the name that encompassed four series of a BBC 1 period British sitcom, along with several one-off instalments. All television episodes starred Rowan Atkinson as anti-hero Edmund Blackadder and Tony Robinson as Blackadder's dogsbody, Baldrick. Each series was set in a different historical period with the two protagonists accompanied by different characters, though several reappear in one series or another, for example Melchett and Lord Flashheart.\n\nThe first series titled The Black Adder was written by Richard Curtis and Rowan Atkinson, while subsequent episodes were written by Curtis and Ben Elton. The shows were produced by John Lloyd. In 2000 the fourth series, Blackadder Goes Forth, ranked at 16 in the \"100 Greatest British Television Programmes\", a list created by the British Film Institute. Also in the 2004 TV poll to find \"Britain's Best Sitcom\", Blackadder was voted the second-best British sitcom of all time, topped by Only Fools and Horses. It was also ranked as the 20th-best TV show of all time by Empire magazine.",
          "origin_country": ["GB"],
          "poster_path": "/y3rXOeklqhZ7BTBveW5WLJqyjgU.jpg",
          "popularity": 19.148,
          "name": "Blackadder",
          "vote_average": 7.8,
          "vote_count": 139
        }],
        "total_pages": 1,
        "total_results": 2
      }
    )));
    component.ngOnInit();
    

    console.log(component.similar);

    expect(service.getSimilarSeries).toHaveBeenCalled();
    expect(component.similar.series[0].name).toEqual("Only Fools and Horses");
    expect(component.similar.series[1].name).toEqual("Blackadder");
  });

  it('should create the cast and the crew of the serie', () => {
    fixture.detectChanges();
    let spySerie = spyOn(service, 'getSerieCast');
    spySerie.and.returnValue(of(CastSeriesDescriptor.import(
      {
        "cast": [{
          "character": "Else Garnett",
          "credit_id": "5253853e19c29579402068ae",
          "id": 87747,
          "name": "Dandy Nichols",
          "gender": 1,
          "profile_path": "/9TfkQH0XEPqiB0Cc8iDGjn9D3O9.jpg",
          "order": 0
        }, {
          "character": "Alf Garnett",
          "credit_id": "5253853f19c295794020694c",
          "id": 94713,
          "name": "Warren Mitchell",
          "gender": 2,
          "profile_path": "/mMFruuo24m0A8LgVXjE6cUDrGFx.jpg",
          "order": 1
        }],
        "crew": [{
          "credit_id": "5253854019c29579402069e6",
          "department": "Production",
          "id": 1218302,
          "name": "Dennis Main Wilson",
          "job": "Producer",
          "profile_path": null
        }],
        "id": 550
      }
    )));
    component.ngOnInit();
    

    console.log(component.cast);

    expect(service.getSerieCast).toHaveBeenCalled();
    expect(component.cast.actors[0].character).toEqual("Else Garnett");
    expect(component.cast.actors[1].character).toEqual("Alf Garnett");
    expect(component.cast.total_crew[0].job).toEqual("Producer");
  });

  it('should return the url for the trailer if exist for the serie given the key', () => {
    fixture.detectChanges();
    let serieTrailer: string = component.getSerieTrailerUrl("R1v0uFms68U");
    expect(component).toBeDefined();
    expect(serieTrailer).toBe("https://www.youtube.com/embed/R1v0uFms68U");
  });

  it('Should send the detail serie genres based on a TvDescriptor', () => {
    fixture.detectChanges();
    expect(component.serie).toBeDefined();
    component.serie = TvDescriptor.import({
      "backdrop_path": null,
      "created_by": [{
        "id": 32568,
        "credit_id": "5253854019c29579402069da",
        "name": "Johnny Speight",
        "profile_path": null
      }],
      "episode_run_time": [30],
      "first_air_date": "1965-07-22",
      "genres": [{
        "id": 35,
        "name": "Comedy"
      },{
        "id": 35874,
        "name": "Test Genre"
      }],
      "homepage": "",
      "id": 550,
      "in_production": false,
      "languages": ["en"],
      "last_air_date": "1975-12-17",
      "last_episode_to_air": {
        "air_date": "1975-12-17",
        "episode_number": 6,
        "id": 31100,
        "name": "Unemployment",
        "overview": "",
        "production_code": null,
        "season_number": 7,
        "show_id": 550,
        "still_path": null,
        "vote_average": 0.0,
        "vote_count": 0
      },
      "name": "Till Death Us Do Part",
      "next_episode_to_air": null,
      "networks": [{
        "name": "BBC One",
        "id": 4,
        "logo_path": "/mVn7xESaTNmjBUyUtGNvDQd3CT1.png",
        "origin_country": "GB"
      }],
      "number_of_episodes": 50,
      "number_of_seasons": 7,
      "origin_country": ["GB"],
      "original_language": "en",
      "original_name": "Till Death Us Do Part",
      "overview": "Till Death Us Do Part is a ground-breaking British sitcom that aired on BBC1 from 1965 to 1975. First airing as a Comedy Playhouse pilot, the show aired in seven series until 1975. Six years later, ITV continued the sitcom, calling it Till Death.... From 1985 to 1992, the BBC produced a sequel In Sickness and in Health.\n\nCreated by Johnny Speight, Till Death Us Do Part centred on the East End Garnett family, led by patriarch Alf Garnett, a reactionary white working-class man who holds racist and anti-socialist views. His gentle and long-suffering wife Else was played by Dandy Nichols, and his daughter Rita by Una Stubbs. Rita's bright but layabout husband Mike Rawlins is a socialist. The character Alf Garnett became a well known character in British culture, and Mitchell played him on stage and television up until 1998, when Speight died.\n\nIn addition to the spin-off In Sickness and in Health, Till Death Us Do Part was re-made in many countries including Brazil, Germany and the United States.\n\nMany episodes from the first three series are thought to no longer exist, having been wiped in the late 1960s and early '70s as was the policy at the time.",
      "popularity": 1.611,
      "poster_path": "/1IsbecDzH4aoAv5Mqp6dM4JSnY0.jpg",
      "production_companies": [],
      "seasons": [{
        "air_date": "1965-07-22",
        "episode_count": 5,
        "id": 1692,
        "name": "Specials",
        "overview": "",
        "poster_path": null,
        "season_number": 0
      }],
      "status": "Ended",
      "type": "Scripted",
      "vote_average": 7.4,
      "vote_count": 13,
      "videos": {
        "results": []
      }
    });

    let genresDetail: string = component.getDetailSerieGenres(component.serie);

    expect(component).toBeDefined();
    expect(genresDetail).toEqual("| Comedy, Test Genre |");
  });
});
