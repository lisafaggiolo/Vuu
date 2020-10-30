import React, { useState, useEffect } from "react";
import Axios from 'axios';

export default function StatisticsItems(props) {
  const [city, setCity] = useState([]);
  const [data, setData] = useState({});
  
  useEffect(() => {
    Axios.get("/api/cities/1", 
      { params: { id: 1 }} )
    .then(result => {
      console.log(result)
      setCity(result.data.data)
      setData(result.data.data)
    })
    .catch(error => console.log(error))
  }, [])
    
  return (
    <div>
       
    </div>
  );
};