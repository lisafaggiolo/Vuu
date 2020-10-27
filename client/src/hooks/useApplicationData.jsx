import {useState, useEffect} from "react";
import axios from "axios";

const useApplicationData = () => {
    

  // const  setProvince = province => setState({...state, province})
  // const  setCity = city => setState({...state, city})
};

export default useApplicationData;

// const [state, setState] = useState({
//   city: "Quebec City",
//   province: "Quebec",
//   user: [],
// });

// console.log('cities: ', cities)

// axios({
//   "method":"GET",
//   "url":"https://api.covid19tracker.ca/provinces",
//   "headers":{
//   "content-type":"application/octet-stream",
//   "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
//   "x-rapidapi-key":"10b3a40fb7mshd9e5b9d36c389b5p12226cjsn89d4b168f866",
//   "useQueryString":true
//   },"params":{
//   "lat":"0",
//   "lon":"0",
//   "callback":"test",
//   "id":"2172797",
//   "lang":"null",
//   "units":"%22metric%22 or %22imperial%22",
//   "mode":"xml%2C html",
//   "q":"London%2Cuk"
//   }
//   })
//   .then((response)=>{
//     console.log(response)
//   })
//   .catch((error)=>{
//     console.log(error)
//   })
  
//   axios({
//     "method":"GET",
//     "url":"https://community-open-weather-map.p.rapidapi.com/weather",
//     "headers":{
//     "content-type":"application/octet-stream",
//     "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
//     "x-rapidapi-key":"10b3a40fb7mshd9e5b9d36c389b5p12226cjsn89d4b168f866",
//     "useQueryString":true
//     },"params":{
//     "lat":"0",
//     "lon":"0",
//     "callback":"test",
//     "id":"2172797",
//     "lang":"null",
//     "units":"%22metric%22 or %22imperial%22",
//     "mode":"xml%2C html",
//     "q":"London%2Cuk"
//     }
//     })
//     .then((response)=>{
//       console.log(response)
//     })
//     .catch((error)=>{
//       console.log(error)
//     })
