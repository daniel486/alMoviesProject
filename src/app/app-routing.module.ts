import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { ListMoviesComponent } from './components/list-movies/list-movies.component';
import { DetailMovieComponent } from './components/detail-movie/detail-movie.component';
import { ListActorsComponent } from './components/list-actors/list-actors.component';
import { DetailActorComponent } from './components/detail-actor/detail-actor.component';

const routes: Routes = [
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
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
