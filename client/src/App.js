import React from 'react';
// import logo from './logo.svg';
// import './App.scss';
import Main from "./components/Main/Main.js";


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
        <title>Test</title>
      </Helmet>
      
        
      <header>
       <Main></Main>
      </header>
    </div>
  );
}

export default App;
