import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SunWithWind from "./img/sunny.svg";
import DrizzleSunny from "./img/drizzle-sunny.svg";

function App() {
  return (
    <div>
      <div className="App">
        <Container className="col-md-6 align-items-center ContentBox fluid">
          <Row>
            <Col>
              <h1 className="Header">Weather Forecast</h1>
            </Col>
          </Row>
          <Form className="searchForm">
            <Form.Label></Form.Label>
            <Row className="justify-content-center align-items-center">
              <Col>
                <Form.Control
                  type="text"
                  placeholder="Enter City"
                  className="no-margin searchLine"
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
          <Row>
            <Col md="auto">
              <ul className="CityWeather">
                <li className="city">Lisbon</li>
                <li>Saturday 19:53</li>
                <li>Clouds</li>
              </ul>
            </Col>
            <Col></Col>
          </Row>
          <Row>
            <Col className="IconAndTemp">
              <img src={DrizzleSunny} alt="SunAndRain" className="MainIcon" />
              <p className="MainTemp">21°C</p>
            </Col>
            <Col>
              <ul className="CityWeather">
                <li>Precipitation: 64%</li>
                <li>Wind: 8km/h</li>
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
                      src={SunWithWind}
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
                      src={SunWithWind}
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
                      src={SunWithWind}
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
                      src={SunWithWind}
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
                      src={SunWithWind}
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
      </div>
      <div className="code-link">
        <a
          href="https://github.com/Helga-P/react-weather-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open-source code
        </a>
        , by Olha Prydyus from She Codes
      </div>
    </div>
  );
}

export default App;
