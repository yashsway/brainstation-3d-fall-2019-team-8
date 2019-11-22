import React from 'react';
import "./TrendingOuterRight.scss";
import TrendingInnerRight from "../TrendingInnerRight/TrendingInnerRight.js";

export default class TrendingOuterRight extends React.Component{
    render(){
        console.log(this.props.display)
        if (this.props.display == true){
        return(
            <div className="container">
                <TrendingInnerRight></TrendingInnerRight> 
                {/* <TrendingInnerRight></TrendingInnerRight> 
                <TrendingInnerRight></TrendingInnerRight> 
                <TrendingInnerRight></TrendingInnerRight>  */}
            </div>
        )} else {
            return(
                <div className="container2"> SAHIBA
                {/* <TrendingInnerRight></TrendingInnerRight> 
                <TrendingInnerRight></TrendingInnerRight> 
                <TrendingInnerRight></TrendingInnerRight>  */}
            </div>
            )
        }
        
    }
}