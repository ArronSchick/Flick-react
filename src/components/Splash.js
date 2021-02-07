
import {
    BrowserRouter as Router,
    Link,
    
  } from "react-router-dom";
import './styles/Splash.css';
import Navbar from "./subComponents/Navbar";
import React,{useState} from 'react'


const Splash = () => {

    // -----------------Random movie button Splash Page------------------------
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max-min) + min);
    }

    let pageNumber = randomNumber(1, 500)
    let arrayItem = randomNumber(1,20)

    const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}&include_adult=false`

    const GENRE_LIST = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
    
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

    const randMovieData = {
        title: "",
        overview: "",
        poster_path: "",
        vote_average: ""
    }

    const [randMovie, setRandMovie] = useState(randMovieData)

    async function getMovies(url) {
        const res = await fetch(url)
        const data = await res.json()
        const randomSelected = data.results[arrayItem]
        setRandMovie({
            title: randomSelected.title,
            overview: randomSelected.overview,
            poster_path: randomSelected.poster_path,
            vote_average: randomSelected.vote_average
        })
    }

    const handleClick = () => {
        getMovies(API_URL)
    }

// ------------------Movie list ----------------------------------

    // const initialState = {
	// 	movies: [],
	// 	loggedInUser: sessionStorage.getItem("user") || null,
	// 	auth: {token:sessionStorage.getItem("token") || null}
	// }
    
    // let {url} = useRouteMatch();
    // const [store, dispatch] = useReducer(stateReducer,initialState)
    // const {loggedInUser} = store
    // const {movie} = store

    // // const [store, dispatch] = useReducer(stateReducer,initialState)
    // const [movies, setMovies] = useState(null)
    // useEffect(() => {
    //     getMovies()
    //     .then((movies) => dispatch({type: "setMovies", data: movies}))
    //     .catch((error)=> console.log(error))
    // }, [])
    return (
        <div>
            <Navbar data-testid="nav"/>
            <div className="splashContainer">
                <div className="splashBody">
                    <h1 className="splashTitle">FLICK</h1>
                    <Link to="/signup"><button  className="signUp btn" data-testid="signup_button">SIGN UP</button></Link>
                </div>
            </div>
            <div className="attributionContainer">
                    <img className="tmdbLogo" src={process.env.PUBLIC_URL + "/tmdb_logo.svg"} ></img>
                    <p className="attribution">This product uses the TMDb API but is not endorsed or certified by TMDb</p>
                </div>
        </div>
    );
}

export default Splash
