import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import axios from "axios";
import OneDayWeather from "./OneDayWeather";
import "./FiveDaysWeather.css";

export default function FiveDaysWeather(props) {
  let [loaded, setLoaded] = useState(false);
  let [weatherInfo, setWeatherInfo] = useState(null);

  let units = props.units;

  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;

  function handleResponse(response) {
    setLoaded(props.coordinates);
    setWeatherInfo(response.data.daily);
  }

  if (loaded === props.coordinates) {
    return (
      <Row className="FiveDaysWeather">
        {weatherInfo.map(function (dailyWeather, index) {
          if (index > 0 && index < 6) {
            let max = dailyWeather.temp.max;
            let min = dailyWeather.temp.min;
            if (units === "fahrenheit") {
              max = Math.round((dailyWeather.temp.max * 9) / 5 + 32);

              min = Math.round((dailyWeather.temp.min * 9) / 5 + 32);
            }

            return (
              <Col key={index}>
                <OneDayWeather
                  dt={dailyWeather.dt}
                  max={max}
                  min={min}
                  icon={dailyWeather.weather[0].icon}
                />
              </Col>
            );
          }
          return null;
        })}
      </Row>
    );
  } else {
    const apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric
  `;
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
