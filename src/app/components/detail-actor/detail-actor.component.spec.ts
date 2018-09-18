import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailActorComponent } from './detail-actor.component';

describe('DetailActorComponent', () => {
  let component: DetailActorComponent;
  let fixture: ComponentFixture<DetailActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
