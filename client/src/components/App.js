import React, { useState, useEffect } from "react";
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import axios from "axios";
import { render } from "node-sass";

export default class App extends React.Component {
  state = {
    loading: true,
    province: null
  }
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
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
  });

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

  function getWeatherAndTimeZone(weather, time_zone) {
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
    axios.get("http://www.numbeo.com:8008/api/city_prices?api_key=exkod1xx5sorso&query=${city},%20Canada"),
      axios.get("/api/city_prices_raw?api_key=exkod1xx5sorso&query=Belgrade, Serbia")
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
    return axios.get("/api/city_healthcare?api_key=exkod1xx5sorso&query=Belgrade, Serbia")
      .then(res => {
        const city = res.data;
        this.setState({ city });
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
    return axios.get("/api/city_crime?api_key=exkod1xx5sorso&query=Belgrade, Serbia")
  }

  function getDistributionofPopulationByAgeGroup() {
    return axios.get("https://community-open-weather-map.p.rapidapi.com/weather")
  }

  function getAirPollution() {
    return axios.get("/api/city_pollution?api_key=exkod1xx5sorso&query=Belgrade, Serbia")
  }

  function getCanadaIndices() {
    return axios.get("/api/country_indices?api_key=exkod1xx5sorso&country=Kuwait")
  }
  
  async componentDidMount() {
    const url = "https://api.covid19tracker.ca/provinces";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ province: data.results[0], loading: false });
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
    render() {
        if (this.state.loading) {
          return <div>loading...</div>;
        }
    
        if (!this.state.province) {
          return <div>didn't get a province</div>;
        }
    
        return (
          <div>
            <div>{this.state.province.name}</div>
            <div>{this.state.province.name}</div>
          </div>
          <main>
            <Header />
            <Footer />
          </main>
        );
      }

    };
}
