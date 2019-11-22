import React from 'react';
// import logo from './logo.svg';
// import './App.scss';
// import Main from "./components/Main/Main.js";
import Body from "./components/Body/body.js";
import Main from "./components/Main/Main.js";
import "./components/SideNavBar/sidenav.scss";
import logoLet from "./assets/LOGO NAME.png";
import Navigation from "./components/TopNavBar/topnav.js";
import TabsBar from "./components/SideNavBar/index.js";
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="App">
      {/* NOTE: Keep the helmet code below and change the app title.
          Add any meta tags you want, or any tag you want to go in the header. 
          You can modify everything else! */}
      <Helmet>
        <title>Infinity 3D</title>
      </Helmet>
      
<<<<<<< HEAD
       
      
      <header className="logo-flex">
            {/* <img className="logo" src={logo2}/> */}
            <img className="logoName" src={logoLet}/>
        </header>
        <Body></Body>
=======
        <Body></Body>
      <header>
>>>>>>> master
        {/* <Navigation></Navigation> */}
        {/* <Infinity></Infinity> */}
        
        {/* <p>

          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Brainstation 3D Starter - Lindsay & Sahiba</h2> */}
    
    </div>
  );
}

export default App;
