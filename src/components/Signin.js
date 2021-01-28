import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navbar from "./Navbar";
import './Forms.css'

const handleSubmit = () => {

}

const SignIn = () => {
    return (
        <div className="formContainer signin">
            <Navbar />
            <div className="forms">
                <h1>Sign In</h1>
                <form className="signForm">
                    <div> 
                        <input className="email placeColor" autoFocus placeholder="email@..." name="email" id="email"></input>
                        <input className="passwords placeColor" placeholder="password" name="password" id="password"></input>
                    </div>
                    <input className="btn" type="submit" onSubmit={handleSubmit} value="sign in"/>
                </form>
                <br></br>
                <Link to="/"><button className="back btn">back</button></Link>
            </div>
        </div>
    );
}

export default SignIn