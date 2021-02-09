import React,{useEffect} from "react";
import './styles/templateDashboard.css';
import {useGlobalState} from '../utils/stateContext'
import {getMovies} from '../services/movieServices'
import {deleteMovie} from '../services/movieServices'
import { Button} from "./Styled";

// shows current logged in users liked movie list
export default function Movielist() {

    const {store, dispatch} = useGlobalState()
    const {movies} = store
    const {loggedInUser} = store
    // API call to get logged in user's movie list using their username
    useEffect(() => {
        dispatch({type: 'setShowDash', data: false})
        getMovies(loggedInUser)
		.then((movies) => dispatch({type: 'setMovies', data: movies}))
    .catch((error) => console.log(error))
    },[dispatch, loggedInUser])

    // deletes movie from users list using movie ID as param 
    function handleDelete(id) {
        deleteMovie(id)
        .then(() => {
            dispatch({type: 'deleteMovie', data: id})
        })
    }

    return (
        <div className="dtContainer">
            <div className="dtMain">
                <h1 className="dtTitle">MOVIES</h1>
                <div className="dtCard">
                    <div className="dtListContainer">
                        <ul className="dtList">
                            {/* iterates through movie list and displays title */}
                            {movies.map(movie => (
                                <li className="dtListItem" key={movie.id}>
                                    <span>{movie.title}</span>
                                    <Button onClick = {() => handleDelete(movie.id)}>Delete</Button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}