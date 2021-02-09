import React from "react";
import { useGlobalState } from "../utils/stateContext";
import { Link } from "react-router-dom";
import "./styles/Dashboard.css";

// Chooses a random movie from the common movie list
export default function ChooseMovie() {
    const { store} = useGlobalState();
    const {commonTitles} = store;
    // Function to choose a random movie from commonTitles
    const randomMovie = commonTitles[Math.floor(Math.random() * commonTitles.length)]
        
    return(
        <div className="chooseMovieContainer">
            <h1>{randomMovie}</h1>
            {/* Link to this page to refresh and re-run and choose another random movie */}
            <Link to={{pathname: "/dashboard/ChooseMovie",}} className="links chooseMovieLink">Don't like this one? Choose another movie at random!</Link>
        </div>
    )
}