import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import CityList from "./CityList";
import './styles.scss'

class Province extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      province_name: [],
      province_description: [],
      province_stats: [],
      province_image: [],
      cities: [],
    }
    
    const params = useParams();
    console.log(params);
  };
    const cities = {
    //function returning an interation over the cities for the province
    //helper function getCityForProvince(state, state.province)
    };
    
    let provinceList = props.provinces.map(
      province => <CityListItem name={province.name} /> 
      render() { 
        return (
          <div>
          {provinceList}
        </div 
        ) 
      }) 
    
  render() {  
    return (
      <main>
        <Header />
        <h1>{this.state.province_name}</h1>
        <CityList
          name={this.state.city_name}
           />
        <Footer />
      </main>
    );
  }
};

export default Province;
