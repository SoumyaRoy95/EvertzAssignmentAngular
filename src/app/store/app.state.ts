import { Movie } from "../movie";

export interface AppState {
    moviesList: Movie[]
}

export const initialState: AppState = {
    moviesList :[
        {id: 1, imageUrl:"assets/goodfellas.jpg", title: "Goodfellas", genre: "Crime", director: "Martin Scorcese", favourite: false},
        {id: 2, imageUrl:"assets/Casino_poster.jpg", title: "Casino", genre: "Crime", director: "Martin Scorcese", favourite: false},
        {id: 3, imageUrl:"assets/The_Irishman_poster.jpg", title: "Irishmen", genre: "Crime", director: "Martin Scorcese", favourite: false},
        {id: 4, imageUrl:"assets/raging_bull.jpg", title: "Raging Bull", genre: "Drama", director: "Martin Scorcese", favourite: false},
        {id: 5, imageUrl:"assets/abronxtale.jpg", title: "A Bronx Tale", genre: "Drama", director: "Robert De Niro", favourite: false},
        {id: 6, imageUrl:"assets/departed.jpeg", title: "The Departed", genre: "Crime", director: "Martin Scorcese", favourite: false},
        {id: 7, imageUrl: "assets/gangsofneyork.jpg", title: "Gangs Of New York", genre: "Action", director: "Martin Scorcese", favourite: false},
        {id: 8, imageUrl: "assets/taxi.jpg", title: "Taxi Driver", genre: "Crime", director: "Martin Scorcese", favourite: false}
    ]
}