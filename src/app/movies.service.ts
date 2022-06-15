import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from './movie';
import { AppState } from './store/app.state';
import { addToFavourites, updateMovieDetails } from './store/movies.action';
import { getMovies, getMoviesByGenre, getMovieDetails, getMoviesBySearch, getFavouriteMovies } from './store/movies.selector';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor( private http: HttpClient, public store: Store<AppState>) { }

  getMovies():Observable<Movie[]>{
    return this.store.pipe(select(getMovies));
     
  }

  getMoviesBySearch(searchTerm:string):Observable<Movie[]>{
    return this.store.pipe(select(getMoviesBySearch(searchTerm)))
  }

  getMoviesByGenre(genres:string):Observable<Movie[]>{
    return this.store.pipe(select(getMoviesByGenre(genres)))
  }

  getMovieDetails(movieId:number):Observable<Movie | undefined>{
    return this.store.pipe(select(getMovieDetails(movieId)))
  }

  getFavouriteMovies():Observable<Movie[] | undefined>{
    return this.store.pipe(select(getFavouriteMovies))
  }

  clickFavourites(movieId:number){
    this.store.dispatch(addToFavourites({movieId}))
  }

  updateMovie(id: number, title: string, director: string, genre: string){
    this.store.dispatch(updateMovieDetails({id, title, director, genre}))
  }
}
