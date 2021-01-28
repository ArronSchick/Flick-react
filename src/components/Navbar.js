import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './Navbar.css';


const Navbar = () => {
// const show = true
// const [render, setRender] = useState(show)
    return (
        <div className="navContainer">
            <div className="nav">
                <Link to="/signin"><button className="signIn btn">SIGN IN</button></Link>
            </div>
        </div>
        
    );
}

export default Navbar



