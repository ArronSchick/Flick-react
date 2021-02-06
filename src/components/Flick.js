import React, { useState, useEffect } from 'react';
import './styles/templateDashboard.css';
import axios from 'axios';
import {storeMovies} from '../services/flickServices'
import {useGlobalState} from '../utils/stateContext'

// import { nativeTouchData } from "react-dom/test-utils";

// ----Gets random page number for API call----
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const apiKey = 'e4812af5330da7b7e329b9d21a0bf4f1'
const imgPath = 'https://image.tmdb.org/t/p/w300/';
const noImage = process.env.PUBLIC_URL + '/noImage.svg';
const titleFlickDefault = 'click to start';

export default function Flick() {
  const defaultState = [
    { poster_path: noImage, original_title: titleFlickDefault },
  ];

  const { store, dispatch } = useGlobalState();
  const { loggedInUser } = store;
  const addMovieToWatchlist = {
    title: null,
    movie_id: null,
    user_id: loggedInUser
  }

  const [watchlist, setWatchlist] = useState(addMovieToWatchlist)
  const [data, setData] = useState(defaultState);
  const [next, setNext] = useState(0);
  const [callApi, setCallApi] = useState(false);
  // const yearParam = '&year=';

  useEffect(() => {
    (async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${randomNumber(
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
    })();
  }, [callApi]);

  useEffect(() => {
    setWatchlist({
      title: (data[next].original_title),
      movie_id: (data[next].id),
      user_id: loggedInUser
      })
  }, [next])

  const handleClick = (e) => {
    setNext((prevState) => prevState + 1);

    if (e.target.name === "like") {
      storeMovies(watchlist)
    }
    if (next === 5) {
      setCallApi(!callApi);
      setNext(0);
    }
  };

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
            >
              ❤︎
            </button>
            <button
              className="swipeBtn rightSwipe"
              type="button"
              name="dislike"
              onClick={handleClick}
            >
              ✘
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
