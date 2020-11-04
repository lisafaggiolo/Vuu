import React, { useState, useEffect } from "react";
import CityStatistics from "./CityStatistics";
import SubHeader from "../SubHeader";
import {useParams} from 'react-router-dom';
import './styles.scss'
import Axios from "axios";


const City = props => {;
  const [city, setCity] = useState([]); 
  const {id} = useParams();
  
  useEffect(() => {
    Axios.get(`/api/cities/${id}`)
    .then(result => {
      setCity(result.data.data)
    })
    .catch(error => console.log(error))
  }, [])
    
  return (
    <>
      {/* <div><img src=""/></div> */}
      <SubHeader pageName={city.name} description={city.description} image={city.image}/>
      <div className="city-stats">
        <CityStatistics /> 
      </div>
    </>
  )
};
  
export default City;