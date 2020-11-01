import React from 'react'
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
  )
}


export default Home;

