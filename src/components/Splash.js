import React from "react";
import {
  Link
} from "react-router-dom";
import './styles/Splash.css';
import Navbar from "./subComponents/Navbar";

fetch(``)

const handleClick = () => {

}

const Splash = () => {
    return (
        <div>
            <Navbar />
            <div className="splashContainer">
                <div className="splashBody">
                    <h1 className="splashTitle">FLICK</h1>
                    <Link to="/signup"><button  className="signUp btn" >SIGN UP</button></Link>
                    <button className="splashRandom btn" onClick={handleClick}>RANDOM MOVIE</button>
                </div>
            </div>
        </div>
    );
}

export default Splash
