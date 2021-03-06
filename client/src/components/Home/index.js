import React from 'react'
import './style.scss'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div> 
      <div className="home">
        <div className="top-of-mountain">
          <h2 className="title">Welcome to Canada</h2>
        {/* <p className="subtitle">Find your new office view.</p> */}
          <div className="selectors">
            <Link to="/questions/1">
            <p>Get your personalized selection </p>
          </Link>
          </div>  
        </div>
      </div>
    </div>
  )
}


export default Home;

