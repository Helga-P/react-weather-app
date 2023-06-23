import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import Icons from "./Icons";
import "./WeatherCitySearch.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import TwoD from "./img/02d.svg";

export default function WeatherCitySearch(props) {
  return (
    <Container>
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
        <Col className="IconAndTemp">
          <Icons code={props.weatherData.icon} />
          <p className="MainTemp">
            {Math.round(props.weatherData.temperature)}°C
          </p>
        </Col>
        <Col>
          <ul className="CityWeather">
            <li>Humidity: {Math.round(props.weatherData.humidity)}%</li>
            <li>Wind: {Math.round(props.weatherData.wind)} km/h</li>
          </ul>
        </Col>
      </Row>
      <Row>
        <Col>
          <ul className="WeekWeatherList">
            <li>
              <div>
                <p>Sun</p>
              </div>
              <div>
                <img
                  src={TwoD}
                  alt="Sun_With_Wind"
                  className="WeatherIconSmall"
                />
              </div>
              <div>
                22
                <small>°</small>
              </div>
            </li>
            <li>
              <div>
                <p>Sun</p>
              </div>
              <div>
                <img
                  src={TwoD}
                  alt="Sun_With_Wind"
                  className="WeatherIconSmall"
                />
              </div>
              <div>
                22
                <small>°</small>
              </div>
            </li>
            <li>
              <div>
                <p>Sun</p>
              </div>
              <div>
                <img
                  src={TwoD}
                  alt="Sun_With_Wind"
                  className="WeatherIconSmall"
                />
              </div>
              <div>
                22
                <small>°</small>
              </div>
            </li>
            <li>
              <div>
                <p>Sun</p>
              </div>
              <div>
                <img
                  src={TwoD}
                  alt="Sun_With_Wind"
                  className="WeatherIconSmall"
                />
              </div>
              <div>
                22
                <small>°</small>
              </div>
            </li>
            <li>
              <div>
                <p>Sun</p>
              </div>
              <div>
                <img
                  src={TwoD}
                  alt="Sun_With_Wind"
                  className="WeatherIconSmall"
                />
              </div>
              <div>
                22
                <small>°</small>
              </div>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}
