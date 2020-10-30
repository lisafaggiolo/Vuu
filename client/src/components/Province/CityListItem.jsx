import React from 'react';

//component of city description with picture

const CityListItem = props => {
  const city = props;
    return (
      <div>
        <h1>{city.name}</h1>
        <h4>{city.description}</h4> 
      </div>
    )
}
  
export default CityListItem;