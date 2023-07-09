import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import WeatherCitySearch from "./WeatherCitySearch";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import FiveDaysWeather from "./FiveDaysWeather";

function App() {
  const [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState("Kyiv");
  const [units, setUnits] = useState("celcius");

  function handelSubmit(event) {
    event.preventDefault();
    search(city);
  }
  function handelCityChange(event) {
    setCity(event.target.value);
  }

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      city: response.data.name,
    });
  }

  function search() {
    const apiKey = "bb0df6985c2eab6a171d64a6bacbb4e1";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric
`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (!weatherData.ready) {
    search();
    return <div>Loading... </div>;
  }

  return (
    <div>
      <div className="App">
        <Container className="WeatherCitySearch col-md-6 align-items-center ContentBox fluid">
          <Row>
            <Col>
              <h1 className="Header">Weather Forecast</h1>
            </Col>
          </Row>
          <Form onSubmit={handelSubmit} className="searchForm">
            <Form.Label></Form.Label>
            <Row className="justify-content-center align-items-center">
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Enter City"
                  className="no-margin searchLine"
                  onChange={handelCityChange}
                ></Form.Control>
              </Col>
              <Col xs="auto">
                <Button type="submit" size="lg" className="no-margin searchbtn">
                  Search
                </Button>
                <span />
                <Button
                  vvariant="primary"
                  type="submit"
                  size="lg"
                  className="no-margin myGeoBtn"
                >
                  My Geo
                </Button>
              </Col>
            </Row>
          </Form>
          <WeatherCitySearch
            weatherData={weatherData}
            city={city}
            units={units}
            setUnits={setUnits}
          />
          <FiveDaysWeather
            coordinates={weatherData.coordinates}
            units={units}
          />
        </Container>
      </div>
      <div className="code-link">
        <a
          href="https://github.com/Helga-P/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source project
        </a>
        , by Olha Prydyus from She Codes
      </div>
    </div>
  );
}

export default App;
