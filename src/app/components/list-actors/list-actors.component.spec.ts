import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { ListActorsComponent } from './list-actors.component';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ActorsService } from '../../services/actors.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActorList } from '../../types/actors.type';
import { of } from 'rxjs';

describe('ListActorsComponent', () => {
  let component: ListActorsComponent;
  let fixture: ComponentFixture<ListActorsComponent>;
  let service: ActorsService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, BrowserAnimationsModule ],
      declarations: [ ListActorsComponent ],
      schemas: [NO_ERRORS_SCHEMA],
      providers: [ActorsService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListActorsComponent);
    component = fixture.componentInstance;
    service = TestBed.get(ActorsService);
    fixture.detectChanges();
  });

  fit('should create the ListActorsComponent', () => {
    expect(component).toBeTruthy();
  });

  fit('Should obtain the list of actors', () => {
    let spyActors = spyOn(service, 'getActors');
    spyActors.and.returnValue(of(ActorList.import(
      {
        "page": 1,
        "total_results": 2,
        "total_pages": 1,
        "results": [{
          "popularity": 20.601,
          "id": 1245,
          "profile_path": "\/oqvusJfmH4zN2LgdCjmB2TxetOd.jpg",
          "name": "Scarlett Johansson",
          "known_for": [{
            "vote_average": 7.6,
            "vote_count": 16331,
            "id": 24428,
            "video": false,
            "media_type": "movie",
            "title": "The Avengers",
            "popularity": 39.786,
            "poster_path": "\/cezWGskPY5x7GaglTTRN4Fugfb8.jpg",
            "original_language": "en",
            "original_title": "The Avengers",
            "genre_ids": [878, 28, 12],
            "backdrop_path": "\/hbn46fQaRmlpBuUrEiFqv0GDL6Y.jpg",
            "adult": false,
            "overview": "When an unexpected enemy emerges and threatens global safety and security, Nick Fury, director of the international peacekeeping agency known as S.H.I.E.L.D., finds himself in need of a team to pull the world back from the brink of disaster. Spanning the globe, a daring recruitment effort begins!",
            "release_date": "2012-04-25"
          }],
          "adult": false
        }, {
          "popularity": 19.275,
          "id": 9827,
          "profile_path": "\/laJdQNmsuR2iblYUggEqr49LvwJ.jpg",
          "name": "Rose Byrne",
          "known_for": [{
            "vote_average": 6.5,
            "vote_count": 6078,
            "id": 1894,
            "video": false,
            "media_type": "movie",
            "title": "Star Wars: Episode II - Attack of the Clones",
            "popularity": 11.47,
            "poster_path": "\/2vcNFtrZXNwIcBgH5e2xXCmVR8t.jpg",
            "original_language": "en",
            "original_title": "Star Wars: Episode II - Attack of the Clones",
            "genre_ids": [12, 28, 878],
            "backdrop_path": "\/1Slt26IGf2XHqv8xjEJ7LMZqCYb.jpg",
            "adult": false,
            "overview": "Ten years after the invasion of Naboo, the galaxy is on the brink of civil war. Under the leadership of a renegade Jedi named Count Dooku, thousands of solar systems threaten to break away from the Galactic Republic. When an assassination attempt is made on Senator Padmé Amidala, the former Queen of Naboo, twenty-year-old Jedi apprentice Anakin Skywalker is assigned to protect her. In the course of his mission, Anakin discovers his love for Padmé as well as his own darker side. Soon, Anakin, Padmé, and Obi-Wan Kenobi are drawn into the heart of the Separatist movement and the beginning of the Clone Wars.",
            "release_date": "2002-05-15"
          }],
          "adult": false
        }]
      }
    )));
    component.ngOnInit();

    expect(service.getActors).toHaveBeenCalled();
    expect(component.actors.actors[0].name).toEqual("Scarlett Johansson");
    expect(component.actors.actors[1].name).toEqual("Rose Byrne");
  });
});
