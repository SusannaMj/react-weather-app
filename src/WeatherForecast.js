import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecast() {
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
}
