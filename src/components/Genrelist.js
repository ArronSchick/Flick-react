import React from "react";
import './Genrelist.css'
import Dropdown from './Dropdown'

const Genrelist = () => {

    const items = [
        {
            id: 1,
            value: 'Action'
        },
        {
            id: 2,
            value: 'Thriller'
        },
        {
            id: 3,
            value: 'Horror'
        },
        {
            id: 4,
            value: 'Romance'
        },
    ]
    return (
        <div className="genreContainer">
            <h1 className="genreTitle">Genre</h1>
            <Dropdown title="Select Genre" items={items} multiSelect/> 
        </div>
    );
}

export default Genrelist