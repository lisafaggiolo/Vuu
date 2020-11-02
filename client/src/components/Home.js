import React from 'react'
<<<<<<< HEAD
import './Home.scss'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="top-of-mountain">
        <h1 className="title">Welcome to Canada</h1>
        <p>Find your new office view.</p>
      </div>
      <div className="selectors">
        <Link to="/questions/1">
          <h3>Get your personalized selection </h3>
        </Link>
        {/* <span className="span"> | </span> */}
        {/* <span className="span"> | </span> */}
        <Link to="/provinces">
          <h3>Explore All Provinces</h3>
        </Link>
        </div>
    </div>
=======
import './App.scss';
import { Link } from "react-router-dom";
// import 'js/bin/materialize';

const Home = () => {
  return (
    <main>
      <div className="home-page">
        <div className="section no-pad-bot">
          <div className="container">
            <br/>
            <br/>
            <br/>
            <h1 className="header center">Explore</h1>
            <div className="row center">
              <h3 className="header col s6 light"><Link to="/quiz" className="white-text">Personalized Selection</Link></h3>
              <h3 className="header col s6 light"><Link to="/provinces" className="white-text">Provinces</Link></h3>
            </div>
            <br/>
            <br/>
            <br/>
          </div>
        </div>
      </div>
    </main>
>>>>>>> main
  )
}


export default Home;

