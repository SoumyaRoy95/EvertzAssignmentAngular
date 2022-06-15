import { Action, createReducer, on } from "@ngrx/store";
import { Movie } from "../movie";
import { AppState, initialState } from "./app.state";
import { addToFavourites, updateMovieDetails } from "./movies.action";

export function movieReducer (state: AppState | undefined, actions: Action){
    return _movieReducer(state, actions)
}

export const _movieReducer = createReducer(
    initialState,
    on(addToFavourites, (state, {movieId}) => {
        const updatedMovie = state.moviesList.map(movie => {
            if(movie.id === movieId){
                return {
                    ...movie, favourite: true
                }
            }
            else return movie
        } )
        return {
            ...state, moviesList: updatedMovie
        }
    }),
    on(updateMovieDetails, (state, {id, title, director, genre}) => {
        const updatedMovieList = state.moviesList.map(movie => {
            if(movie.id === id){
                return {
                    ...movie, title: title, director: director, genre: genre
                }
            }
            else return movie
        })
        return {
            ...state, moviesList: updatedMovieList
        }
    })
)
