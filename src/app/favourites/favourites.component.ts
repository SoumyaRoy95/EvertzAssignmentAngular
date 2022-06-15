import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Movie } from '../movie';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {
  public list: Observable<Movie[] | undefined> 

  constructor(private _moviesService: MoviesService, activaterRoute: ActivatedRoute) { 
    this.list = this._moviesService.getFavouriteMovies()
    console.log(this.list)
  }

  ngOnInit(): void {
  }
  
}
