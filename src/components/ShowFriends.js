import React,{useState, useEffect} from "react";
import {useGlobalState} from '../utils/stateContext'
import {showFriends} from '../services/friendServices'
import {deleteFriend} from '../services/friendServices'
import { Link } from 'react-router-dom';
import './styles/templateDashboard.css';
import {Button} from './Styled'
import {useHistory} from 'react-router-dom'

const ShowFriend = () => {
    const { store, dispatch } = useGlobalState();
    const {friends} = store
    const {loggedInUser} = store
    useEffect(()=> {
        showFriends(loggedInUser)
        .then((friends) => dispatch({type: 'setFriends', data:friends}))
        }, [])

    function handleDelete(username) {
        deleteFriend(username)
        .then(() => {
            dispatch({type: 'deleteFriend', data: username})
        })
    }
    return (
        <div className='dtListContainer'>
            <ul className="dtList">
                {friends.map(friend => 
                <li className="dtListItem">
                <h1>{friend.username}</h1>
                <Link to ={`/dashboard/FriendsMovieList/${friend.username}`}>See their List!
                </Link>
                <Button onClick = {() => handleDelete(friend.username)}>Delete</Button>
                </li>)}
            </ul>
        </div>
    )
}

export default ShowFriend