import React, { useState, useEffect } from "react";
import ProvinceList from "../CityList"
// import {useParams} from 'react-router-dom';
// import './styles.scss'
import Axios from "axios";

const City = props => {;
  const [provinces, setProvinces] = useState([]);
  useEffect(() => {
    Axios.get("/api/provinces")
    .then(result => {
      console.log(result)
      setProvinces(result.data)
    })
    .catch(error => console.log(error))
  }, [])
    
  return (
    <>
      {/* <div><img src=""/></div> */}
      <div>
        <h1>Welcome to Canada</h1> 
      </div>
      <div>
        <p>Canada is located in North America and stretches all the way from the Atlantic to the Pacific, being made up of ten Provinces and three Territories. country of outstanding natural beauty, Canada has a wide variety of landscapes: the mountains, the prairies, lakes and rivers with many national and provincial parks to protect the habitats. Most images of Canada refer to the Mounties, bears, snow or the Rocky Mountains with the amazing turquoise lakes though there is truly more to this vast landscape. Tourism is a large part of the economy with the abundant natural resources quickly turning Canada into a rich and vibrant country that is a permanent listing at the top of the best places to live.</p>
      </div>
      <div className="city-stats"> 
      </div>
      <ProvinceList cities={ provinces }/>
      
    </>
  )
};
  
export default City;