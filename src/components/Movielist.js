import React from "react";
import './Movielist.css'

const movies = [
    {
        id: 1,
        title: "A Movie",
        runTime: "120 min"
    },
    {
        id: 2,
        title: "A Movie",
        runTime: "120 min"
    },
    {
        id: 3,
        title: "A Movie",
        runTime: "120 min"
    },
    {
        id: 4,
        title: "A Movie",
        runTime: "120 min"
    },
    {
        id: 5,
        title: "A Movie",
        runTime: "120 min"
    }
]

const Movielist = () => {

    const handleClick = () => {

    }

    return (
        <div className="moviesContainer">
            <div className="moviesMain">
                <h1 className="moviesTitle">MOVIES</h1>
                <div className="moviesCard">
                    <div className="moviesListContainer">
                        <ul className="moviesList">
                            {movies.map(movie => (
                                <li className="moviesListItem" key={movie.id}>
                                    <span>{movie.title}</span>
                                    <span>{movie.runTime}</span>
                                    <button className="removeMovie btn" type="button" onClick={handleClick}>REMOVE</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Movielist 