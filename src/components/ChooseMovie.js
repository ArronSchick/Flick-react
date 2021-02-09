import React from "react";
import { useGlobalState } from "../utils/stateContext";
import { Link } from "react-router-dom";
import "./styles/Dashboard.css";

export default function ChooseMovie(props) {
    const { store} = useGlobalState();
    const {commonTitles} = store;
    const randomMovie = commonTitles[Math.floor(Math.random() * commonTitles.length)]
        
    return(
        <div className="chooseMovieContainer">
            <h1>{randomMovie}</h1>
            <Link to={{pathname: "/dashboard/ChooseMovie",}} className="links chooseMovieLink">Don't like this one? Choose another movie at random!</Link>
        </div>
    )
}