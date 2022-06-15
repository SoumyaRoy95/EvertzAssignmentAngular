import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {

  genres = '';

  constructor(activatedRoute: ActivatedRoute, private router: Router) { 
    activatedRoute.params.subscribe(params => {
      if(params['genres']) this.genres = params['genres']
    })
  }

  ngOnInit(): void {
  }

  filterOut(term:string): void {
    if(term)this.router.navigateByUrl('/filter/' + term)
  }

}
