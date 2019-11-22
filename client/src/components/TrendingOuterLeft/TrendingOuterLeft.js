import React from 'react';
import "./TrendingOuterLeft.scss";
import TrendingInnerLeft from "../TrendingInnerLeft/TrendingInnerLeft.js";

export default class TrendingOuterLeft extends React.Component{

    render(){
        return(
            <div className="container">
                
                <button onClick = {(e)=> {this.props.clickHandle()}}>
                <TrendingInnerLeft></TrendingInnerLeft>
                </button>
                
            </div>
        )
    }
}