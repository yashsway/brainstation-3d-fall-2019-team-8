import React from 'react';
import "./TrendingOuterRight.scss";
import TrendingInnerRight from "../TrendingInnerRight/TrendingInnerRight.js";
import TrendingInnerRight2 from "../TrendingInnerRight2/TrendingInnerRight";

export default class TrendingOuterRight extends React.Component{
    render(){
        console.log(this.props.display)
        if (this.props.display == true){
        return(
            <div className="container">
                <TrendingInnerRight></TrendingInnerRight> 
            </div>
        )} else {
            return(
                <div className="container2">
                <TrendingInnerRight2></TrendingInnerRight2>
            </div>
            )
        }
        
    }
}