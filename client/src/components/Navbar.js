import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav> 
      <div className="container">
        <a className="brand-logo">Viewfinder</a>
        <ul className="right">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/cities">Cities</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;