import React,{useState, useEffect, useContext} from "react";
import {useGlobalState} from '../utils/stateContext'
import {showFriends} from '../services/friendServices'
import './styles/templateDashboard.css';
import {Button, Label, Input} from './Styled'
import Friends from "./Friends"

export default function ShowFriends() {
    const {store} = useGlobalState()
    const {auth} = store

    const friendsList = showFriends(auth.token)

    return (
        <ul>
            {friendsList.map((friend) => {
                return(
                    <li>{friend.username}</li>
                )
            })}
        </ul>
    )
}
