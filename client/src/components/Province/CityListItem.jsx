import React from 'react';

//component of city description with picture

class CityListItem extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      city_name: [],
      city_description: [],
      city_stats: [],
      city_image: [],
    }
  }  
  render() {
    return (
      <div>
        <h1>{this.state.city_name}</h1>
        <h4>{this.state.city_description}</h4> 
      </div>
    );
  }
}
  
export default CityListItem;