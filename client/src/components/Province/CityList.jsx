
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
  
} 
  
export default CityList;