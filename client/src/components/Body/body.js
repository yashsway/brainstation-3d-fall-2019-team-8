import React from "react";
import TabsBar from "../SideNavBar/index.js";
import Main from "../Main/Main.js";

export default class Body extends React.Component{
    render(){
        return(
            <>
            <TabsBar></TabsBar>
            <Main></Main>
            </>
        )
    }
}