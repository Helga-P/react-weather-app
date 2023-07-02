import React, { useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TwoD from "./img/02d.svg";
import axios from "axios";
import Icons from "./Icons";
import OneDayWeather from "./OneDayWeather";

export default function FiveDaysWeather(props) {
  let [loaded, setLoaded] = useState(false);
  let [weatherInfo, setWeatherInfo] = useState(null);
  console.log("Kybus");

  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;

  function handleResponse(response) {
    setLoaded(props.coordinates);
    setWeatherInfo(response.data.daily);
  }

  if (loaded == props.coordinates) {
    return (
      <Row>
        {weatherInfo.map(function (daylyWeather, index) {
          if (index > 0 && index < 6) {
            return (
              <Col key={index}>
                <OneDayWeather data={daylyWeather} />
              </Col>
            );
          }
        })}
      </Row>
    );
  } else {
    const apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric
  `;
    console.log("Andriiychyk");
    axios.get(apiUrl).then(handleResponse);

    return null;
  }
}
