import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import "./Header.scss";

// will be Horizontal not vertical
const Header = () => {
  return (
<<<<<<< HEAD
        <nav className="navbar">
            <div class='navbar__item'>
              <Link to="/about">About </Link>
              <span className="span"> | </span>
              <Link to="/provinces"> Provinces</Link>
            </div>
                
            <div className='navbar__title'>
              <Link to="/home">NuVuu</Link>
            </div>
                
            <div class='navbar__item'>
              <Link to="/login">Login </Link>
              <div  className="span"> | </div>
              <Link to="/register">Register</Link>
            </div> 
        </nav>
        )
    
};
=======
    
    <nav>
    <div className="nav-wrapper"> 
      <ul id="nav-mobile" className="left">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/provinces">Provinces</Link></li>
      </ul>
      <ul id="nav-mobile" className="right">
        <li><Link to="/cities">Cities</Link></li>
        <li><Link to="/quiz" className="btn-flat disabled">Quiz</Link></li>
      </ul>
      <div className="brand-logo center">NuVuu</div>  
    </div>
    </nav>
    
  )
}
>>>>>>> main

export default Header;
