import React from 'react';
import "./TrendingOuterLeft.scss";

export default class TrendingOuterLeft extends React.Component{

    render(){
        return(
            <div className="container">
                <h1>2 Left container</h1>
                <button onClick = {(e)=> {this.props.clickHandle()}}>2d item</button>
            </div>
        )
    }
}