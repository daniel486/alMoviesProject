import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { ListActorsComponent } from './components/list-actors/list-actors.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';
import { ListTvComponent } from './components/list-tv/list-tv.component';
import { DetailTvComponent } from './components/detail-tv/detail-tv.component';

/**
 * This are the paths of the page.
 */
const routes: Routes = [
  {
    path: '',
    redirectTo: 'movies',
    pathMatch: 'full'
  },
  {
    path: 'movies',
    component: ListMoviesComponent
  },
  {
    path: 'movie/:id',
    component: DetailMovieComponent
  },
  {
    path: 'actors',
    component: ListActorsComponent
  },
  {
    path: 'actor/:id',
    component: DetailActorComponent
  },
  {
    path: 'tvseries',
    component: ListTvComponent
  },
  {
    path: 'tv/:id',
    component: DetailTvComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
