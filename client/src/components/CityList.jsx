import React from 'react';
import CityListItem from "./CityListItem"


const CityList = props => {

  const cityList = props && props.cities.map( city => {
    return (
      <CityListItem 
        key={ city.id }
        id={city.id}
        name={ city.name }
        description={ city.description }
      />
    )
  });

  console.log("CITY LIST =>",cityList)

  return (
    <div class="cards">
      <ul>
      { cityList }
      </ul>
    </div>
  ) 
} 
  
export default CityList;