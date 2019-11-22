import React from 'react';
import {Link} from 'react-router-dom';
// import Logo from '../../assets/Logo/Logo-instock.svg'
import './topnav.scss'


class Navigation extends React.Component{

  render(){

return (
  <header className="header">
    <nav className="nav">
      <ul>
       <li className="nav__item nav__item--change"> News</li>
        <li className="nav__item"> Trending</li>
      </ul>
    </nav>
  </header>
  )
 }
}
export default Navigation;
