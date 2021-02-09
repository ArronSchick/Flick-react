import React,{useEffect} from "react";
import './styles/templateDashboard.css';
import {useGlobalState} from '../utils/stateContext'
import {getMovies} from '../services/movieServices'
import {deleteMovie} from '../services/movieServices'
import { Button} from "./Styled";

export default function Movielist() {

    const {store, dispatch} = useGlobalState()
    const {movies} = store
    const {loggedInUser} = store
    
    useEffect(() => {
        dispatch({type: 'setShowDash', data: false})
        getMovies(loggedInUser)
		.then((movies) => dispatch({type: 'setMovies', data: movies}))
    .catch((error) => console.log(error))
    },[dispatch, loggedInUser])

    function handleDelete(id) {
        deleteMovie(id)
        .then(() => {
            dispatch({type: 'deleteMovie', data: id})
            // history.push('/dashboard')
            // history.push('/dashboard/movielist')
        })
    }

    return (
        <div className="dtContainer">
            <div className="dtMain">
                <h1 className="dtTitle">MOVIES</h1>
                <div className="dtCard">
                    <div className="dtListContainer">
                        <ul className="dtList">
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