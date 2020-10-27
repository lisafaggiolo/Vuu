import React, { useState, useEffect } from "react";
import './App.css';
import Header from './Header';
import Footer from './Footer';
import axios from "axios";

export default function App(props) {
  const [data, setData] = useState({});
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([])
  const [users, setUsers] = useState([]);

//   // useEffect(() => {
//     Promise.all([
//       axios.get("/api/cities"),
//       axios.get("/api/provinces"),
//       axios.get("/api/users")
//     ]).then((all) => {
//       const cities = all[0].data.data;
//       const provinces = all[1].data.data;
//       const users = all[2].data;
//       console.log("cities", cities.length, "provinces", provinces.length, "users", users.length);
//       setCities(cities)
//       setProvinces(provinces)
//       setUsers(users)
//       // setState(prev => ({ ...prev, cities : all[0].data, provinces: all[1].data,  users: all[2].data}));
//     }).catch((error) => console.log(error.errno));
//   }
// );

function getCOVIDinfo(total_hospitalizations, active_cases, current_phase) {
  return axios.get('https://api.covid19tracker.ca/provinces')
}

function getWeatherAndTimeZone(weather, time_zone) {
  return axios.get("https://community-open-weather-map.p.rapidapi.com/weather")
}

function getAveragePriceOfItems() {
  return axios.get("http://www.numbeo.com/api/city_prices_raw?api_key=exkod1xx5sorso&query=${city}, Canada")
}

function getHealthSystemQuality() {
  return axios.get("http://www.numbeo.com/api/city_healthcare?api_key=exkod1xx5sorso&query=${city}, Canada")
}

function getCrimeIndex() {
  return axios.get("http://www.numbeo.com/api/city_crime?api_key=exkod1xx5sorso&query=${city}, Canada")
}

function getAirPollution() {
  return axios.get("http://www.numbeo.com/api/city_pollution?api_key=exkod1xx5sorso&query=${city}, Canada")
}

function getCanadaIndices() {
  return axios.get("http://www.numbeo.com/api/country_indices?api_key=exkod1xx5sorso&country=Canada");
}
useEffect(() => {
Promise.all([getAveragePriceOfItems(), getCrimeIndex(), getHealthSystemQuality(), getAirPollution(), getWeatherAndTimeZone()])
  .then(function (results) {
    const itemPrices = results[0];
    const crime = results[1];
    const health = results[2];
    const air = results[3];
    const weather = results[4];
    console.log(results);
    setData({itemPrices, crime, health, air, weather})
  })
  .catch(error => {
    console.log(error);
  });
}, [])  
  
  
  return (
    <div>
      <div>{JSON.stringify(data)}</div>
      <main>
      <Header />
      <Footer />
    </main>
    </div> 
  )
};

