import React, { useState } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function showForecast(response) {
    console.log(response.data);
    setLoaded(true);
    setForecast(response.data.daily);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="weatherForecast-day">Thur</div>
        <WeatherIcon code="10d" size={36} />
        <div>
          <span className="weatherForecast-max">25°</span>
          <span className="weatherForecast-min">21°</span>
        </div>
      </div>
    );
  } else {
    let apiKey = "9eca7aac0b071aa16e3cb063adba0785";
    let longitude = props.coordinates.lon;

    let latitude = props.coordinates.lat;

    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(showForecast);

    return null;
  }
}
