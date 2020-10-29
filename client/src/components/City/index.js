import React from "react";
//import Statistics from "./Statistics";
import {useParams} from 'react-router-dom';

const City = () => {
  const params = useParams();
  console.log(params);

  return (
    <div>
      <h1>Hello I am City View</h1>
   {/* <Statistics /> */}
    </div>
  );
};

export default City;
