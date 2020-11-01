import React, { useState, useEffect } from "react";
import {useParams} from 'react-router-dom';
import './styles.scss'
import Axios from "axios";
import CityList from "../CityList";
              //  ????
const ResultsPage  = () => {
  const [cities, setCities] = useState([])

  useEffect(() => { 
    Axios.get("/api/results")
    .then( result => {
      console.log(result.data)
      setCities(result.data.data)
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
      cities={ cities }/>
    </div>
  )

};

export default ResultsPage;