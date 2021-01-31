import React, {useState} from "react";
import './Slider.css'


const Slider = () => {

const minYear = 1950
const getDate = new Date();
const currentYear = getDate.getFullYear();

const years = {
    fromValue: 1950,
    toValue: 2021
}

const [year, setYear] = useState(years)

const handleOnChange = (e) => {
            if (year.fromValue < year.toValue) {
                setYear({
                    ...year,
                    [e.target.name]: e.target.value
                })
            } else {
                setYear({
                    ...year,
                    fromValue: year.toValue - 1,
                })
            }
            
     
    }
    

    return (
        <div className="mainSliderContainer">
            <h1 className="dateTitle">Release date</h1>
            <div className="sliderContainer">
                <div className="sliders">
                    <input name="fromValue" type="range" min={minYear} max={`${currentYear}`} value={years.fromValue} className="slider1 slide" onChange={handleOnChange}></input>
                    <input name="toValue" type="range" min={minYear} max={`${currentYear}`} value={years.toValue} className="slider2 slide" onChange={handleOnChange}></input>
                </div>
                <div className="sliderDate">
                    <p className="date">{`${year.fromValue} - ${year.toValue}`}</p>
                </div>
            </div>
           
        </div>
    );
}

export default Slider 