import React from "react";
import CityStatistics from "./CityStatistics";
//import Statistics from "./Statistics";
import {useParams} from 'react-router-dom';

const City = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Hello I am City View</h1>
      <CityStatistics />
   {/* <Statistics /> */}
    </div>
  );
};

export default City;
