import React from "react";
import './styles/templateDashboard.css';

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
        <div className="dtContainer">
            <div className="dtMain">
                <h1 className="dtTitle">MOVIES</h1>
                <div className="dtCard">
                    <div className="dtListContainer">
                        <ul className="dtList">
                            {movies.map(movie => (
                                <li className="dtListItem" key={movie.id}>
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