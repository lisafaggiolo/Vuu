import React, { useState, useEffect } from "react";
import CityStatistics from "./CityStatistics";
// import {useParams} from 'react-router-dom';
import './styles.scss'
import Axios from "axios";

const City = props => {;
  const [city, setCity] = useState([]);
  useEffect(() => {
    Axios.get("/api/cities/1", 
      { params: { id: 1 }} )
    .then(result => {
      setCity(result.data.data)
    })
    .catch(error => console.log(error))
  }, [])
    
  return (
    <>
      {/* <div><img src=""/></div> */}
      <div>
        <h1>{city.name}</h1> 
      </div>
      <div>
        <p>{city.description}</p>
      </div>
      <div className="city-stats">
        <CityStatistics /> 
      </div>
    </>
  )
};
  
export default City;