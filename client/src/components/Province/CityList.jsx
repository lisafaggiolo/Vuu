
import React from 'react';
import CityListItem from "./CityListItem"

const CityList = (props) =>{
  let provinceList = props.provinces.map(
    province => <CityListItem name={province.name} />)
    return (
      <div>
        {provinceList}
      </div>
      
    );
}
export default CityList;