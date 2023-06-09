import React from "react";
import Icons from "./Icons";
import { Col } from "react-bootstrap";
import "./OneDayWeather.css";

export default function OneDayWeather(props) {
  function dayName() {
    let days = [
      "Sunday",
      "Monday",
      "Thuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    let date = new Date(props.dt * 1000);
    let dayNumber = date.getDay();

    return days[dayNumber];
  }

  return (
    <Col className="one-day-weather">
      <div className="future-day-name">
        <p>{dayName()}</p>
      </div>
      <div className="future-day-icon">
        <Icons code={props.icon} size={"WeatherIconSmall"} />
      </div>
      <div className="future-day-temp">
        <span className="temp-max">
          {Math.round(props.max)}
          <small>°</small>
        </span>
        <span className="temp-min">
          {Math.round(props.min)}
          <small>°</small>
        </span>
      </div>
    </Col>
  );
}
