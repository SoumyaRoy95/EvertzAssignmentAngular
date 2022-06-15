import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { AppState } from '../store/app.state';
import { addToFavourites } from '../store/movies.action';

@Component({
  selector: '[app-movies-list]',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss']
})
export class MoviesListComponent implements OnInit {

  // public movies: Movie[] | undefined;
  public movies: Observable<Movie[]> | undefined;

  constructor(private _moviesService: MoviesService, activatedRoute: ActivatedRoute) {
    activatedRoute.params.subscribe((params)=>{
      if(params['searchTerm']){
        this.movies = this._moviesService.getMoviesBySearch(params['searchTerm'])
      } else if(params['genres']){
        this.movies = this._moviesService.getMoviesByGenre(params['genres'])
      }
      else
      this.movies = this._moviesService.getMovies()
    })
   }

  ngOnInit(): void {
    
  }

  clickFavouritesIcon(item:Movie){
    this._moviesService.clickFavourites(item?.id)
  }

}
