import React, { useState, useEffect } from "react";
import CityStatistics from "./CityStatistics";
import {useParams} from 'react-router-dom';
import './styles.scss'
import Axios from "axios";

const City = props => {
  
  const [city, setCity] = useState([]);
  
  useEffect(() => {
    Axios.get("api/cities/:cityID")
    .then(result => {
      setCity(result.data)
    })
    .catch(error => console.log(error))
  }, [])
  
  const cityList = city.map(cityObj => {
    return (
      <>
      <div><img src=""/></div>
      <div>
        <h1>{cityObj.city.name}</h1> 
      </div>
      <div>
        <p>{cityObj.city.description}</p>
      </div>
      <div className="city-stats">
        <CityStatistics /> 
      </div>
      </>
    )
  })    
};
  

export default City;
