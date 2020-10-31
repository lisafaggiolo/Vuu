import React from 'react';

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