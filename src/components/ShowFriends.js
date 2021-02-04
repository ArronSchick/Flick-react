import React,{useState, useEffect, useContext} from "react";
import {useGlobalState} from '../utils/stateContext'
import {showFriends} from '../services/friendServices'
import { Link } from 'react-router-dom';
import './styles/templateDashboard.css';
import {Button, Label, Input} from './Styled'
import Friends from "./Friends"

const ShowFriend = () => {
    const {store} = useGlobalState()
    const {loggedInUser} = store
    const [friends, setFriends] = useState([])

    useEffect(()=> {
        showFriends(loggedInUser).then(res => setFriends(res))
        }, [])


    return (
        <div>
            <ul>
                {friends.map(friend => <li><Link to ={`/dashboard/FriendsMovieList/${friend.username}`}>{friend.username}</Link></li>)}
            </ul>
        </div>
    )
}

export default ShowFriend