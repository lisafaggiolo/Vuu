import React from 'react';
import CityListItem from "./CityListItem"


const CityList = props => {

  const cityList = props.cities.map( city => {
    return (
      <CityListItem 
        key={ city.id }
        id={ city.id }
        name={ city.name }
        description={ city.description }
        image={ city.image }
      />
    )
  });

  return (
    <div class="cards">
      <ul>
      { cityList }
      </ul>
    </div>
  ) 
} 
  
export default CityList;