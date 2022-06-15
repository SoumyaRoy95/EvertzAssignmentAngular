import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppState } from "./app.state";

const getMoviesState = createFeatureSelector<AppState>('moviesList')

export const getMovies = createSelector(getMoviesState, state => { return state.moviesList })

export const getMoviesBySearch = (title: string) => createSelector(
    getMoviesState, state => {return state.moviesList.filter(movie => movie.title.toLowerCase().includes(title.toLowerCase()))} 
)

export const getMoviesByGenre = (genre: string) => createSelector(
    getMoviesState, state => {return state.moviesList.filter(movie => movie.genre.toLowerCase() === genre.toLowerCase())}
)

export const getMovieDetails = (id: number) => createSelector(
    getMoviesState, state => {return state.moviesList.find(movie => movie.id === id)}
)

export const getFavouriteMovies = createSelector(
    getMoviesState, state => {return state.moviesList.filter(movie => movie.favourite === true)}
)
