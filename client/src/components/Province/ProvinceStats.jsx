import React, { useState, useEffect } from "react";
import CityList from "../Province/CityList";
import axios from 'axios';

export default function ProvinceStats(props) {
  const [provinces, setProvinces] = useState([]);
  const [data, setData] = useState({});
  const provinceList = [];
  function getCOVIDinfo(province) {
      return axios.get(`https://api.covid19tracker.ca/reports/province/${province}`)
  }
  useEffect(() => {
    Promise.all([
      axios.get("/api/provinces/:provinceID"),
      getCOVIDinfo(),
    ])
      .then((all) => {;
        const provinces = all[0].data.data;
        const covid = all[1].data.data
        console.log(all);
        console.log(
          "provinces",
          provinces.length,
        );
        setProvinces(provinces);
        setData(covid)
      })
      .catch((error) => {
        console.log(error);
      }); 
  }, []);
  return (
    <div>
      <h1>This is some stats about a province!</h1>
      <CityList 
        provinces={provinceList}
      />
      
    </div>
  );
};