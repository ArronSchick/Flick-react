import React,{useState, useReducer, useEffect} from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Splash from './components/Splash';
import Signin from './components/Signin';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import {StateContext} from './utils/stateContext';
import stateReducer from './utils/stateReducer.js';
import {getMovies} from './services/apitest'

function App() {

  const initialState = {
		movies: [],
		loggedInUser: null,
		auth: {token: null}
	}
	const [store, dispatch] = useReducer(stateReducer,initialState)
	const [randomMovies, setRandomMovie] = useState(null)
	useEffect(() => {
		getMovies()
		.then((movies) => dispatch({type: 'setRandomMovie', data: movies}))
		.catch((error) => console.log(error))
  },[])
  
  return (
    <div className="main">
      <StateContext.Provider value={{store,dispatch}}>
        <Router>
          <Switch>
            <Route exact path="/" component={Splash}/>
            <Route path="/signin" component={Signin}/>
            <Route path="/signup" component={Signup}/>
            <Route path="/dashboard" component={Dashboard}/>
          </Switch>
        </Router>
      </StateContext.Provider>
    </div>
  );
}

export default App;
