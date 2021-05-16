import React from 'react'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import MovieForm from './MovieForm'
import MovieStats from './MovieStats'
import MoviesList from './MoviesList'

const MoviesContainer = (props)=>{
    return(
        <div>
            <Grid container spacing={3}>
                <Grid item xs={9}>
                    <Paper elevation={5} style={{minHeight:'250px', maxHeight:'500px', overflow:'auto', paddingBottom:'10px', paddingLeft:'15px'}}><MoviesList/></Paper>
                </Grid>
                <Grid item xs={3} style={{height:'500px'}}>
                    <Grid item xs={12}>
                        <Paper elevation={5} style={{height:'250px', marginBottom:'10px'}}><MovieForm/></Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper elevation={5} style={{height:'150px'}}><MovieStats/></Paper>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default MoviesContainer