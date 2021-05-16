import React from 'react'
import {useDispatch} from 'react-redux'
import {deleteMovie} from '../actions/movieActions'
import {Typography, CardMedia, IconButton, Card, CardContent, CardActions} from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import StarRateIcon from '@material-ui/icons/StarRate';
import swal from 'sweetalert'

const MovieCard = (props)=>{
    const {id, name, imdb} = props
    const dispatch = useDispatch()
    
    const handleDelete = (id)=>{
      dispatch(deleteMovie(id))
      swal("Done", "Movie removed successfully", "success")
    }

    return(
        <Card style={{width:'80%', height:'200px', marginBottom:'10px', overflow:'auto'}} >
           <CardMedia
              style={{height:"70px", width:"100%"}}
              image="https://i.pinimg.com/originals/c5/39/a7/c539a7a46e4359182df860a09f211c12.jpg"
            />
            <CardContent>
                <Typography  color="textSecondary">
                  Movie
                </Typography>
                <Typography variant="body1">
                    {name}
                </Typography>
                <Typography color="textSecondary" display="inline">
                  IMDB
                </Typography>
                <Typography display="inline" style={{flexGrow:5}}>
                  <StarRateIcon fontSize="small"></StarRateIcon> {` ${imdb}   `}
                </Typography> &nbsp; &nbsp;
                
                <IconButton style={{width:'6px', height:'6px'}} display="inline" aria-label="delete"  onClick={()=>{handleDelete(id)}} edge="end">
                    <DeleteIcon fontSize="small" />
                </IconButton>
              </CardContent>
      </Card>
    )
}
export default MovieCard