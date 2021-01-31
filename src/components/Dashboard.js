import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch
  } from "react-router-dom";
import './Dashboard.css';
import Flick from "./Flick"
import Genrelist from './Genrelist'
import Slider from './Slider'

import Movielist from "./Movielist"

import Friends from "./Friends"

import Profile from "./Profile"

const Dashboard = () => {

    let {url} = useRouteMatch();

    return (
        <div className="dashContainer">
            <Router>
            <div className="linkContainer">
                <Link to={`${url}/flick`}className="links flicklink">Flick</Link>
                <Link to={`${url}/movielist`} className="links movielink">Movie list</Link>
                <Link to={`${url}/friends`} className="links friendlink">Friends</Link>
                <Link to={`${url}/profile`}  className="links profilelink">Profile</Link>
                <Route path={`${url}/flick`} component={Slider}/>
                <Route path={`${url}/flick`} component={Genrelist}/>
            </div>
            <div className="viewsContainer">
                    <Switch>
                        <Route path={`${url}/flick`} component={Flick}/>
                        <Route path={`${url}/movielist`} component={Movielist}/>
                        <Route path={`${url}/friends`} component={Friends}/>
                        <Route path={`${url}/profile`} component={Profile}/>
                    </Switch>
            </div>
            </Router>
        </div>     
    );
}

export default Dashboard
