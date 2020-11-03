import React from 'react';
import "./CityListItem.scss";
import CityListItemImage from "./CityListItemImage"
import { Link } from "react-router-dom";

const CityListItem = props => {
  const city = props;
  console.log(city)
  let url = (city.image)
 
  const cityLink = `/cities/${city.id}`;

    return (
      <div className="card">
        <div className="img">
          <CityListItemImage cityLink={cityLink} image={ url }/> 
         </div>
         <div className="card-info">
          <h2>{city.name}</h2>
          <p>{city.description}</p>
           <Link to={cityLink}>Learn More</Link>
        </div>
        {/* </Link> */}
     </div>
    )
}
  
export default CityListItem;