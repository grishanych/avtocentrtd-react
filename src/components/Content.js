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
import ContentBG from '../images/bg2.jpg';


function Content() {
    return (
        <div className="content"  style={{ backgroundImage:`url(${ContentBG})` }}>
            <div className="content-images">
                <div className="first-line">
                    <div className="image-content-hover">
                        <div className="text-for-content-images">
                            <p>шиномонтаж</p>
                        </div>
                        <img src={Wheel} />
                    </div>
                    <div className="image-content-hover">
                        <div className="text-for-content-images">
                            <p>ремонт ходової</p></div>
                        <img src={Сhassis} />
                    </div>
                    <div className="image-content-hover">
                        <div className="text-for-content-images">
                            <p>ремонт стартерів та генераторів</p>
                        </div>
                        <img src={Generator} /></div>
                    <div className="image-content-hover">
                        <div className="text-for-content-images">
                            <p>заправка та ремонт кондиціонерів</p>
                        </div>
                        <img src={AirCond} />
                    </div>
                </div>

                <div className="second-line">
                    <div className="image-content-hover">
                        <div className="text-for-content-images">
                            <p >комп'ютерна діагностика</p>
                        </div>
                        <img src={CompDiagnostik} />
                    </div>
                    <div className="image-content-hover">
                        <div className="text-for-content-images">
                            <p >рихтовка дистів, аргонна зварка</p>
                        </div>
                        <img src={Disc} />
                    </div>
                    <div className="image-content-hover">
                        <div className="text-for-content-images">
                            <p >заміна ремнів грм</p>
                        </div>
                        <img src={Grm} />
                    </div>
                    <div className="image-content-hover">
                        <div className="text-for-content-images">
                            <p >хімчистка салону</p>
                        </div>
                        <img src={Cleaning} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Content;