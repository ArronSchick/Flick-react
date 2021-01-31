import React from "react";
import {
  BrowserRouter as Router,
  Link,
} from "react-router-dom";
import './Navbar.css';

const Navbar = () => {

    let signedIn = true

    return (
        <div className="navContainer">
                {signedIn ? <Link to="/signin" ><button className="signIn btn">SIGN IN</button></Link> : <Link to="/signin" ><button className="signIn btn">SIGN OUT</button></Link>}
        </div>
        
    );
}

export default Navbar



