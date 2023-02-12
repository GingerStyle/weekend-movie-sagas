import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './MovieList.css'

function MovieList() {

    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    const thisMovie = useSelector(store => store.thisMovie);

    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    //function to capture which movie was clicked on and save it in a reducer, then go to the details view
    const handleClick = (movieObject) => {
        dispatch({type: 'SET_THIS_MOVIE', payload: movieObject});
        history.push('/details')
    }

    return (
        <main>
            <h1>MovieList</h1>
            <section className="movies">
                {movies.map(movie => {
                    return (
                        <div key={movie.id} >
                            <h3>{movie.title}</h3>
                            <img src={movie.poster} alt={movie.title} onClick={() => handleClick(movie)}/>
                        </div>
                    );
                })}
            </section>
        </main>

    );
}

export default MovieList;