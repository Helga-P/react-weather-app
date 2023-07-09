import React from "react";
import FormattedDate from "./FormattedDate";
import Icons from "./Icons";
import "./WeatherCitySearch.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import UnitsCalculation from "./UnitsCallculation";
import HumidityIcon from "./img/humidity-icon.svg";
import WindIcon from "./img/wind-icon.svg";

export default function WeatherCitySearch(props) {
  return (
    <Row>
      <Row>
        <Col md="auto">
          <ul className="CityWeather">
            <li className="city">{props.weatherData.city}</li>
            <li>
              <FormattedDate apiDate={props.weatherData.date} />
            </li>
            <li className="weather-desc">{props.weatherData.description}</li>
          </ul>
        </Col>
        <Col></Col>
      </Row>
      <Row>
        <Col md="auto" className="IconAndTemp">
          <Icons code={props.weatherData.icon} size={"MainIcon"} />
          <UnitsCalculation
            units={props.units}
            setUnits={props.setUnits}
            celcius={props.weatherData.temperature}
          />
        </Col>
        <Col className="hum-wind-colums">
          <Row md="auto">
            <Col className="focused-col">
              <span>
                <img
                  src={HumidityIcon}
                  alt="humidity"
                  className="static-icon"
                />
                Humidity: {Math.round(props.weatherData.humidity)}%
              </span>
            </Col>
            <Col className="focused-col">
              <span>
                <img src={WindIcon} alt="wind" className="static-icon" />
                Wind: {Math.round(props.weatherData.wind)} km/h
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Row>
  );
}
