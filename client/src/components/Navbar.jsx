import React from 'react'
import { Link } from "react-router-dom";
import "./App.scss";

// will be Horizontal not vertical
const Navbar = () => {
  return (
    
    <nav>
    <div className="nav-wrapper"> 
      <ul id="nav-mobile" className="left">
        <li><Link to="/about">About</Link></li>
        <li><Link to="/provinces">Provinces</Link></li>
      </ul>
      <ul id="nav-mobile" className="right">
        <li><Link to="/cities">Cities</Link></li>
        <li><Link to="/quiz" className="btn-flat disabled">Quiz</Link></li>
      </ul>
      <div className="brand-logo center"><Link to="/home">NuVuu</Link></div>  
    </div>
    </nav>
    
  )
}

export default Navbar;
