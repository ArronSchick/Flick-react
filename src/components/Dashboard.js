import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
  } from "react-router-dom";
import './Dashboard.css';

import Flick from "./Flick"
import Genrelist from "./Genrelist"
import Slider from "./Slider"

import Movielist from "./Movielist"

import Friends from "./Friends"

import Profile from "./Profile"

const Dashboard = () => {
    return (
        <div className="dashContainer">
            <div className="sideContainer">
                <div className="menu">
                    <Router>
                        <Link to="/flick" className="links flicklink">Flick</Link>
                        <Link to="/movielist" className="links movielink">Movie list</Link>
                        <Link to="/friends" className="links friendlink">Friends</Link>
                        <Link to="/profile" className="links profilelink">Profile</Link>
                        <Switch>
                            <Route exact path="/flick" component={Flick}/>
                            <Route exact path="/movielist" component={Movielist}/>
                            <Route exact path="/friends" component={Friends}/>
                            <Route exact path="/profile" component={Profile}/>
                        </Switch>
                    </Router>
                </div> 
            </div> 
        </div>     
    );
}

export default Dashboard
