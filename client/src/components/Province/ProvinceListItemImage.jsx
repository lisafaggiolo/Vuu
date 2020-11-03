import React from 'react';
import "../CityListItem.scss";
import { Link } from "react-router-dom";


const ProvinceListItemImage = (props) => {

  return (
    <div>
       <Link to={props.provinceLink}>
          <img src={props.image} width={650} />
      </Link>
    </div>
  )
}

export default ProvinceListItemImage;