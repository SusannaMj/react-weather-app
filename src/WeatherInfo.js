import React from "react";
import FormattedDate from "./FormattedDate";

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
            <img
              alt={props.info.description}
              src="data:image/png;base64,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"
            />
            <span className="temperature">
              {Math.round(props.info.temperature)}
            </span>
            <span className="unit">°C</span>
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
