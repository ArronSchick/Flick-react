import React, {useState} from 'react'
import { Link } from "react-router-dom";
import './styles/Splash.css';
import Navbar from "./subComponents/Navbar";
import axios from 'axios';

const Splash = () => {

    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max-min) + min);
    }

    let pageNumber = randomNumber(1, 500)
    let arrayItem = randomNumber(1,20)

    const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}&include_adult=false`
    
    const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

    const movieData = {
        title: "",
        overview: "",
        poster_path: "",
        vote_average: ""
    }

    const [movie, setMovie] = useState(movieData)

    async function getMovies(url) {
        const res = await fetch(url)
        const data = await res.json()
        // const randomSelected = data.results[arrayItem]
        const randomSelected = data.results[arrayItem]
        setMovie({
            title: randomSelected.title,
            overview: randomSelected.overview,
            poster_path: randomSelected.poster_path,
            vote_average: randomSelected.vote_average
        })
    }

    const handleClick = () => {
        getMovies(API_URL)
    }

    return (
        <div>
            <Navbar />
            <div className="splashContainer">
                <div className="splashBody">
                    <h1 className="splashTitle">FLICK</h1>
                    <Link to="/signup"><button  className="signUp btn" >SIGN UP</button></Link>
                    <button className="splashRandom btn" onClick={handleClick}>RANDOM MOVIE</button>
                </div>
                <div className="randomMovie">
                       <img className="poster" src={IMG_PATH + movie.poster_path} alt={movie.title}/>
                        <div className="movieInfo">
                            <h3 className="randomMovieTitle">{movie.title}</h3>
                            <span className="rating">{movie.vote_average}</span>
                        </div>
                        <div className="overView">
                            {movie.overview}
                        </div>
                </div>
            </div>
        </div>
    );
}

export default Splash
