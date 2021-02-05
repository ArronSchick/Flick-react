import React,{useEffect} from "react";
import './styles/templateDashboard.css';
import {useGlobalState} from '../utils/stateContext'
import {getMovies} from '../services/movieServices'

export default function Movielist() {

    const {store, dispatch} = useGlobalState()
    const {movies} = store
    const {loggedInUser} = store
    
    useEffect(() => {
		getMovies(loggedInUser)
		.then((movies) => dispatch({type: 'setMovies', data: movies}))
    .catch((error) => console.log(error))
  },[])

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
                                    {/* <button className="removeMovie btn" type="button" onClick={handleClick}>REMOVE</button> */}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}