import React from "react";
import './styles/templateDashboard.css';

const Flick = () => {

    const handleClick = () => {

    }

    return (
        <div className="dtContainer">
            <div className="dtMain">
                <h1 className="dtTitle">FLICK</h1>
                <div className="dtCard">
                    <div className="movie">
                        
                    </div>
                   <div className="swipeButtons">
                        <button className="swipeBtn leftSwipe" type="button" onClick={handleClick}>❤︎</button>
                        <button className="swipeBtn rightSwipe" type="button" onClick={handleClick}>✘</button>
                   </div>
                </div>
            </div>
           
        </div>
    );
}

export default Flick 