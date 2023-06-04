import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import SunWithWind from "./img/SunWithWind.svg";

function App() {
  return (
    <div className="App">
      <Container className="col-md-6 align-items-center">
        <Row>
          <Col>1 of 1</Col>
        </Row>
        <Form>
          <Form.Label></Form.Label>
          <Row className="justify-content-center align-items-center">
            <Col>
              <Form.Control
                type="text"
                placeholder="Enter City"
                className="no-margin"
              ></Form.Control>
            </Col>
            <Col xs="auto">
              <Button
                vvariant="primary"
                type="submit"
                size="lg"
                className="no-margin"
              >
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
        <Row>
          <Col md="auto">
            <ul>
              <li>Lisbon</li>
              <li>Saturday 19:53</li>
              <li>Clouds</li>
            </ul>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <Col className="IconAndTemp">
            <img src={SunWithWind} alt="SunAndRain" className="MainIcon" />
            <p>21°C</p>
          </Col>
          <Col>
            <ul>
              <li>Precipitation: 64%</li>
              <li>Wind: 8km/h</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col>
            <ul>
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
              <li> </li>
              <li></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
