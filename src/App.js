import React, { useState, useReducer, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Splash from "./components/Splash";
import Signin from "./components/Signin";
import Signup from "./components/Signup";
import NoMatch from "./components/NoMatch";
import Dashboard from "./components/Dashboard";
import { StateContext } from "./utils/stateContext";
import stateReducer from "./utils/stateReducer.js";
import { ProtectedRoute } from "./utils/ProtectedRoute";
import { getMovies } from "./services/movieServices";

function App() {
  const initialState = {
    movies: [],
		loggedInUser: sessionStorage.getItem("user") || null,
		auth: {token:sessionStorage.getItem("token") || null}
	}
	const [store, dispatch] = useReducer(stateReducer,initialState)
  const {loggedInUser} = store 
  
  return (
    <div className="main">
      <StateContext.Provider value={{ store, dispatch }}>
        <Router>
          <Switch>
            <Route exact path="/" component={Splash} />
            <Route path="/signin" component={Signin} />
            <Route path="/signup" component={Signup} />
            <ProtectedRoute path="/dashboard" component={Dashboard} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
