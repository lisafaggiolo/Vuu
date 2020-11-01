
import React from 'react';
import CityListItem from "./CityListItem"


const CityList = props => {
  
  // const {id} = useParams();
  // const city_id = parseInt(id);
  // const city
  const cityList = props.cities.map( city => {
    return (
      <CityListItem 
        key={ city.id }
        name={ city.name }
        description={ city.description }
      />
    )
  });

  return (
    <div>
      <ul>
      { cityList }
      </ul>
    </div>
  ) 
} 
  
export default CityList;