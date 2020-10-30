import React from "react";
import CityStatistics from "./CityStatistics";
//import Statistics from "./Statistics";
import {useParams} from 'react-router-dom';
import './styles.scss'

class City extends React.Component {
  
  constructor(props) {
    super(props);
    
    this.state = {
      city_name: [],
      city_description: [],
      city_stats: [],
      city_image: [],
    }
    
    const params = useParams();
    console.log(params);
  };
  
  render() {
    return (
      <div>
        <img src="{this.state.city_image}"/>
      </div>
      <div>
        <h1>{this.state.city_name}</h1> 
      </div>
      <div>
        <p>{this.state.city_description}</p>
      </div>
      <div className="city-stats">
        <CityStatistics /> 
      </div>
    )
  }
};

export default City;
