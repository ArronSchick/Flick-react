import React from "react";
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";
import './Sidebar.css'

const Sidebar = () => {
    return (
        <div className="sideContainer">
            <div className="menu">
                <Link to="/flick" className="links flicklink">Flick</Link>
                <Link to="/movielist" className="links movielink">Movie list</Link>
                <Link to="/friends" className="links friendlink">Friends</Link>
                <Link to="/profile" className="links profilelink">Profile</Link>
            </div>
        </div>
    );
}

export default Sidebar
