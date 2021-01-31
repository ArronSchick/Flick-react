import React from "react";
import './Flick.css'

const Flick = () => {

    const handleClick = () => {

    }

    return (
        <div className="flickContainer">
            <div className="flickMain">
                <h1 className="flickTitle">FLICK</h1>
                <div className="movieCard">
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