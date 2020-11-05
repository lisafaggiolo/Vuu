import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { useParams } from 'react-router-dom';

export default function Weather(props) { 
  const [weather, setWeather] = useState({});
  const postalCode = props.city.postal_code;
   
  useEffect(() => {
    Axios.get(`https://api.weathersource.com/v1/0a852150d4e69e453af4/postal_codes/${postalCode},CA/history.JSON?timestamp_eq=2020-11-01T`)
    .then(result => {
      console.log(result)
      setWeather(result.data.data)
    })
    .catch(error => console.log(error)) 

  }, [])
   
  return (
    <div>
      <h2>Local temperature: {weather}</h2>
    </div>
  );
};