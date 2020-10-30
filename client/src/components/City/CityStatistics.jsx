import React, { useState, useEffect } from "react";
import Axios from 'axios';
import './StatisticsItems';

export default function CityStatistics(props) {
  const [city, setCity] = useState([]);
  const [data, setData] = useState({});
  
  useEffect(() => {
    Axios.get("/api/cities/1", 
      { params: { id: 1 }} )
    .then(result => {
      console.log(result)
      setCity(result.data.data)
    })
    .catch(error => console.log(error))
  }, [])
    
  //add api weather call in here 

  return (
    <div>
      <h2>City Statistics</h2>
      <p>Population: {city.population}</p>
      <p>Time Zone: {city.time_zone}</p>
      <p>Healthcare Index: {city.healthcare_index}</p>
      <p>Crime Index: {city.crime_index}</p>
      <p>Pollution Index: {city.pollution_index}</p>
    </div>
  );
};