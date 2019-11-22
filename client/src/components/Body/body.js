import React from "react";
import TabsBar from "../SideNavBar/index.js";
import Main from "../Main/Main.js";

import "./body.scss";

export default class Body extends React.Component{
    render(){
        return(
            <>
            <div className='roy-flex'>
            <TabsBar className='tabs-sahiba'></TabsBar>
            
            <Main className="main-lindsay"></Main>
            </div>
            </>
        )
    }
}
