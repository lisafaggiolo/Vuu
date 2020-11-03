import React from 'react'
import './Home.scss'
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <body className="home">
      <div className="top-of-mountain">
        <h2 className="title">Welcome to Canada</h2>
        {/* <p className="subtitle">Find your new office view.</p> */}
      </div>
      <div className="selectors">
        <div>
          <Link to="/questions/1">
            <p>Get your personalized selection </p>
          </Link>
        </div>
        </div>
    </body>
  )
}


export default Home;

