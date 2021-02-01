import React from "react";
import {
    Link
  } from "react-router-dom";
import './styles/Forms.css';

const SignUp = () => {

const handleSubmit = () => {

}

    return (
        <div className="formContainer signup">
            <div className="forms">
                <h1>Create Account</h1>
                <form className="signForm">
                    <div className="fields">
                        <input className="profilename placeColor" autoFocus placeholder="profilename" name="profilename" id="profilename"/>
                        <input className="email placeColor" placeholder="email@..." name="email" id="email"/>
                        <input className="passwords placeColor" placeholder="password" name="password" id="password"/>
                        <input className="passwords placeColor" placeholder="password" name="confirmpassword" id="confirmpassword"/>
                    </div>
                    <input className="btn" type="submit" onSubmit={handleSubmit} value="create"/>
                </form>
                <br></br>
                <Link to="/"><button className="back btn">BACK</button></Link>
            </div>
        </div>
    );
}

export default SignUp