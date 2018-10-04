import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DetailActorComponent } from './detail-actor.component';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RoundPipe } from '../../pipes/round.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetailService } from '../../services/detail.service';
import { ActorDescriptor } from '../../types/detailActor.type';

class MockActivatedRoute extends ActivatedRoute {
  constructor() {
    super();
    this.params = of({id: "550"})
  }
}

describe('DetailActorComponent', () => {
  let component: DetailActorComponent;
  let fixture: ComponentFixture<DetailActorComponent>;
  let service: DetailService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule, BrowserAnimationsModule ],
      declarations: [ DetailActorComponent, RoundPipe ],
      schemas: [ NO_ERRORS_SCHEMA ],
      providers: [
        { provide: ActivatedRoute, useClass: MockActivatedRoute },
        [DetailService]
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailActorComponent);
    component = fixture.componentInstance;
    //fixture.detectChanges();
    service = TestBed.get(DetailService);
  });

  afterEach(() => {
    component.ngOnDestroy();
  });

  it('should create the DetailActorComponent', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should create the actor', () => {
    
    fixture.detectChanges();
    let spyActor = spyOn(service, 'getActorDetail');
    spyActor.and.returnValue(of(ActorDescriptor.import(
      {
        "birthday": "1969-10-03",
        "known_for_department": "Production",
        "deathday": null,
        "id": 550,
        "name": "Jennifer Todd",
        "also_known_as": [],
        "gender": 1,
        "biography": "",
        "popularity": 0.6,
        "place_of_birth": "Los Angeles, California, USA",
        "profile_path": "\/aIecrmmYpqnyCWQArAueqD60qok.jpg",
        "adult": false,
        "imdb_id": "nm0865189",
        "homepage": null
      }
    )));
    component.ngOnInit();
    

    console.log(component.actor);

    expect(service.getActorDetail).toHaveBeenCalled();
    expect(component.actor.name).toEqual("Jennifer Todd");

    
  });
});
