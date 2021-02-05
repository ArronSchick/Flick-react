import React from "react";
import {
  Link,
} from "react-router-dom";
import '../styles/Navbar.css';

const Navbar = () => {

    let signedIn = true

    return (
        <div className="navContainer">
                {signedIn ? <Link to="/signin" ><button className="signIn btn" name="signin">SIGN IN</button></Link> : <Link to="/signin" ><button className="signIn btn" name="signout">SIGN OUT</button></Link>}
        </div>
        
    );
}

export default Navbar



