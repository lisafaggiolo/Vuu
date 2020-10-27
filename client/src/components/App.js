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
}, []);
  
  return (
    <main>
      <Header />
      <Footer />
      
    </main>
  );
}

export default App;
