import React from 'react';

export default function Statistics(props) {
  return (
    <div>
      <h1>Hello I am Statistics View</h1>

    </div>
  );
};

export default function Stats(props) {
  const [cities, setCities] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [users, setUsers] = useState([]);
  const [data, setData] = useState({});
   
  function getCOVIDinfo() {
    return axios.get('https://api.covid19tracker.ca/provinces')
  }
//not working even with API key 
  function getWeather(city) {
    return axios({
      "method":"GET",
      "url":"https://community-open-weather-map.p.rapidapi.com/weather",
      "headers":{
      "content-type":"application/octet-stream",
      "x-rapidapi-host":"community-open-weather-map.p.rapidapi.com",
      "x-rapidapi-key":"10b3a40fb7mshd9e5b9d36c389b5p12226cjsn89d4b168f866",
      "useQueryString":true
      },"params":{
      "lat":"0",
      "lon":"0",
      "callback":"test",
      "id":"2172797",
      "lang":"null",
      "units":"%22metric%22 or %22imperial%22",
      "mode":"xml%2C html",
      "q":`${city}`
      }
      })
  }

  function getCanadaIndices() {
    return axios.get("http://www.numbeo.com/api/country_indices?api_key=exkod1xx5sorso&country=Canada");
  }
  
  useEffect((city) => {
    Promise.all([
      axios.get("/api/cities"),
      axios.get("/api/provinces"),
      axios.get("/api/users"),
      getCOVIDinfo(`${province}`),
      getWeather(`${city}`),
      getCanadaIndices()
    ]).then((all) => {
      
      const cities = all[0].data.data;
      const provinces = all[1].data.data;
      const users = all[2].data;
      console.log(all);
      console.log("cities", cities.length, "provinces", provinces.length, "users", users.length);
      
      setCities(cities);
      setProvinces(provinces);
      setUsers(users);

      const COVID = all[3].data;
      const weather = all[5].data;
      const stats = all[9].data;
      setData({COVID, weather, stats}); 
    }).catch((error) => console.log(error));
  }, []
);