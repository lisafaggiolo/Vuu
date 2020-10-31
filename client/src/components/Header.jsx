import React from 'react'
import { Link } from "react-router-dom";
import "./App.scss";

// will be Horizontal not vertical
const Navbar = () => {
  return (
    
    <nav>
    <div className="nav-wrapper"> 
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li ><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cities">Cities</Link></li>
        <li><Link to="/quizz">Quizz</Link></li>
      </ul>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li ><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/cities">Cities</Link></li>
        <li><Link to="/quizz">Quizz</Link></li>
      </ul>
    <div className="brand-logo center">NuVuu</div>  
    </div>
    </nav>
    
  )
}

export default Navbar;
