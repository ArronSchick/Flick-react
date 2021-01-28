import React, {useState} from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import Navbar from "./Navbar";
import './Forms.css';

const handleSubmit = () => {

}

const SignUp = () => {

    return (
        <div className="formContainer signup">
            <Navbar />
            <div className="forms">
                <h1>Create Account</h1>
                <form className="signForm">
                    <div>
                        <input className="name placeColor" autoFocus placeholder="name"/>
                        <input className="email placeColor" placeholder="email@..."/>
                        <input className="passwords placeColor" placeholder="password"/>
                        <input className="passwords placeColor" placeholder="password"/>
                    </div>
                    <input className="btn" type="submit" onSubmit={handleSubmit} value="sign up"/>
                </form>
                <br></br>
                <Link to="/"><button className="back btn">back</button></Link>
            </div>
        </div>
    );
}

export default SignUp