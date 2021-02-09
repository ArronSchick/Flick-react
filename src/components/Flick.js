import React, { useState, useEffect } from 'react';
import './styles/templateDashboard.css';
import axios from 'axios';
import {storeMovies} from '../services/flickServices'
import {useGlobalState} from '../utils/stateContext'

// ----Gets random page number for API call----
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

// --------Keys base image path and missing image/title placeholders---------
const apiKey = 'e4812af5330da7b7e329b9d21a0bf4f1'
const imgPath = 'https://image.tmdb.org/t/p/w300/';
const noImage = process.env.PUBLIC_URL + '/noImage.svg';
const titleFlickDefault = 'NO TITLE';

// ---------default image state----------
export default function Flick() {
  const defaultState = [
    { poster_path: noImage, original_title: titleFlickDefault },
  ];

// ---------Global state and default state values for a new watchlist entry-------  
  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;
  const addMovieToWatchlist = {
    title: null,
    movie_id: null,
    user_id: loggedInUser
  }

// -------state variables for watchlist, movie data from api call and to retrieve a new array of movies for API--------
  const [watchlist, setWatchlist] = useState(addMovieToWatchlist)
  const [data, setData] = useState(defaultState);
  const [next, setNext] = useState(0);
  const [callApi, setCallApi] = useState(false);

  // -------Makes API callApi, sets this as available movie data Array, sets the next movie to be added to watchlist and finally the click counter 'next' back to index 0 which sdisplays the first movie in the new array------
  useEffect(() => {
    (async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&language=en-AU&certification_country=US&certification.lte=PG-13&sort_by=popularity.desc&page=${randomNumber(
          1,
          500
        )}&include_adult=false`
      );
      setData(response.data.results);
      setWatchlist({
        title: (response.data.results[0].original_title),
        movie_id: (response.data.results[0].id),
        user_id: loggedInUser
        })
      setNext(0);
    })();
  }, [callApi, loggedInUser, dispatch]);

  // --------Used to toggle view of dashboard links, sets watchlist data which and displays the current movie at the index === to the value of 'next'-----
  useEffect(() => {
    dispatch({type: 'setShowDash', data: false})
    setWatchlist({
      title: (data[next].original_title),
      movie_id: (data[next].id),
      user_id: loggedInUser
      })
  }, [next, data, loggedInUser, dispatch])
  // -----------triggers the change in state of next, calls the storeMovies to store the movie in watchlist table if the like button is clicked by using rails route in an imported function. Triggers usEffect that calls API-------
  const handleClick = (e) => {
    if (next !== 19) {
      setNext((prevState) => prevState + 1);
    }

    if (e.target.name === "like") {
      storeMovies(watchlist)
    }
    if (next === 19) {
      setCallApi(!callApi);
    }
  };
// -------JSX for Flick View. Conditionally renders movie poster image, retireves title data and calls handlick functions on a click event-------
  return (
    <div className="dtContainer">
      <div className="dtMain">
        <h1 className="dtTitle">FLICK</h1>
        <div className="dtCard">
          <div className="movie">
            <div className="item">
              <img
                alt="movie poster"
                className="posterFlick"
                src={
                  data[next].poster_path === null
                    ? noImage
                    : imgPath + data[next].poster_path
                }
              />
              <p>{data[next].original_title}</p>
            </div>
          </div>
          <div className="swipeButtons">
            <button
              className="swipeBtn leftSwipe"
              type="button"
              name="like"
              onClick={handleClick}
              data-testid="yes"
            >
              ❤︎
            </button>
            <button
              className="swipeBtn rightSwipe"
              type="button"
              name="dislike"
              onClick={handleClick}
              data-testid="no"
            >
              ✘
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
