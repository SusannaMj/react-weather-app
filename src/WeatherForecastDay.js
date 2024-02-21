import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div className="weatherForecast-day">{props.forecastData.list[0].dt}</div>
      <WeatherIcon
        code={props.forecastData.list[0].weather[0].icon}
        size={36}
      />
      <div>
        <span className="weatherForecast-max">
          {props.forecastData.list[0].main.temp_max}
        </span>
        <span className="weatherForecast-min">
          {props.forecastData.list[0].main.temp_min}
        </span>
      </div>
    </div>
  );
}
