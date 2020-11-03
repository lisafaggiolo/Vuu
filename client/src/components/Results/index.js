import React, { useState, useEffect } from "react";
import './styles.scss'
import CityList from "../CityList";
import Description from "../Description";
import axios from "axios"
              //  ????
const ResultsPage  = (props) => {
  const [cities, setCities] = useState([]);


   
  useEffect(() => {
    axios.get(`/api/cities`)
    .then(result => {
      console.log("RESULT.DATA.DATA =>",result.data.data)
      setCities(result.data.data)
    })
    .catch(error => console.log(error))
  }, [])
  const noResultsMessage = "";
  
   return (
    <div>
    <div className="results-top">
      <h1>
        <Description />
         { props && props.cities === [] ? "Here are your results!" :  noResultsMessage  }
      </h1>
    </div>
    <CityList 
      cities={ props && props.cities === [] ? props.cities : cities }/>
    </div>
  )

};

export default ResultsPage;