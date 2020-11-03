import React from 'react'
import { Link } from "react-router-dom";
import "./Header.scss";

// will be Horizontal not vertical
const Header = () => {
  return (
        <nav className="navbar">
            <div className='navbar__item'>
              <Link to="/about">About </Link>
              <span className="span"> | </span>
              <Link to="/provinces"> Provinces</Link>
            </div>
                
            <div className='navbar__title'>
              <Link to="/home">- Vuu -</Link>
            </div>
                
            <div class='navbar__item'>
              <Link to="/login">Login </Link>
              <div  className="span"> | </div>
              <Link to="/register">Register</Link>
            </div> 
        </nav>
        )
    
};

export default Header;
