import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavouritesComponent } from './favourites/favourites.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { MoviesListComponent } from './movies-list/movies-list.component';

const routes: Routes = [
  {path: '', component: MoviesListComponent},
  {path: 'search/:searchTerm', component: MoviesListComponent},
  {path: 'filter/:genres', component: MoviesListComponent},
  {path: 'movie/:id', component:MovieDetailsComponent},
  {path: 'favourites', component: FavouritesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
