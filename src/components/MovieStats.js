import React from 'react'
import {useSelector} from 'react-redux'
import Typography from '@material-ui/core/Typography';
import {getSorted} from './MoviesList'

const MovieStats = (props)=>{
    const movies = useSelector((state)=>{
        return state.movies
    })
    const getTopRated = ()=>{
        if(movies.length == 0){
            return 'None'
        }else{
            const topRated = getSorted(movies, true)[0]
            return topRated.name
        }
    }
    return(
        <div style={{padding:"10px"}}>
            <Typography variant="h5"><b>Movie Stats</b></Typography>
            <Typography variant="h6">Total movies - {movies.length}</Typography>
            <Typography variant="h6">Top ranked movie - {getTopRated()}</Typography>
        </div>
    )
}

export default MovieStats