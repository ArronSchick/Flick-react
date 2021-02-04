import React,{useState, useEffect, useContext} from "react";
import {useGlobalState} from '../utils/stateContext'
import {showFriends} from '../services/friendServices'
import './styles/templateDashboard.css';
import {Button, Label, Input} from './Styled'
import Friends from "./Friends"

const ShowFriend = () => {
    const {store} = useGlobalState()
    const {loggedInUser} = store
    const [friends, setFriends] = useState([])

    useEffect(()=> {
        showFriends(loggedInUser).then(res => setFriends(res))
        }, [loggedInUser])


    return (
        <div>
            {friends.map(friend => <div>{friend.username}</div>)}
        </div>
    )
}

export default ShowFriend