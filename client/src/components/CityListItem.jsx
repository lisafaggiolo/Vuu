import React from 'react';
import "./CityListItem.scss";
import { Link } from "react-router-dom";

const CityListItem = props => {
  const city = props;
  console.log(city)
  const cityIdLink = `/cities/${city.id}`;
    return (
      <div className="card">
        <div className="card-image">
          <img src=""/> 
         </div>
         <div className="card-info">
          <h2>{city.name}</h2>
          <p>{city.description}</p>
           <Link to={cityIdLink}>Learn More</Link>
        </div>
     </div>
    )
}
  
export default CityListItem;