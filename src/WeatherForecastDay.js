import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.forecastData.main.temp_max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.forecastData.main.temp_min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.forecastData.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="weatherForecast-day">{day()}</div>
      <WeatherIcon code={props.forecastData.weather[0].icon} size={36} />
      <div>
        <span className="weatherForecast-max">{maxTemperature()}</span>
        <span className="weatherForecast-min">{minTemperature()}</span>
      </div>
    </div>
  );
}
