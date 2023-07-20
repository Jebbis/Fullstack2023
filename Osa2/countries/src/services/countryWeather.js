import axios from "axios";
import { useEffect, useState } from "react";

const CountryWeather = ({ data }) => {
  const api_key = process.env.REACT_APP_API_KEY;
  const [weather, setWeather] = useState({});

  useEffect(() => {
    const baseUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${data.latlng[0]}&lon=${data.latlng[1]}&appid=${api_key}`;
    axios.get(baseUrl).then((response) => {
      const countryObject = {
        name: response.data.name,
        temp: (response.data.main.temp - 273.15).toFixed(1),
        wind: response.data.wind.speed,
        icon: response.data.weather[0].icon,
        weather: response.data.weather[0].main,
      };
      setWeather(countryObject);
    });
  }, []);

  return (
    <div>
      <h1>Weather in {weather.name}</h1>
      <p>temperature: {weather.temp} Celcius</p>
      <p>weather: {weather.weather}</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
      ></img>
      <p>wind: {weather.wind} m/s</p>
    </div>
  );
};

export default CountryWeather;
