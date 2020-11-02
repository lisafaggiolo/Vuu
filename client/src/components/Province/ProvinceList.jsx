import React from "react";
// import "./CityListItem.scss";
import ProvinceListItem from "./ProvinceListItem";

const ProvinceList = props => {
  console.log(props.provinces)
  const provinceList = props.provinces.map( province => {
    return (
      <ProvinceListItem 
        key={ province.id }
        id={province.id}
        name={ province.name }
        description={ province.description }
      />
    )
  });

  return (
    <div class="cards">
      <ul>
      { provinceList }
      </ul>
    </div>
  ) 
} 
  
export default ProvinceList;