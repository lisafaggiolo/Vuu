import React from 'react'
import { Link } from "react-router-dom";
import "./Footer.scss";


const Footer = () =>{
  return (

    <footer className="page-footer">
      {/* <div className="container"> */}
      <div>
          <h4 className="connect-title">Connect with us!</h4>
          <ul>
            <li><Link to="/home">Instagram</Link></li>
            <li><Link to="/about">Twitter</Link></li>
            <li><Link to="/provinces">Github</Link></li>
            <li><Link to="/cities">Facebook</Link></li>
            {/* <li><Link to="/quiz"></Link></li> */}
          </ul>
        </div>
      <div className="logo__section">
          <p>Change your office location - Easily</p>
          <Link className="footer__title" to="/home" >- Vuu -</Link>
          {/* add instagram/facebook/twitter logo */}
      </div> 

        <div className="right__container">
        <p className="copyright">© 2020 Copyleft LMT Works </p>
        </div>
    </footer>
  );
}
export default Footer;