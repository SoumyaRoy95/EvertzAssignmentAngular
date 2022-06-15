import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';
import { AppState } from '../store/app.state';
import { getMovieDetails } from '../store/movies.selector';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  public movie?: Observable<Movie | undefined>;
  public editor = false;

  constructor(activatedRoute: ActivatedRoute, private _moviesService: MoviesService, public store: Store<AppState>) { 
    activatedRoute.params.subscribe(params => {
      if(params['id']) {
        this.movie = this._moviesService.getMovieDetails(parseInt(params['id']))
      }
    })
   }

  ngOnInit(): void {
  }

  editInformation(){
    this.editor = true;
  }

  newDetails(id: number, newTitle: string, newDirector: string, newGenre: string) {
    this._moviesService.updateMovie(id, newTitle, newDirector, newGenre)
    this.editor = false;
  }
}
