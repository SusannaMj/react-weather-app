import React, { useState } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);
  function showForecast(response) {
    console.log(response.data);
    setLoaded(true);
    setForecast(response.data);
    console.log(forecast);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <WeatherForecastDay forecastData={forecast} />
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
