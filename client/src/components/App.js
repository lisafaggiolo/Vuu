import React from 'react';
import {useState, useEffect} from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from "axios";


const App = (props) => {
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [users, setUsers] = useState([]);
  
  useEffect(() =>{ 
    Promise.all([
        axios.get("/api/cities"),
        axios.get("/api/provinces"),
        axios.get("/api/users")
      ]).then((all) => {
        const cities = all[0].data.data;
        const provinces = all[1].data.data;
        const users = all[2].data;
        console.log("cities", cities.length, "provinces", provinces.length, "users", users.length);
        setCities(cities)
        setProvinces(provinces)
        setUsers(users)
        // setState(prev => ({ ...prev, cities : all[0].data, provinces: all[1].data,  users: all[2].data}));
      }).catch((error) => console.log(error.errno));

      componentDidMount() {
        function getCOVIDinfo(total_hospitalizations, active_cases, current_phase) {
          return axios.get('https://api.covid19tracker.ca/provinces')
          .then(res => {
            const province = res.data;
            this.setState({ province });
            console.log(province);
          })
          .catch(error => {
            console.log(error);
          });
        }
        
        function getWeatherAndTimeZone (weather, time_zone) { 
          return axios.get("https://community-open-weather-map.p.rapidapi.com/weather")
          .then(res => {
            const city = res.data;
            this.setState({ city });
            console.log(city)
          })
          .catch(error => {
            console.log(error);
          });
        }
        
        function getAveragePriceOfItems() {
          return axios.get("http://www.numbeo.com:8008/api/city_prices?api_key=your_api_key&query=${city},%20Canada",
                  axios.get("/api/city_prices_raw?api_key=your_api_key&query=Belgrade, Serbia")
                  .then(res => {
                    const city = res.data;
                    this.setState({ city });
                    console.log(city)
                  })
                  .catch(error => {
                    console.log(error);
                  }); 
        }
        
        function getHealthSystemQuality() {
          return axios.get("/api/city_healthcare?api_key=your_api_key&query=Belgrade, Serbia")
          .then(res => {
            const city = res.data;
            this.setState({ city});
            console.log(city)
          })
          .catch(error => {
            console.log(error);
          });
        }
        
        function getQualityOfLifeIndex() {
          return axios.get("https://community-open-weather-map.p.rapidapi.com/weather")
          .then(res => {
            const city = res.data;
            this.setState({ city });
            console.log(city)
          })
          .catch(error => {
            console.log(error);
          });
        }
        
        function getVisibleMinorityMakeup() { 
          return axios.get("https://community-open-weather-map.p.rapidapi.com/weather")
          .then(res => {
            const city = res.data;
            this.setState({ city });
            console.log(city)
          })
          .catch(error => {
            console.log(error);
          });
        }
        
        function getShelterCostToIncomeRatio() {
          return axios.get("https://community-open-weather-map.p.rapidapi.com/weather")
          .then(res => {
            const city = res.data;
            this.setState({ city });
            console.log(city)
          })
          .catch(error => {
            console.log(error);
          });                
        }
        
        function getAverageShelterCosts() {
          return axios.get("https://community-open-weather-map.p.rapidapi.com/weather")
        }
        
        function getCrimeIndex() {
          return axios.get("/api/city_crime?api_key=your_api_key&query=Belgrade, Serbia")
        }
        
        function getDistributionofPopulationByAgeGroup() {
          return axios.get("https://community-open-weather-map.p.rapidapi.com/weather")
        }
        
        function getAirPollution() {
          return axios.get("/api/city_pollution?api_key=your_api_key&query=Belgrade, Serbia")
        }
        
        function getCanadaIndices() {
          return axios.get("/api/country_indices?api_key=your_api_key&country=Kuwait")
        }
      }
    }                         
      Promise.all([getCOVIDinfo(), getAverageShelterCosts(), getCrimeIndex(), getDistributionofPopulationByAgeGroup(), getHealthSystemQuality(),
                   getQualityOfLifeIndex(), getAirPollution(), getCanadaIndices(), getShelterCostToIncomeRatio(), getVisibleMinorityMakeup(), getWeatherAndTimeZone()])
      .then(function (results) {
        const COVIDtracker = results[0];
        const shelterCosts = results[1];
        const crime = results[2];
        const ageDistribution = results[3];
        const health = results[4];
        const quality = results[5];
        const air = results[6];
        const canadaIndices = results[7];
        const SCIRatio = results[8];
        const visMin = results[9];
        console.log(results);    
      }) 
}, []);
            
render() {
  return (
    <ul>
      { this.state.province.map(province => <li>{province.name}</li>)}
    </ul>
     <main>
     <Header />
     <Footer />
     
   </main>
  )
} 


export default App;
