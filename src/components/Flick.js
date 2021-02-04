import React, {useState, useEffect} from "react";
import './styles/templateDashboard.css';
import axios from 'axios'
// import { nativeTouchData } from "react-dom/test-utils";

const api_key = "e4812af5330da7b7e329b9d21a0bf4f1";
const BASE_URL = "https://api.themoviedb.org/3";
const getImage = (path) => `https://image.tmdb.org/t/p/w300/${path}`;

export default function Flick() {
  const [data, setData] = useState([{poster_path:"0", original_title:"0"}]);
  const [next, setNext] = useState(0)
  

  const api = axios.create({ baseURL: BASE_URL });

  const getUpcoming = api.get("movie/upcoming", { params: { api_key } });

  useEffect(() => {
    getUpcoming.then((res) => {
      setData(res.data.results);
      console.log(data)
    });
  }, [next]);

// const Flck = () => {
// // ----Gets random page number for API call----
//     function randomNumber(min, max) {
//         return Math.floor(Math.random() * (max-min) + min);
//     }

//     let pageNumber = randomNumber(1, 500)
// // ----API URLS---
//     const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${process.env.REACT_APP_API_KEY}&page=${pageNumber}&include_adult=false`

//     // const GENRE_LIST = `https://api.themoviedb.org/3/genre/movie/list?api_key=${process.env.REACT_APP_API_KEY}`
    
//     const IMG_PATH = 'https://image.tmdb.org/t/p/w1280'

// // ---API calls/ State change to store and view Movies---

//     // const makeApiCall = false
    
    
//     const [data, setData] = useState([])
//     const [next, setNext] = useState(0)
//     const [callApi, setCallApi] = useState(false)

//     const api = axios.create()
    
//     async function getFlickMovies(url) {
//         try {
//             await axios
//             .get(url)
//             .then((res) => {
//                 setFlickList([...res.data.results])
//                 console.log(flickList)
//             })
//         } catch (e){
//             console.log(e)
//         } 
//     }

//     useEffect(() => {
//             console.log(pageNumber)   
//             getFlickMovies(API_URL)
//     }, [!callApi])
    
    const handleClick = (e) => {
        setNext(prevState => prevState + 1)
        console.log(next)
        if (next === 19) {
            setNext(0)
        }
    }
    
    return (
        <div className="dtContainer">
            <div className="dtMain">
                <h1 className="dtTitle">FLICK</h1>
                <div className="dtCard">
                    <div className="movie">
                            <div className="item">
                                <img src={getImage(data[next].poster_path)} />
                                <p>{data[next].original_title}</p>
                            </div>
                    </div>
                   <div className="swipeButtons">
                        <button className="swipeBtn leftSwipe" type="button" onClick={handleClick}>❤︎</button>
                        <button className="swipeBtn rightSwipe" type="button" onClick={handleClick}>✘</button>
                   </div>
                </div>
            </div>
           
        </div>
    );
}