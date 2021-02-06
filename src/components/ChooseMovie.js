import { Button, Input } from "./Styled";
import React from "react";
import { useGlobalState } from "../utils/stateContext";
import { Link } from "react-router-dom";

export default function ChooseMovie(props) {
    const { store} = useGlobalState();
    const {commonTitles} = store;
    const randomMovie = commonTitles[Math.floor(Math.random() * commonTitles.length)]
        
    return(
        <div>
            <h1>{randomMovie}</h1>
            <Link to={{pathname: "/dashboard/ChooseMovie",}} className="links profilelink">Don't like this one? Choose another movie at random!</Link>
        </div>
    )
}