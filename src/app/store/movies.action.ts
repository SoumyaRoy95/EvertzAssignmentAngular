import { createAction, props } from "@ngrx/store";
import { Movie } from "../movie";

export const addToFavourites = createAction('Add to Favourites', props<{movieId:number}>())

export const updateMovieDetails = createAction('Update Movie Details', props<{id:number, title:string, director:string, genre:string}>())
