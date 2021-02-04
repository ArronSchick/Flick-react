import ShowFriends from './ShowFriends'
import Friends from './Friends'
import React,{useState, useEffect, useContext} from "react";
import {useGlobalState} from '../utils/stateContext'
import { useParams } from 'react-router-dom';

export default function FriendsMovieList() {
    
    const friendName = (window.location.pathname.split("/").pop())
    console.log(friendName)

    return (
        <h1>{friendName}'s Movie List</h1>
    )
}