import React, { Fragment } from 'react'
import { Link } from "react-router-dom";
import "./Header.scss";

// will be Horizontal not vertical
const Header = () => {
  return (
<<<<<<< HEAD
    <header>
      <nav id="main-nav"> 
        <div className="wrapper">
          <ul >
            <li><Link to="/about">About</Link></li>
            <li><Link to="/provinces">About</Link></li>
            <li className="brand-logo">Viewfinder</li>
            
            <li><Link to="/cities">Cities</Link></li>
            <li><Link to="/questions/1">Quizz</Link></li>            
          </ul>
        </div>
      </nav>
    </header>
  )
}
=======
        <nav className="navbar">
            <div class='navbar__item'>
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
>>>>>>> 7ec0169ebbb00cb8423bad034cc7f593226e9fbf

export default Header;
