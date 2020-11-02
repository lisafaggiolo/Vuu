import React from 'react'
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
  )
}

export default Home;