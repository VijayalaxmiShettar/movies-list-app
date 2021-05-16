import {createStore, combineReducers} from 'redux'
import movieReducer from '../reducers/movieReducer'

const configureStore = ()=>{
    return createStore(combineReducers({
        movies: movieReducer,
    }))
}

export default configureStore
