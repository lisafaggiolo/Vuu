import React from 'react';
import "../CityListItem.scss";
import { Link } from "react-router-dom";

const ProvinceListItem = props => {
  const province = props;
  console.log(province)
  const provinceIdLink = `/provinces/${province.id}`;
    return (
      <div className="card">
        <div className="card-image">
          <img src=""/> 
         </div>
         <div className="card-info">
          <h2>{province.name}</h2>
          <p>{province.description}</p>
           <Link to={provinceIdLink}>Learn More</Link>
        </div>
     </div>
    )
}
  
export default ProvinceListItem;