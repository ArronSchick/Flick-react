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

const Dashboard = () => {
  let history = useHistory();
  let { url } = useRouteMatch();
  const { store, dispatch } = useGlobalState();
  const { loggedInUser, showDash } = store;
  // const [showDash, setShowDash] = useState(false)

  function handleSignOut(event) {
    event.preventDefault();
    signOut(loggedInUser).then(() => {
      dispatch({ type: "setLoggedInUser", data: null });
      dispatch({ type: "setToken", data: null });
      history.push("");
    });
  }

  function handleClick(event) {
    event.preventDefault()
    if (showDash === false){
      dispatch({type: "setShowDash", data: true})
    } else {
      dispatch({type: "setShowDash", data: false})
    }
  }
  console.log(showDash)
  return (
    <div>
      <Router>
    <div className="menuAppear">
    <Button onClick={handleClick}>Menu</Button>
    </div>
    <div>
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
