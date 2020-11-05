import React, { useState, useEffect } from "react";
import CityStatistics from "./CityStatistics";
import SubHeader from "../SubHeader";
import {useParams} from 'react-router-dom';
import './styles.scss'
import Axios from "axios";
import Weather from '../../components/Weather/LocalWeather';


const City = props => {;
  const [city, setCity] = useState([]);
  const [weather, setWeather] = useState([]); 
  const {id} = useParams();
 
  let req1 = (`/api/cities/${id}`)
  
  useEffect(() => {
    Axios.get(req1)
    .then(result => {
      setCity(result.data.data);
      // console.log(city);
    })
    .catch(error => console.log(error))
  }, [])
  
  return (
    <>
      {/* <div><img src=""/></div> */}
      <SubHeader pageName={city.name} description={city.description} image={city.image}/>
      <div className="city-stats">
        <CityStatistics 
          city={city}
        /> 
       <Weather
        city={city} 
       />
      </div>
    </>
  )
};
  
export default City;