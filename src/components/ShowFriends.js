import React,{ useEffect} from "react";
import {useGlobalState} from '../utils/stateContext'
import {showFriends} from '../services/friendServices'
import {deleteFriend} from '../services/friendServices'
import { Link } from 'react-router-dom';
import './styles/templateDashboard.css';
import {Button} from './Styled'

const ShowFriend = () => {
    const { store, dispatch } = useGlobalState();
    const {friends} = store
    const {loggedInUser} = store
    console.log(loggedInUser)
    
    useEffect(()=> {
        dispatch({type: 'setShowDash', data: false})
        showFriends(loggedInUser)
        .then((friends) => dispatch({type: 'setFriends', data:friends}))
        .catch((error) => dispatch({type: 'setFriends', data:[]}))
        }, [dispatch, loggedInUser])

    function handleDelete(username) {
        deleteFriend(username)
        .then(() => {
            dispatch({type: 'deleteFriend', data: username})
        })
    }
    console.log(friends)
    return (
        <div className='dtListContainer'>
            <ul className="dtList">
                {friends.map(friend => 
                <li className="dtListItem2" key={friend.id}>
                <h1>{friend.username}</h1>
                <div className="dtListContainer2">
                <Link to={`/dashboard/FriendsMovieList/${friend.username}`} className="dtSeeList">See their List!
                </Link>
                <Button onClick = {() => handleDelete(friend.username)}>Delete</Button>
                </div>
                </li>)}
            </ul>
            <div>

            </div>
        </div>
    )
}

export default ShowFriend