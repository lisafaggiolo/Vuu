import {useState, useEffect} from "react";
import axios from "axios";

// const useApplicationData = () => {
//     useEffect(() =>{
//         //this is where the Axios calls to harness the data will be used
//     // quick reference from scheduler of hell 
//         // Promise.all([
//         //     axios.get("http://localhost:8001/api/days"),
//         //     axios.get("http://localhost:8001/api/appointments"),
//         //     axios.get("http://localhost:8001/api/interviewers")
//         //   ]).then((all) => {
//         //     setState(prev => ({ ...prev, days : all[0].data, appointments : all[1].data, interviewers : all[2].data}));
//         //   });
//     }, []);

//   const  setProvince = province => setState({...state, province})
//   const  setCity = city => setState({...state, city})
// }