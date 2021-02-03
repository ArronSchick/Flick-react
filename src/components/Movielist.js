import React from "react";
import './styles/templateDashboard.css';
import {useGlobalState} from '../utils/stateContext'

export default function Movielist() {

    const {store} = useGlobalState()
    const {movies} = store
    const {auth} = store
    console.log(movies)
    console.log(auth.token)
    if(!movies) return null

    

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