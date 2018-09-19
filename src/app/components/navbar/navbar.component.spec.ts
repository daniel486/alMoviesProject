import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { NavbarComponent } from './navbar.component';
import { routes } from '../../app-routing.module';
import { ListMoviesComponent } from '../list-movies/list-movies.component';
import { DetailMovieComponent } from '../detail-movie/detail-movie.component';
import { ListActorsComponent } from '../list-actors/list-actors.component';
import { DetailActorComponent } from '../detail-actor/detail-actor.component';
import { ListTvComponent } from '../list-tv/list-tv.component';
import { DetailTvComponent } from '../detail-tv/detail-tv.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SafePipe } from '../../pipes/safe.pipe';
import { RoundPipe } from '../../pipes/round.pipe';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule.withRoutes(routes) ],
      declarations: [ 
        NavbarComponent,
        ListMoviesComponent,
        DetailMovieComponent,
        ListActorsComponent,
        DetailActorComponent,
        ListTvComponent,
        DetailTvComponent,
        SafePipe,
        RoundPipe ],
        schemas: [ NO_ERRORS_SCHEMA ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the navbar component', () => {
    expect(component).toBeDefined();
  });

  it('should have the variables initialized', () => {
    expect(component.movies).toBeDefined();
    expect(component.movies).toBe("Movies");
    expect(component.actors).toBeDefined();
    expect(component.actors).toBe("Actors");
    expect(component.tvShows).toBeDefined();
    expect(component.tvShows).toBe("TV Shows");
    expect(component.fontColorClass).toBeDefined();
    expect(component.fontColorClass).toBe("txt-company-white");
    expect(component.activeLink).toBeDefined();
    expect(component.activeLink).toBe("");
  });
});
