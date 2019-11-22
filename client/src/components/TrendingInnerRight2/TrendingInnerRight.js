import React from 'react';
import "./TrendingInnerRight.scss";
import img1 from "../../assets/right/7.png";
import img2 from "../../assets/right/6.png";
import img3 from "../../assets/right/3.png";
import img4 from "../../assets/right/1.jpg";
import img5 from "../../assets/right/2.jpg";
import img6 from "../../assets/right/8.png";

export default class TrendingInnerRight2 extends React.Component{
    render(){
        return(
            <div className="container">
                <img classNamr="image" src={img1} alt=""/>
                <img classNamr="image" src={img2} alt=""/>
                <img classNamr="image" src={img3} alt=""/>
                <img classNamr="image" src={img4} alt=""/>
                <img classNamr="image" src={img5} alt=""/>
                <img classNamr="image" src={img6} alt=""/>
            </div>
        )
    }
}