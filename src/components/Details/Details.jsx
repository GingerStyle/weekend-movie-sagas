import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Details = () => {
    const history = useHistory();
    const movie = useSelector(store => store.thisMovie);
    const genres = useSelector(store => store.genres);

    return(
        <>
        <h2>{movie.title}</h2>
        <img src={movie.poster}></img>
        <br></br>
        <p>{movie.description}</p>
        <p>Genres: {genres}</p>
        <br></br>
        <button onClick={() => history.push('/')}>Back To List</button>
        </>

    );
}

export default Details;