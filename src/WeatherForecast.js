import React, { useState, useEffect } from "react";

import "./WeatherForecast.css";
import axios from "axios";
import WeatherForecastDay from "./WeatherForecastDay";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.coordinates]);

  function showForecast(response) {
    console.log(response.data);
    setLoaded(true);
    setForecast(response.data.list);
    console.log(forecast);
  }

  if (loaded) {
    return (
      <div className="weatherForecast">
        <div className="row">
          {forecast.map(function (dailyForecast, index) {
            if (index % 8 === 0) {
              return (
                <div className="col" key={index}>
                  <WeatherForecastDay forecastData={dailyForecast} />
                </div>
              );
            }
          })}
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
