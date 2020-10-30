import React, { useEffect, useState } from "react";
import CityListItem from "./CityListItem";
import ProvinceStats from "./ProvinceStats";
import './styles.scss';
import Axios from "axios";
import { getCityForProvince } from "helper/selector";

const Province = props => {
  const [province, setProvince] = useState([]);
  const [cities, setCities] = useState([]);
  
  useEffect(() => {
    Axios.get("/api/provinces/1",
      { 
       params: {
        id: 1
      }}
    )
    .then(result => {
      setProvince(result.data.data)
    })
    .catch(error => console.log(error))
    
    Axios.get("/api/provinces/1/cities",
    { 
     params: {
      province_id: 1
    }}
  )
  .then(result => {
    setCities(result.data.data)
  })
  .catch(error => console.log(error))
  }, [])
  
  const cityList = cities.map(city => {
    return (
      <CityListItem 
        key={city.id}
        name={city.name}
        province={city.province_id}
        description={city.description}
      />
    )
  })
  
  return (
    <div>
      <div><img src=""/></div>
      <h1>{province.name}</h1>
      <h2>{province.description}</h2>
      <ul>
        {cityList}
      </ul>
      <ProvinceStats />
    </div> 
  ) 
};

export default Province;
