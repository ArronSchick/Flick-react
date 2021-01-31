import React from "react";
import './Profile.css'
import Navbar from './Navbar'

let profileName = "USERS NAME"

const Profile = () => {

const handleSubmit = () => {

}

    return (
        <div className="profileContainer">
            <div className="profileMain">
                <h1 className="profileTitle">{profileName}</h1>
                <div className="profileCard">
                    <div className="forms">
                        <h1>Your Profile</h1>
                        <form className="signForm">
                            <div className="fields">
                                <input className="profilename placeColor" autoFocus name="profilename" id="profilename"/>
                                <input className="email placeColor" name="email" id="email"/>
                                <input className="passwords placeColor" placeholder="new password" name="password" id="password"/>
                                <input className="passwords placeColor" placeholder="confirm new password" name="confirmpassword" id="confirmpassword"/>
                            </div>
                            <input className="btn" type="submit" onSubmit={handleSubmit} value="Save changes"/>
                        </form>
                        <Navbar/>
                    </div>
                </div>
            </div>
          
        </div>
    );
}

export default Profile 