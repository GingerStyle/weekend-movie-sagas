import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Details = () => {
    const history = useHistory();
    const movie = useSelector(store => store.thisMovie);
    const genres = useSelector(store => store.genres);
    let genreString = '';

    const genreFormatter = () => {
        for(let i=0; i<genres.length; i++){
            genreString += genres[i].name + ' ';
        };
    }

    return(
        <>
        <h1>{movie.title}</h1>
        <img src={movie.poster}></img>
        <br></br>
        <p>{movie.description}</p>
        <div>
            {genreFormatter()}
            Genres: {genreString}
        </div>
        <br></br>
        <button onClick={() => history.push('/')}>Back To List</button>
        </>
    );
}

export default Details;