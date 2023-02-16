import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

const Details = () => {
    const history = useHistory();
    const movie = useSelector(store => store.thisMovie);
    const genres = useSelector(store => store.genres);
    let genreString = '';

    //function to format the genres into a string to display on the DOM
    const genreFormatter = () => {
        for(let i=0; i<genres.length; i++){
            if(i < genres.length - 1){
                genreString += genres[i].name + ', ';
            }else if(i == genres.length - 1){
                genreString += genres[i].name;
            }
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
            <p>Genres: {genreString}</p>
        </div>
        <br></br>
        <button onClick={() => history.push('/')}>Back To List</button>
        </>
    );
}

export default Details;