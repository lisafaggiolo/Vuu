import React, { useState, useEffect } from "react";
import './styles.scss'
import CityList from "../CityList";
import Description from "../Description";
              //  ????
const ResultsPage  = (props) => {
   return (
    <div>
    <div className="results-top">
      <h1>
        <Description />
        Here are your results!
      </h1>
    </div>
    <CityList 
      cities={ props.cities }/>
    </div>
  )

};

export default ResultsPage;