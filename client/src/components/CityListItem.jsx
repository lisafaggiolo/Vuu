import React from 'react';

const CityListItem = props => {
  const city = props;
    return (
      <div>
        <div>
          <h2>{city.name}</h2>
          <p>{city.description}</p>
          <button>Learn More</button>
        </div>
      </div>
    )
}
  
export default CityListItem;