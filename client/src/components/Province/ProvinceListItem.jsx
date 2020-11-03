import React from 'react';
import "../CityListItem.scss";
import { Link } from "react-router-dom";
import ProvinceListItemImage from "./ProvinceListItemImage";

const ProvinceListItem = props => {
  const province = props;
  console.log(province)
  let url = province.image
  const provinceLink = `/provinces/${province.id}`;
    return (
      <div className="card">
        <div className="card-image">
          <ProvinceListItemImage cityLink={provinceLink} image={ url }/> 
         </div>
 
         <div className="card-info">
          <h2>{province.name}</h2>
          <p>{province.description}</p>
           <Link to={provinceLink}>Learn More</Link>
        </div>
     </div>
    )
}
  
export default ProvinceListItem;

