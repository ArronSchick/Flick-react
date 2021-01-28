import React from "react";
import './Flick.css'
import Genrelist from './Genrelist'
import Slider from './Slider'

const Flick = () => {
    return (
        <div>
            <h1>Flick</h1>
            <Genrelist/>
            <Slider/>
        </div>
    );
}

export default Flick 