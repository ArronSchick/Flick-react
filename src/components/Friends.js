import React from "react";
import './styles/templateDashboard.css';

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

const Friends = () => {

    const handleSubmit = () => {

    }

    const handleClick = () => {

    }

    return (
        <div className="dtContainer">
            <div className="dtMain">
                <h1 className="dtTitle">FRIENDS</h1>
                <div className="dtCard">
                    <div className="dtSearch">
                        <input className="friendsSearchField placeColor" placeholder="friends email address" autoFocus/>
                        <input className="btn friendsSearchBtn" type="submit"  onSubmit={handleSubmit} value="Add Friend"/>
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

export default Friends 