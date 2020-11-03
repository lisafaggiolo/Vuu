import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.scss";


const Footer = () =>{
  return (

    <footer className="page-footer">
        {/* <div className="container">
        © 2020 Copyleft LMT Works
        </div> */}
      {/* <div className="container"> */}
        <div>
          <p >Changing your office location - Easily</p>
        </div>

        {/* <div className="linkside">
          <h4 >Links</h4>
          <ul>

            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/provinces">Provinces</Link></li>
            <li><Link to="/cities">Cities</Link></li>
            <li><Link to="/quiz">Quiz</Link></li>

            </ul>
          </div>
      </div> */}
      {/* <div className="footer-copyright"> */}
    
      {/* </div>  */}
    </footer>
  );
}
export default Footer;