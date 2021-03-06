import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { useParams } from "react-router-dom";

export default function CityStatistics(props) {
  const [data, setData] = useState({}); 
  const {id} = useParams();
  
  useEffect(() => {
    Axios.get(`/api/cities/${id}`)
    .then(result => {
      console.log(result)
      setData(result.data.data)
    })
    .catch(error => console.log(error))
  }, []) 

  return (
    <div>
      <h2>City Statistics</h2>
      <p>Population: {data.population}</p>
      <p>Time Zone: {data.time_zone}</p>
      <p>Healthcare Index: {data.healthcare_index}</p>
      <p>Crime Index: {data.crime_index}</p>
      <p>Pollution Index: {data.pollution_index}</p>
    </div>
  );
};