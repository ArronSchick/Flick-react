import React, { useState, useEffect } from 'react';
import './styles/templateDashboard.css';
import axios from 'axios';
// import { nativeTouchData } from "react-dom/test-utils";

// ----Gets random page number for API call----
function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

const apiKey = 'e4812af5330da7b7e329b9d21a0bf4f1';
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
const imgPath = 'https://image.tmdb.org/t/p/w300/';
const imageFlickDefault = process.env.PUBLIC_URL + '/flickDefault.svg';
const titleFlickDefault = 'click to start';
const year = '&year=2010';

export default function Flick() {
  const defaultState = [
    { poster_path: imageFlickDefault, original_title: titleFlickDefault },
  ];
  const [data, setData] = useState(defaultState);
  const [next, setNext] = useState(0);
  const [callApi, setCallApi] = useState(false);
  const year = '&year=2010';

  useEffect(() => {
    (async function fetchData() {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=${randomNumber(
          1,
          500
        )}&include_adult=false` + year
      );
      setData(response.data.results);
      console.log(response.data.results);
    })();
  }, [callApi]);

  const handleClick = (e) => {
    setNext((prevState) => prevState + 1);
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
                  data[next].poster_path == null
                    ? imageFlickDefault
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
              onClick={handleClick}
            >
              ❤︎
            </button>
            <button
              className="swipeBtn rightSwipe"
              type="button"
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

// import React, {useState, useEffect} from "react";
// import './styles/templateDashboard.css';
// import axios from 'axios'
// // import { nativeTouchData } from "react-dom/test-utils";


// // ----Gets random page number for API call----
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max-min) + min);
// }

// const apiKey = "e4812af5330da7b7e329b9d21a0bf4f1"
// const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;
// const imageFlickDefault = process.env.PUBLIC_URL + '/flickDefault.svg'
// const titleFlickDefault = "click to start"
// const noImage = process.env.PUBLIC_URL + '/noImage.svg'
// const sortBy = "&sort_by="
// const popularity = "popularity.desc"


// export default function Flick() {
// const defaultState = [{poster_path: imageFlickDefault ,original_title:titleFlickDefault}]
//   const [data, setData] = useState(defaultState);
//   const [next, setNext] = useState(0)
//   const [image, setImage] = useState(data[next].poster_path)
//   const [title, setTitle] = useState(titleFlickDefault)
//   const [callApi, setCallApi] = useState(false)
//   const [page, setPage] = useState(288)
//   const BASE_URL = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&include_adult=false&page=${page}`;
  
//   const api = axios.create({ baseURL: BASE_URL + sortBy + popularity + page});
//   let getUpcoming = api.get();
// //   console.trace(getUpcoming)

//   useEffect(() => {
//     getUpcoming.then((res) => {
//         setPage(randomNumber(1,500))
//         console.log(page)
//         setData(res.data.results);
//         console.log(res.data)
//         });

//   }, [callApi]);

//   const handleClick = (e) => {
//     // if (next === 0) {
//     //     setCallApi(!callApi)
//     // }
//     setNext(prevState => prevState + 1)
//     imageCall(data)
//     console.log(image)
//     console.log(next)
//     if (next === 19) {
//         setNext(0)
//         setCallApi(!callApi)
//     }
// }

// function imageCall() {
//     if (data[next].poster_path !== null) {
//         setImage(getImage(data[next].poster_path))
//     } else {
//         setImage(noImage)
//     }
// }
//     return (
//         <div className="dtContainer">
//             <div className="dtMain">
//                 <h1 className="dtTitle">FLICK</h1>
//                 <div className="dtCard">
//                     <div className="movie">
//                             <div className="item">
//                                 <img className="posterFlick" src={image} />
//                                 <p>{data[next].original_title}</p>
//                             </div>
//                     </div>
//                    <div className="swipeButtons">
//                         <button className="swipeBtn leftSwipe" type="button" onClick={handleClick}>❤︎</button>
//                         <button className="swipeBtn rightSwipe" type="button" onClick={handleClick}>✘</button>
//                    </div>
//                 </div>
//             </div>
           
//         </div>
//     );
// }

// cy.visit("/")
//     cy.url().should("include", "/")
//     cy.fixture("user2.json").then((user) => {
//         cy.url().should("include", "/signup")
//         cy.findByTestId('username').type(user.username)
//         cy.findByTestId('email_signup').type(user.email)
//         cy.findByTestId('password_signup').type(user.password)
//         cy.findByTestId('password_confirm').type(user.password)
//         cy.findByTestId('register').should('be.visible').click()
//     })

//     cy.visit("/")
//     cy.url().should("include", "/")
//     cy.fixture("user3.json").then((user) => {
//         cy.url().should("include", "/signup")
//         cy.findByTestId('username').type(user.username)
//         cy.findByTestId('email_signup').type(user.email)
//         cy.findByTestId('password_signup').type(user.password)
//         cy.findByTestId('password_confirm').type(user.password)
//         cy.findByTestId('register').should('be.visible').click()
//     })