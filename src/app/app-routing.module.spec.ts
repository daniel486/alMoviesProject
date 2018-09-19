import { AppRoutingModule } from './app-routing.module';
import { Location } from '@angular/common';
import { TestBed, fakeAsync, tick, ComponentFixture, async} from '@angular/core/testing';
import { RouterTestingModule } from "@angular/router/testing";
import { Router } from "@angular/router";
import { routes } from "./app-routing.module";
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { ListActorsComponent } from './components/list-actors/list-actors.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';
import { ListTvComponent } from './components/list-tv/list-tv.component';
import { DetailTvComponent } from './components/detail-tv/detail-tv.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SafePipe } from './pipes/safe.pipe';
import { RoundPipe } from './pipes/round.pipe';

describe('AppRoutingModule', () => {
  let component: AppRoutingModule;
  let location: Location;
  let router: Router;
  let fixture: ComponentFixture<AppRoutingModule>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ AppRoutingModule, RouterTestingModule.withRoutes(routes) ],
      declarations: [ 
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
    component = new AppRoutingModule();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    //router.initialNavigation();
    //fixture.detectChanges();
  });

  it('should create an instance for the routing module', () => {
    console.log("aqui" + component);
    expect(component).toBeTruthy();
  });

  it('Navigate to "" should redirect to "/movies"', fakeAsync(() => {
    router.navigate(['']);
    tick();
    expect(location.path()).toBe('/movies');
  }));

  it('Navigate to "movies" should redirect to "/movies"', fakeAsync(() => {
    router.navigate(['movies']);
    tick();
    expect(location.path()).toBe('/movies');
  }));

  it('Navigate to "movie/id" should redirect to "/movie/id"', fakeAsync(() => {
    router.navigate(['movie/550']);
    tick();
    expect(location.path()).toBe('/movie/550');
  }));

  it('Navigate to "actors" should redirect to "/actors"', fakeAsync(() => {
    router.navigate(['actors']);
    tick();
    expect(location.path()).toBe('/actors');
  }));

  it('Navigate to "actor/id" should redirect to "/actor/id"', fakeAsync(() => {
    router.navigate(['actor/550']);
    tick();
    expect(location.path()).toBe('/actor/550');
  }));

  it('Navigate to "tvseries" should redirect to "/tvseries"', fakeAsync(() => {
    router.navigate(['tvseries']);
    tick();
    expect(location.path()).toBe('/tvseries');
  }));

  it('Navigate to "tv/id" should redirect to "/tv/id"', fakeAsync(() => {
    router.navigate(['tv/550']);
    tick();
    expect(location.path()).toBe('/tv/550');
  }));
});
