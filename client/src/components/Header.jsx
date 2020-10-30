import React from 'react'
import { Link } from "react-router-dom";
import "./App.scss";

// will be Horizontal not vertical
const Navbar = () => {
  return (
    <header>
      <nav id="main-nav"> 
        <div className="wrapper">
          <ul >
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li className="brand-logo">Viewfinder</li>
            <li><Link to="/cities">Cities</Link></li>
            <li><Link to="/quizz">Quizz</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

export default Navbar;
