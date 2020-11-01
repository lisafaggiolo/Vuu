import React, { useState, useEffect } from "react";
import Axios from 'axios';

export default function ProvinceStats(props) {
  const [data, setData] = useState({});
  
  useEffect(() => {
    Axios.get("/api/provinces/1", 
      { params: { id: 1 }} )
    .then(result => {
      console.log(result)
      setData(result.data.data)
    })
    .catch(error => console.log(error))
  }, [])
    
  //add api COVID  call in here 

  return (
    <div>
      <h2>Province Statistics</h2>
      <p>Average Rent: ${data.average_rent}</p>
      <p>Shelter Cost to Income Ratio: {data.shelter_cost_to_income_ratio} people report spending less than 30% of their income on housing.</p>
      <p>25-54 year olds in the visible minority: {data.age_group_vis_min}</p>
    </div>
  );  
}