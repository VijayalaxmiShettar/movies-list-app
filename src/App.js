import MoviesContainer from './components/MoviesContainer'
import Typography from '@material-ui/core/Typography';

function App() {
  return (
    <div>
        <Typography variant="h4" gutterBottom={true}>My Big Movie List</Typography>
        <MoviesContainer/>
    </div>
  );
}

export default App;
