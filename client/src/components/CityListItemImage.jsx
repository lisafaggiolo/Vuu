import React from 'react';
import "./CityListItem.scss";
import { Link } from "react-router-dom";


const CityListItemImage = (props) => {

  return (
    <div>
       <Link to={props.cityLink}>
          <img src={props.image} width={650} />
      </Link>
    </div>
  )
}

export default CityListItemImage;