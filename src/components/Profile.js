import React from "react";
import './Profile.css'

let profileName = "Users name"

const Profile = () => {

const handleSubmit = () => {

}

    return (
        <div className="profileContainer">
            <h1>{profileName}</h1>
            <div className="forms">
                <h1>Profile</h1>
                <form className="signForm">
                    <div className="fields">
                        <input className="profilename placeColor" autoFocus name="profilename" id="profilename"/>
                        <input className="email placeColor" name="email" id="email"/>
                        <input className="passwords placeColor" placeholder="new password" name="password" id="password"/>
                        <input className="passwords placeColor" placeholder="confirm new password" name="confirmpassword" id="confirmpassword"/>
                    </div>
                    <input className="btn" type="submit" onSubmit={handleSubmit} value="Edit profile"/>
                </form>
            </div>
        </div>
    );
}

export default Profile 