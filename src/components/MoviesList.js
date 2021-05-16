import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import MovieCard from './MovieCard'
import {Select, MenuItem, FormControl, InputLabel, TextField, Typography, GridList, GridListTile} from '@material-ui/core/';

export const getSorted = (movies, descen) =>{
    const moviesArr = [...movies]
    moviesArr.sort((x,y)=>{
        return x.imdb - y.imdb
    })
    return descen ? moviesArr.reverse() : moviesArr
}

const MoviesList = (props)=>{
    const [searchName, setSearchName] = useState('')
    const [order, setOrder] = useState('')
    const [movieResult, setMovieResult] = useState([])
    
    const movies = useSelector((state)=>{
        return state.movies
    })

    useEffect(()=>{
        setMovieResult(movies)
    }, [movies])

    const handleNameChange = (e)=>{
        const value = e.target.value
        setSearchName(value)
        const res = movies.filter((movie)=>{
            return movie.name.toLowerCase().includes(value.toLowerCase())
        })
        setMovieResult(res)
    }

    const sortList = (descen)=>{
        const moviesArr = [...movies]
        moviesArr.sort((x,y)=>{
            let name1 = x.name.toLowerCase()
            let name2 = y.name.toLowerCase()
                if(name1<name2)
                    return -1
                else if(name1>name2)
                    return 1
                else
                    return 0
        })
        return descen ? moviesArr.reverse() : moviesArr
    }

    const handleOrderChange = (e)=>{
        const value = e.target.value
        
        setOrder(value)
        switch(value){
            case 'ascenName' : {
                const res = sortList(false)
                setMovieResult(res)
                break;
            }
            case 'descenName' : {
                const res = sortList(true)
                setMovieResult(res)
                break;
            }
            case 'ascenRate': {
                const res = getSorted(movies, false)
                setMovieResult(res)
                break;
            }
            case 'descenRate' : {
                const res = getSorted(movies, true)
                setMovieResult(res)
                break;
            }
            default  :{
                console.log('default')
                setMovieResult(movies)
            }
        }
    }
    
    return(
        <div>
            <TextField
                value={searchName}
                onChange={handleNameChange}
                id="outlined-full-width"
                style={{ margin: 8 }}
                placeholder="Search by name"
                margin="dense"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
        
            <FormControl>
                <InputLabel>Order By</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={order}
                    onChange={handleOrderChange}
                    style={{width:'200px'}}
                >
                    <MenuItem value="">Reset filter</MenuItem>
                    <MenuItem value="ascenName">A-Z</MenuItem>
                    <MenuItem value="descenName">Z-A</MenuItem>
                    <MenuItem value="ascenRate">1-10</MenuItem>
                    <MenuItem value="descenRate">10-1</MenuItem>
                </Select>
            </FormControl>
            
            <GridList cellHeight={250} cols={4}>
                {movieResult.length == 0 ? <Typography variant="h5">No Movies to show</Typography> : 
                    movieResult.map((movie)=>{
                        return <GridListTile key={movie.id} cols={1}><MovieCard style={{margin:'20px'}} key={movie.id} {...movie}/></GridListTile>
                    })
                }
            </GridList>
        </div>
    )
}

export default MoviesList