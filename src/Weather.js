import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [data, setData] = useState(null);
  const [icon, setIcon] = useState(null);

  function handleResponse(response) {
    setData(response.data);
    let iconID = response.data.weather[0].icon;
    setIcon(`https://openweathermap.org/img/wn/${iconID}@2x.png`);
  }

  if (data && data.name.toLowerCase() === props.city) {
    return (
      <div className="Weather">
        <div>Here is the weather for {props.city}:</div>
        <ul>
          <li>Temperature: {Math.round(data.main.temp)}°C</li>
          <li>Description: {data.weather[0].description}</li>
          <li>Humidity: {data.main.humidity}%</li>
          <li>Wind: {data.wind.speed}m/s</li>
          <li>
            <img src={icon} alt="weather-icon" />
          </li>
        </ul>
      </div>
    );
  } else {
    let apiKey = "8d4a4372e6dd543f61c2cf837cfcf44a";
    let parameters = `q=${props.city}&appid=${apiKey}&units=metric`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?${parameters}`;
    axios.get(apiUrl).then(handleResponse);
    return (
      <div className="Weather">Loading weather for {props.city} . . .</div>
    );
  }
}
