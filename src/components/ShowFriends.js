import React,{useState, useEffect} from "react";
import {useGlobalState} from '../utils/stateContext'
import {showFriends} from '../services/friendServices'
import {deleteFriend} from '../services/friendServices'
import { Link } from 'react-router-dom';
import './styles/templateDashboard.css';
import {Button} from './Styled'
import {useHistory} from 'react-router-dom'

const ShowFriend = () => {
    const {store} = useGlobalState()
    const {loggedInUser} = store
    const [friends, setFriends] = useState([])

    const history = useHistory()
    useEffect(()=> {
        showFriends(loggedInUser).then(res => setFriends(res))
        }, [])

    function handleDelete(username) {
        deleteFriend(username)
        .then(() => {
            history.push('/dashboard')
            history.push('/dashboard/friends')
        })
    }
    return (
        <div className='dtListContainer'>
            <ul className="dtList">
                {friends.map(friend => 
                <li className="dtListItem">
                <Link to ={`/dashboard/FriendsMovieList/${friend.username}`}>{friend.username}
                </Link>
                <Button onClick = {() => handleDelete(friend.username)}>Delete</Button>
                </li>)}
            </ul>
        </div>
    )
}

export default ShowFriend