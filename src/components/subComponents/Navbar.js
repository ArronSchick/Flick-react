import React from "react";
import {
  Link,
} from "react-router-dom";
import '../styles/Navbar.css';

// --------navbar containing signin link on the splash page which routes to signin form---------
const Navbar = () => {

    return (
        <div className="navContainer">
                <Link to="/signin" ><button className="signIn btn">SIGN IN</button></Link>
        </div>
        
    );
}

export default Navbar



