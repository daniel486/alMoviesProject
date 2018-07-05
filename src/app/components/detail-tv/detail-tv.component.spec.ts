import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTvComponent } from './detail-tv.component';

describe('DetailTvComponent', () => {
  let component: DetailTvComponent;
  let fixture: ComponentFixture<DetailTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
