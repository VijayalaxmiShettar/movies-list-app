import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import isFloat from 'validator/lib/isFloat'
import {addMovie} from '../actions/movieActions'

const MovieForm = (props)=>{
    const [name, setName] = useState('')
    const [imdb, setImdb] = useState('')
    const [invalid, setInvalid] = useState(false)
    const dispatch = useDispatch()

    const handleNameChange = (e)=>{
        setName(e.target.value)
    }

    const handleImdbChange = (e)=>{
        const value = e.target.value
        if(isFloat(value, {min:1, max:10}) || value == ''){
            setInvalid(false)
            setImdb(value)
        }else{
            setInvalid(true)
        }
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        const movieData = {
            id: Number(new Date()),
            name: name,
            imdb: Number(imdb)
        }
        setName('')
        setImdb('')
        setInvalid(false)
        dispatch(addMovie(movieData))
    }

    return(
        <div style={{padding:'10px'}}>
            <Typography variant="h5"><b>Add Movie</b></Typography>
            <form onSubmit={handleSubmit} autoComplete="off">
                <TextField
                    value={name} onChange={handleNameChange}
                    id="outlined-secondary"
                    label="Enter Movie Name"
                    variant="outlined"
                    color="primary"
                    margin="dense"
                    required
                /><br/>
                {invalid ? <TextField
                            error
                            value={imdb} onChange= {handleImdbChange}
                            id="standard-error-helper-text"
                            label="Error"
                            variant="outlined"
                            margin="dense"
                            helperText="Rating should be between 1-9"
                            required
                            /> : 
                        <TextField
                            value={imdb} onChange= {handleImdbChange}
                            id="outlined-secondary"
                            label="IMDB Rating"
                            variant="outlined"
                            color="primary"
                            margin="dense"
                            required
                        />}
                <br/><br/>
                <Button variant="contained" size="small" type="submit">Add</Button>
            </form>
        </div>
    )
}

export default MovieForm