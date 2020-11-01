import React, { useEffect, useState } from "react";
import CityListItem from "../CityListItem";
import ProvinceStats from "./ProvinceStats";
import './styles.scss';
import Axios from "axios";
import CityList from "../CityList";
import { useParams } from "react-router-dom";

const Province = (props) =>{
  const [province, setProvince] = useState([]);
  const [cities, setCities] = useState([]);
  
  const {id} = useParams();

   
  useEffect(() => {
    Axios.get(`/api/provinces/${id}`)
    .then(result => {
      console.log(result.data.data)
      setProvince(result.data.data[0])
      setCities(result.data.data[1])
    })
    .catch(error => console.log(error))
  }, [])
  
  // const cityByProvince = cities && cities.filter(city => city.province_id !== province_id )
  
  return (
    <div>
      <div><img src=""/></div>
      <h1>{ province.name}</h1>
      <h2>{ province.description }</h2>
      <ProvinceStats />
      <CityList cities={ cities } />    
      
    </div> 
  )
};

export default Province;
