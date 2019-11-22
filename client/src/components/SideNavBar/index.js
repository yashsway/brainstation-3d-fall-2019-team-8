import React from 'react';
import "../SideNavBar/sidenav.scss";


class TabsBar extends React.Component{

    render(){

    return(
        <>
        {/* <header className="logo-flex">
            {/* <img className="logo" src={logo2}/> */}
            {/* <img className="logoName" src={logoLet}/> */}
      
        
        <div className='side-bar'> 
            <div className='side-list'> 
                <h3 className="side-title">Monday</h3>
                <p className='side-day'>Business</p>
                <p className='side-day'>Tech</p>
                <p className='side-day'>Lifestyle</p>
                <p className='side-day'>Entertainment</p>
                <p className='side-day'>Social Media</p>
            </div>
        </div>
        </>
    );
    }
}

  export default TabsBar;
