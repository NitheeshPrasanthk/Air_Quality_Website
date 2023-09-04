import React, { useEffect, useState } from "react";
import axios from "axios";
import "../pages/AirQualityPage.css";

const AirQualityPage = () => {

  const [initialLat, setInitialLat] = useState(null);
  const [initialLong, setInitialLong] = useState(null);

  useEffect(() => {
    const initialLocation = () => {
      navigator.geolocation.getCurrentPosition((position) => {
        setInitialLat(position.coords.latitude);
        setInitialLong(position.coords.longitude);
      });
    };
  
    initialLocation(); 
  }, []);

  const [data, setData] = useState({
    aqi: null,
    components: {}
  });

  const [location, setLocation] = useState({
    lat: initialLat,
    lon: initialLong,
  });

  const [city, setCity] = useState("");

  const getCity = async () => {
    try {
      const options = {
        method: 'GET',
        url:
          'https://address-from-to-latitude-longitude.p.rapidapi.com/geolocationapi',
        params: { address: `${city}` },
        headers: {
          'X-RapidAPI-Key': 'bdeb6f859fmsh3da38af61299741p181733jsnc2de95a804c4',
          'X-RapidAPI-Host': 'address-from-to-latitude-longitude.p.rapidapi.com',
        },
      };
  
      const response = await axios.request(options);
      setLocation({
        lat: response.data.Results[0].latitude,
        lon: response.data.Results[0].longitude,
      });
      fetchData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect( ()=>{
    fetchData();
  },[location])

  const fetchData = async () => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/air_pollution?lat=${location.lat}&lon=${location.lon}&appid=ff1e557fa23c1b019f9373f2b1c8b536`
    );
    setData({
      ...data,
      aqi: response.data.list[0].main.aqi,
      components: response.data.list[0].components,
    });
  } catch (error) {
    console.error(error);
  }
};


  return (
    <div className='main'>
      <h1 className='main_title'>Check your air  quality by entering your location or city name</h1>
      <div className='air_content'>
          <input value={city} onChange={(e) => {
        setCity(e.target.value);
      }}  type='text'/>
          <button onClick={()=>(getCity())}><big> Submit</big></button>

          <div className="details">
            <h1>{city}</h1>
            <div><span><p>Latitude: {location.lat}</p></span><span><p>Longitude: {location.lon}</p></span></div>
          {Object.entries(data.components).map(([key, value]) => (
            <h2 key={key}>
              {key}: {value}
            </h2>
          ))}
          </div>
      </div>
    </div>
  )
}

export default AirQualityPage