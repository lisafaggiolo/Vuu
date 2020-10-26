import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import CityList from '../CityList'


const Province = (props) =>{

    const cities = {
       //function returning an interation over the cities for the province
       //helper function getCitiesForProvince(state, state.province)
    }
    return (
      <main>
          <Header />
            <h1>Hello I am Province View</h1>
            <CityList />
          <Footer />
      </main>
      
    );
  }
  
export default Province;