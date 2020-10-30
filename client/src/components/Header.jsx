import React from "react"
import { Link } from "react-router-dom";
import "styles/styles.scss";

// will be Horizontal not vertical
const Navbar = () => {
  return (
    <nav id="main-nav"> 
      <div className="container">
        <ul className="right">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <a className="brand-logo">Viewfinder</a>
          <li><Link to="/cities">Cities</Link></li>
          <li><Link to="/quizz">Quizz</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;
