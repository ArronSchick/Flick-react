import React, {useReducer} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
  } from "react-router-dom";
import './styles/Dashboard.css';
import Flick from "./Flick"
import Genrelist from './subComponents/Genrelist'
import Movielist from "./Movielist"
import Friends from "./Friends"
import Profile from "./Profile"
import {StateContext} from '../utils/stateContext';
import {useGlobalState} from '../utils/stateContext'
import stateReducer from '../utils/stateReducer.js';
import { signOut } from "../services/authServices";
import {Button, Input} from './Styled'
import {getFlickMovies} from "./Flick"

const Dashboard = () => {
    const initialState = {
		movies: [],
		loggedInUser: sessionStorage.getItem("user") || null,
		auth: {token:sessionStorage.getItem("token") || null}
	}
    let history = useHistory()
    let {url} = useRouteMatch();
    const [store, dispatch] = useReducer(stateReducer,initialState)
	const {loggedInUser} = store

    function handleSignOut(event) {
        event.preventDefault()
        signOut(loggedInUser)
        .then(() => {
            dispatch({type: 'setLoggedInUser', data: null})
            dispatch({type: 'setToken', data: null})
            history.push('/signin')
        })
    }

    return (
        <div className="dashContainer">
            <Router>
            <div className="linkContainer">
                <Link to={`${url}/flick`}className="links flicklink">Flick</Link>
                <Link to={`${url}/movielist`} className="links movielink">Movie list</Link>
                <Link to={`${url}/friends`} className="links friendlink">Friends</Link>
                <Link to={`${url}/profile`}  className="links profilelink">Profile</Link>
                <Route path={`${url}/flick`} component={Genrelist}/>
                <h1>{loggedInUser}</h1>
                {loggedInUser ?
                    <Button onClick={handleSignOut}>Sign Out</Button> : null
                }	
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
