import React,{useState, useEffect, useContext} from "react";
import {useGlobalState} from '../utils/stateContext'
import {addFriends} from '../services/friendServices'
import './styles/templateDashboard.css';
import {Button, Label, Input} from './Styled'

const friends = [
    {
        id: 1,
        profileName: "Bob",
        email: "bob@gmail.com"
    },
    {
        id: 2,
        profileName: "Bob",
        email: "bob@gmail.com"
    },
    {
        id: 3,
        profileName: "Bob",
        email: "bob@gmail.com"
    },
    {
        id: 4,
        profileName: "Bob",
        email: "bob@gmail.com"
    },
    {
        id: 5,
        profileName: "Bob",
        email: "bob@gmail.com"
    }
]

export default function Friends (){
    const initialFormState = {
        email: ''
    }

    const [formState, setFormState] = useState(initialFormState)
    const {store} = useGlobalState()
    const {auth} = store

    // useEffect(() => {
    //     if(auth) {
    //       addFriends(data)
    //       .then((friend) => {
    //           console.log(friend)
    //           setFormState({
    //               email: data
    //           })
    //       })  
    //     }
    // })

    function handleSubmit(event) {
        event.preventDefault()
        addFriends(formState)
        .then(({email}) => {
            console.log(email);
            // dispatch({type: 'addFriends', data: email})
        })
        .catch((error) => console.log(error))
    }


    function handleClick() {

    }

    function handleChange(event) {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div className="dtContainer">
            <div className="dtMain">
                <h1 className="dtTitle">FRIENDS</h1>
                <div className="dtCard">
                    <div className="dtSearch">
                        <Input placeholder="email" className = "email placeColor" id="email" type='email' name='email' value={formState.email} onChange={handleChange}></Input>
                        <Button onClick={handleSubmit} value="Add Friend">Add Friend</Button>
                    </div>
                    <div className="dtListContainer">
                        <ul className="dtList">
                            {friends.map(friend => (
                                <li className="dtListItem" key={friend.id}>
                                    <span>{friend.profileName}</span>
                                    <span>{friend.email}</span>
                                    <button className="removeFriend btn" type="button" onClick={handleClick}>REMOVE</button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}