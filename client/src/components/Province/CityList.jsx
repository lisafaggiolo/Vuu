
import React from 'react';
import CityListItem from "./CityListItem"

class CityList extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      province: [],
      city_name: [],
      city_description: [],
      city_image: []
    }
  }
  let provinceList = props.provinces.map(
    province => <CityListItem name={province.name} /> 
    render() { 
      return (
        <div>
        {provinceList}
      </div 
      ) 
    }) 
} 
  
export default CityList;