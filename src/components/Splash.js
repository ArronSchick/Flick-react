import React from 'react';
import {Link} from "react-router-dom";
import './styles/Splash.css';
import Navbar from "./subComponents/Navbar";

// front splash page prompting log in or sign up 
const Splash = () => {
    return (
        <div>
            <Navbar data-testid="nav"/>
            <div className="splashContainer">
                <div className="splashBody">
                    <h1 className="splashTitle">FLICK</h1>
                    <Link to="/signup"><button  className="signUp btn" data-testid="signup_button">SIGN UP</button></Link>
                    {/* <button onClick={handleClick} className="btn">RANDOM</button> */}
                </div>
            </div>
            <div className="attributionContainer">
                    {/* disclaimer required to use API */}
                    <img alt="TMDBlogo" className="tmdbLogo" src={process.env.PUBLIC_URL + "/tmdb_logo.svg"} ></img>
                    <p className="attribution">This product uses the TMDb API but is not endorsed or certified by TMDb</p>
                </div>
        </div>
    );
}

export default Splash
