import React from "react";
import {
  Link,
} from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {

    let signedIn = true

    return (
        <div className="navContainer">
                {signedIn ? <Link to="/signin" ><button className="signIn btn">SIGN IN</button></Link> : <Link to="/signin" ><button className="signIn btn">SIGN OUT</button></Link>}
        </div>
        
    );
}

export default Navbar



