import React from 'react';
import "./Main.scss";
import TrendingOuterLeft from "../TrendingOuterLeft/TrendingOuterLeft.js";
import TrendingOuterRight from "../TrendingOuterRight/TrendingOuterRight.js";
import LeftMost from "../LeftMost/LeftMost.js";
import Header from "../Header/Header.js";

export default class Main extends React.Component{
    state = {
        display: true
    }

    clickHandle = (e) => {
        console.log("clicked")
        this.setState({
            display:false
        })
    }

    render(){
        return(
            <>
            {/* <Header></Header> */}
            <div className="main">
                <TrendingOuterLeft clickHandle={this.clickHandle}></TrendingOuterLeft>
                <TrendingOuterRight display={this.state.display}></TrendingOuterRight>
            </div>
            </>
        )
    }
}