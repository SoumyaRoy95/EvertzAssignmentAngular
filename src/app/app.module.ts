import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MoviesService } from './movies.service';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { SearchComponent } from './search/search.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { FilterComponent } from './filter/filter.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'
import { FavouritesComponent } from './favourites/favourites.component';
import { StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EffectsModule } from '@ngrx/effects';
import { movieReducer } from './store/movies.reducer'
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from 'src/environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MoviesListComponent,
    SearchComponent,
    MovieDetailsComponent,
    FilterComponent,
    FavouritesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule,
    StoreModule.forRoot({moviesList: movieReducer}),
    // StoreModule.forRoot({ moviesList: booksReducer }),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      // logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,
    EffectsModule.forRoot([])
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
