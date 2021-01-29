import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import './Splash.css';
import Navbar from "./Navbar";


const Splash = () => {
    return (
        <div>
            <Navbar />
            <div className="splashContainer">
                <div className="splashBody">
                    <h1 className="splashTitle">FLICK</h1>
                    <Link to="/signup"><button  className="signUp btn" >SIGN UP</button></Link>
                    <button className="splashRandom btn">RANDOM MOVIE</button>
                </div>
            </div>
        </div>
    );
}

export default Splash
