import React from 'react';

//component of city description with picture

const CityListItem = (props) =>{
    return (
      <div>
        <h1>Hello I am CityListItem</h1>
        {props.name} 
      </div>
    );
  }
  
export default CityListItem;