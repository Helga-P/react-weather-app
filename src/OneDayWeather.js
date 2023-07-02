import React from "react";
import Icons from "./Icons";
import { Col } from "react-bootstrap";

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

    let date = new Date(props.data.dt * 1000);
    let dayNumber = date.getDay();

    return days[dayNumber];
  }

  return (
    <Col className="one-day-weather">
      <div className="future-day-name">
        <p>{dayName()}</p>
      </div>
      <div className="future-day-icon">
        <Icons code={props.data.weather[0].icon} size={"WeatherIconSmall"} />
      </div>
      <div className="future-day-temp">
        <span className="temp-max">
          {Math.round(props.data.temp.max)}
          <small>°</small>
        </span>
        <span className="temp-min">
          {Math.round(props.data.temp.min)}
          <small>°</small>
        </span>
      </div>
    </Col>
  );
}
