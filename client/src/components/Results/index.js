import React, { useState, useEffect } from "react";
import CityList from ".";
// import {useParams} from 'react-router-dom';
import './styles.scss'
import Axios from "axios";

              //  ????
const ResultsPage  = (props) => {
  const [cities, setCities] = useState([])
  useEffect(() => { 
    Axios.get("/api/results")
    .then( result => {
      setCities(result.data)
    })
    .catch( error => console.log(error))
    }, []
  )
  return (
    <div>
    <div className="results-top">
      <h1>
        Here are your results!
      </h1>
    </div>
    <CityList 
      results={ cities }/>
    </div>
  )

};

export default ResultsPage;