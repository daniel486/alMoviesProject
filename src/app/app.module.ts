//Angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Pipe } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Material imports
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';

//Custom components imports
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { ListActorsComponent } from './components/list-actors/list-actors.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';
import { SafePipe } from './pipes/safe.pipe';
import { RoundPipe } from './pipes/round.pipe';
import { ListTvComponent } from './components/list-tv/list-tv.component';
import { DetailTvComponent } from './components/detail-tv/detail-tv.component';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    ListMoviesComponent,
    DetailMovieComponent,
    ListActorsComponent,
    DetailActorComponent,
    NavbarComponent,
    ContentComponent,
    FooterComponent,
    SafePipe,
    RoundPipe,
    ListTvComponent,
    DetailTvComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCardModule,
    MatTabsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ListMoviesComponent, DetailMovieComponent, ListActorsComponent, DetailActorComponent]
})
export class AppModule { }
