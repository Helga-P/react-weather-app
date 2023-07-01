import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TwoD from "./img/02d.svg";
import axios from "axios";

export default function FiveDaysWeather(props) {
  function handleResponse(response) {
    console.log(response);
    let maxTemp = response.data.daily[0].temp.max;
    let minTemp = response.data.daily[0].temp.min;
  }

  console.log(props);

  const apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;

  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric
  `;

  axios.get(apiUrl).then(handleResponse);

  return (
    <Row>
      <Col>
        <ul className="WeekWeatherList">
          <li className="future-day-block">
            <div className="future-day-name">
              <p>Sunday</p>
            </div>
            <div className="future-day-icon">
              <img
                src={TwoD}
                alt="Sun_With_Wind"
                className="WeatherIconSmall"
              />
            </div>
            <div className="future-day-temp">
              <span className="temp-max">
                {maxTemp}
                <small>°</small>
              </span>
              <span className="temp-min">
                22
                <small>°</small>
              </span>
            </div>
          </li>
        </ul>
      </Col>
    </Row>
  );
}
