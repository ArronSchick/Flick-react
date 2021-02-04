import React, {useState, useEffect} from "react";
import {App} from "../App"
import {useGlobalState} from '../utils/stateContext'
import {useFriendState} from '../utils/friendContext'

export default function CommonList() {
    const {store} = useGlobalState()
    // const {friend} = useFriendState()
    const {movies} = store
    // const {friendsList} = friend
    const {loggedInUser} = store
    // if(!friend) return null 

    console.log(movies)
    console.log(loggedInUser)
    // console.log(friendsList)
    
    return (
        <div>
            <h1>Common List</h1>
        </div>
    )
}


