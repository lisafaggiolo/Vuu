import React, { useState, useEffect } from "react";
import ProvinceList from "./ProvinceList"
import './styles.scss'
import Axios from "axios";
import SubHeader from "../SubHeader";
import image from "../../images/PeggysCove-2.jpg"

const Province = props => {;
  const [provinces, setProvinces] = useState([]);
  useEffect(() => {
    Axios.get("/api/provinces")
    .then(result => {
      console.log("RESULT",result)
      setProvinces(result.data.data)
    })
    .catch(error => console.log(error))
  }, [])
  
  const canada = "Canada";
  const description = "Canada is located in North America and stretches all the way from the Atlantic to the Pacific, being made up of ten Provinces and three Territories. country of outstanding natural beauty, Canada has a wide variety of landscapes: the mountains, the prairies, lakes and rivers with many national and provincial parks to protect the habitats. Most images of Canada refer to the Mounties, bears, snow or the Rocky Mountains with the amazing turquoise lakes though there is truly more to this vast landscape. Tourism is a large part of the economy with the abundant natural resources quickly turning Canada into a rich and vibrant country that is a permanent listing at the top of the best places to live."
 
  return (
    <div>
      <SubHeader pageName={canada} description={description} image={image}/>
      <ProvinceList provinces={ provinces } />
    </div>
  )
};
  
export default Province;