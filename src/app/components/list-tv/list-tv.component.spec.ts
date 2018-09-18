import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTvComponent } from './list-tv.component';

describe('ListTvComponent', () => {
  let component: ListTvComponent;
  let fixture: ComponentFixture<ListTvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
