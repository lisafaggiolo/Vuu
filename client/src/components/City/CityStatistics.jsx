import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function CityStatistics(props) {
  const [cities, setCities] = useState([]);
  const [data, setData] = useState({});
  const cityList =// [list of cities]
  
  
  useEffect(() => {
    function getWeather() {
      return axios({
        "method":"GET",
        "url":"https://community-open-weather-map.p.rapidapi.com/weather",
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key":"10b3a40fb7mshd9e5b9d36c389b5p12226cjsn89d4b168f866",
        "useQueryString":true
        },"params":{
        "lat":"0",
        "lon":"0",
        "callback":"test",
        "id":"2172797",
        "lang":"null",
        "units":"%22metric%22 or %22imperial%22",
        "mode":"xml%2C html",
        "q":`${props.city}`
        }
      })
    }
    Promise.all([
      axios.get("/api/cities"),
      getWeather()
    ])
      .then((all) => {
        const cities = all[0].data.data;
        const weather = all[1].data        
        console.log(all);
        console.log(
          "cities",
          cities.length,
          "local weather", 
          weather
        )
        setCities(cities);
      })
      .catch((error) => {
        console.log(error);
      }); 
  }, []);
  return (
    <div>
      <h1>This is some stats about a city!</h1>
      
    </div>
  );
};