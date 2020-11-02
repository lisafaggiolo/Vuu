import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import './styles.scss'
import CityList from "../CityList";
              //  ????
const ResultsPage  = (props) => {


   return (
    <div>
    <div className="results-top">
      <h1>
        Here are your results!
      </h1>
    </div>
    <CityList 
      cities={ props.cities }/>
    </div>
  )

};

export default ResultsPage;