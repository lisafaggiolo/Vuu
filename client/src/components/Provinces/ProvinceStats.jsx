import React, { useState, useEffect } from "react";
import Axios from 'axios';
import { useParams } from "react-router-dom";

export default function ProvinceStats(props) {
  const [data, setData] = useState({});
  const {id} = useParams();
  
  // function getCOVIDinfo(provinceID) {
  //   const provinceID = ["YT", "NT", "NU", "BC", "AB", "SK", "MB", "ON", "QC", "NL", "NB", "PE", "NS"]	
    
  //   for (provinceID = 0; provinceID <= 13; provinceID++) {
  //     Axios.get(`https://api.covid19tracker.ca/cases?province=${provinceID}&per_page=50`)
  //   }
  // } 
  useEffect(() => {


 
    Axios.get(`/api/provinces/${id} `, 
    )
    .then(result => {
      console.log(result)
      setData(result.data.data[0])
    })
    .catch(error => console.log(error))
  }, [])

  return (
    <div>
      <h2>Province Statistics</h2>
      <p>Average Rent: ${data.average_rent}</p>
      <p>Shelter Cost to Income Ratio: {data.shelter_cost_to_income_ratio} people report spending less than 30% of their income on housing.</p>
      <p>25-54 year olds in the visible minority: {data.age_group_vis_min}</p>
    </div>
  );  
}