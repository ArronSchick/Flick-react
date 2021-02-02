
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
  } from "react-router-dom";
import './styles/Splash.css';
import Navbar from "./subComponents/Navbar";
import React,{useState, useReducer, useEffect} from 'react'
import {getMovies} from '../services/movieServices'
import railsAPI from '../config/api'
import stateReducer from '../utils/stateReducer.js';

// const initialState = {
//     jokes: [],
//     loggedInUser: null,
//     auth: {token: null}
// }
// const [store, dispatch] = useReducer(stateReducer,initialState)
// const [randomJoke, setRandomJoke] = useState(null)
// useEffect(() => {
//     getJokes()
//     .then((jokes) => dispatch({type: 'setJokes', data: jokes}))
//     .catch((error) => console.log(error))
// },[])
fetch(``)

const handleClick = () => {

}

const Splash = () => {
    const initialState = {
		movies: [],
		loggedInUser: sessionStorage.getItem("user") || null,
		auth: {token:sessionStorage.getItem("token") || null}
	}
    
    let {url} = useRouteMatch();
    const [store, dispatch] = useReducer(stateReducer,initialState)
	const {loggedInUser} = store

    // const [store, dispatch] = useReducer(stateReducer,initialState)
    const [movies, setMovies] = useState(null)
    useEffect(() => {
        getMovies()
        // .then((movies) => dispatch({type: 'setMovies', data: movies}))
        .catch((error)=> console.log(error))
    })
    return (
        <div>
            <Navbar />
            <div className="splashContainer">
                <div className="splashBody">
                    <h1 className="splashTitle">FLICK</h1>
                    <Link to="/signup"><button  className="signUp btn" >SIGN UP</button></Link>
                    <button className="splashRandom btn">RANDOM MOVIE</button>
                    <h1>{loggedInUser}</h1>
                </div>
            </div>
        </div>
    );
}

export default Splash
