import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="overview">
        <div className="row d-flex align-items-center">
          <div className="col-6">
            {" "}
            <h1>{props.info.city}</h1>
            <ul>
              <FormattedDate date={props.info.date} />
              <li className="text-capitalize">{props.info.description}</li>
            </ul>
          </div>
          <div className="col-6">
            <WeatherIcon alt={props.info.description} code={props.info.icon} />
            <WeatherTemperature celsius={props.info.temperature} />
          </div>
        </div>
      </div>
      <div className="weather-today">
        <div className="row">
          <div className="col-4">
            <ul>
              <li>☂</li>
              <li>Precipitation</li>
              <li>{props.info.humidity}%</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>🌫</li>
              <li>Wind</li>
              <li>{Math.round(props.info.wind)} km/h</li>
            </ul>
          </div>
          <div className="col-4">
            <ul>
              <li>🏁</li>
              <li>Pressure</li>
              <li>{props.info.pressure}hPa</li>
            </ul>
          </div>
        </div>
      </div>
      <div />
    </div>
  );
}
