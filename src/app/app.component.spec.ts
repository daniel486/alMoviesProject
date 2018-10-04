import { TestBed, ComponentFixture, async } from '@angular/core/testing';
import { ContentComponent } from './components/content/content.component';
import { AppComponent } from './app.component';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { ListActorsComponent } from './components/list-actors/list-actors.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';
import { ListTvComponent } from './components/list-tv/list-tv.component';
import { DetailTvComponent } from './components/detail-tv/detail-tv.component';
import { FooterComponent } from './components/footer/footer.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { SafePipe } from './pipes/safe.pipe';
import { RoundPipe } from './pipes/round.pipe';


describe('AppComponent', () => {

  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        ListMoviesComponent,
        DetailMovieComponent,
        ListActorsComponent,
        DetailActorComponent,
        ListTvComponent,
        DetailTvComponent,
        ContentComponent,
        FooterComponent,
        SafePipe,
        RoundPipe], //Here we put all the components that use our component. 
      schemas: [ NO_ERRORS_SCHEMA ]
    }).compileComponents();
  }));

  //Arrange
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
  });


  it('should create the app component', () => {
    console.log(component);
    expect(component).toBeDefined();
  });

  it(`should have as title 'app'`, () => {
    expect(component.title).toEqual('app');
  });

});
