import React from 'react'
import { Link } from "react-router-dom";
import "./App.scss";

const Footer = () =>{
  return (
    <footer className="page-footer indigo darken-4">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5 className="white-text">NuVuu</h5>
            <p className="grey-text text-lighten-4">With WFM culture gaining ground, your next office view might be closer than you think.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Links</h5>
            <ul>
              
              <li><Link to="/home" href="#!" className="white-text">Home</Link></li>
              <li><Link to="/about" href="#!" className="white-text">About</Link></li>
              <li><Link to="/provinces" href="#!" className="white-text">Provinces</Link></li>
              <li><Link to="/cities" href="#!" className="white-text">Cities</Link></li>
              <li><Link to="/quiz" href="#!" className="white-text">Quiz</Link></li>

            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright">
        <div className="container">
        © 2020 Copyleft LMT Works
        <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;