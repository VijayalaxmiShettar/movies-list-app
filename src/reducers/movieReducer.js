const initialMovieState = [ {id:4567, name:'Pursuit of Happiness', imdb:8.5}, {id:8111, name:'The Avengers', imdb:8}, {id:6666, name:'Avengers: Age of ultron' , imdb:7.3}]

const movieReducer = (state = initialMovieState, action)=>{
    switch(action.type){
        case 'ADD_MOVIE' : {
            return [{...action.payload}, ...state]
        }
        case 'DELETE_MOVIE' : {
            return state.filter((movie)=>{
                return movie.id != action.payload
            })
        }
        default: return [...state]
    }
}

export default movieReducer