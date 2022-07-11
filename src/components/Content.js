import React from "react";
import './Content.scss';
import Wheel from '../images/wheel.png';  
import Сhassis from '../images/chassis.png'; 
import Generator from '../images/generator.png'; 
import AirCond from '../images/airCond.png';  
import CompDiagnostik from '../images/compDiagnostik.png'; 
import Disc from '../images/disc.png'; //change img
import Grm from '../images/grm.png'; 
import Cleaning from '../images/cleaning.png';


function Content(){
    return(
        <div className="content">
            <div className="content-images">
            <img src={Wheel} />
            <img src={Сhassis} />
            <img src={Generator} />
            <img src={AirCond} />
            <img src={CompDiagnostik} />
            <img src={Disc} />
            <img src={Grm} />
            <img src={Cleaning} />
            </div>
        </div>
    )
}

export default Content;