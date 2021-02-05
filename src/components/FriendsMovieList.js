import ShowFriends from './ShowFriends'
import Friends from './Friends'
import React,{useState, useEffect, useContext, createContext, useReducer} from "react";
import {getMovies} from '../services/movieServices';
import {useGlobalState} from '../utils/stateContext'
import { useParams } from 'react-router-dom';
import stateReducer from '../utils/stateReducer.js';
import {StateContext} from '../utils/stateContext';
import {FriendContext} from '../utils/friendContext'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useHistory
  } from "react-router-dom";
import CommonList from "./CommonList"

export default function FriendsMovieList() {
    const initialState = {
        friendsList: []
    }
    
    const friendName = (window.location.pathname.split("/").pop())
    const [friend, dispatch] = useReducer(stateReducer,initialState)
    const {friendsList} = friend
    console.log(friendsList)
    useEffect(()=> {
        getMovies(friendName)
        .then((friendsList) => dispatch({type: 'setFriendsList', data: friendsList}))
        .catch((error) => console.log(error))
        }, [friendName])

    return (
        <div>
            <FriendContext.Provider value={{friend}}>
            <div>
                <h1>{friendName}'s Movie List</h1>
                <ul className="dtList">
                    {friendsList.map(friendsList => (
                        <li className="dtListItem" key={friendsList.id}>
                            <span>{friendsList.title}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
            <Link to={{
                pathname: "/dashboard/CommonList",
                friendProps:{
                    name: {friendsList}}
                }}  className="links profilelink">See Common Titles!</Link>
            </div>
            </FriendContext.Provider>  
        </div>
    );
}