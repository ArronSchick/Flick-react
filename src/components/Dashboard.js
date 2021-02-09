import React, {useState} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useHistory,
} from "react-router-dom";
import "./styles/Dashboard.css";
import Flick from "./Flick";
import Genrelist from "./subComponents/Genrelist";
import Movielist from "./Movielist";
import Friends from "./Friends";
import Profile from "./Profile";
import FriendsMovieList from "./FriendsMovieList";
import CommonList from "./CommonList";
import { useGlobalState } from "../utils/stateContext";
import { signOut } from "../services/authServices";
import { Button} from "./Styled";
import ChooseMovie from "./ChooseMovie"

// Dashboard to show links to all main components
const Dashboard = () => {
  let history = useHistory();
  let { url } = useRouteMatch();
  const { store, dispatch } = useGlobalState();
  const { loggedInUser, showDash } = store;

  // handles sign out and returns user to index page
  function handleSignOut(event) {
    event.preventDefault();
    signOut(loggedInUser).then(() => {
      dispatch({ type: "setLoggedInUser", data: null });
      dispatch({ type: "setToken", data: null });
      history.push("");
    });
  }

  // function to toggle the dashboard display on and off for mobile view
  function handleClick(event) {
    event.preventDefault()
    if (showDash === false){
      dispatch({type: "setShowDash", data: true})
    } else {
      dispatch({type: "setShowDash", data: false})
    }
  }

  return (
    <div>
      <Router>
        {/* this will only be visible when media screen is less than 500px wide */}
        <div className="menuAppear">
        <Button onClick={handleClick}>Menu</Button>
        </div>
        <div>
          {/* this will only show if showDash state is set to true */}
          {showDash ? 
              <div className="linkContainers">
                <Link to={`${url}/flick`} className="links flicklink" >
                  Flick
                </Link>
                <Link to={`${url}/movielist`} className="links movielink">
                  Movie list
                </Link>
                <Link to={`${url}/friends`} className="links friendlink">
                  Friends
                </Link>
                <Link to={`${url}/profile`} className="links profilelink">
                  Profile
                </Link>
                <Route path={`${url}/flick`} component={Genrelist} />
                <h1>{loggedInUser}</h1>
                {loggedInUser ? (
                  <Button onClick={handleSignOut}>Sign Out</Button>)
                : null}
              </div>
            : null}
        </div>
        {/* Displays all the links to major parent components */}
        <div className="dashContainer">
            <div className="linkContainer">
              <Link to={`${url}/flick`} className="links flicklink">
                Flick
              </Link>
              <Link to={`${url}/movielist`} className="links movielink">
                Movie list
              </Link>
              <Link to={`${url}/friends`} className="links friendlink">
                Friends
              </Link>
              <Link to={`${url}/profile`} className="links profilelink">
                Profile
              </Link>
              <Route path={`${url}/flick`} component={Genrelist} />
              <h1>{loggedInUser}</h1>
              {loggedInUser ? (
                <Button onClick={handleSignOut}>Sign Out</Button>)
              : null}
            </div>
            {/* displays the chosen component based on the link */}
            <div className="viewsContainer">
              <Switch>
                <Route path={`${url}/flick`} component={Flick} />
                <Route path={`${url}/movielist`} component={Movielist} />
                <Route path={`${url}/friends`} component={Friends} />
                <Route path={`${url}/profile`} component={Profile} />
                <Route path={`${url}/FriendsMovieList`} component={FriendsMovieList}/>
                <Route path={`${url}/CommonList`} component={CommonList} />
                <Route path={`${url}/ChooseMovie`} component={ChooseMovie} />
              </Switch>
            </div>
        </div>
      </Router>
    </div>
  );
};

export default Dashboard;
