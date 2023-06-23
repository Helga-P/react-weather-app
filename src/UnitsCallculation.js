import React, { useState } from "react";
import "./WeatherCitySearch.css";

export default function UnitsCallculation(props) {
  const [units, setUnits] = useState("celcius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnits("fahrenheit");
  }

  function convertToCelcius(event) {
    event.preventDefault();
    setUnits("celcius");
  }

  if (units === "celcius") {
    return (
      <div className="UnitsCallculation">
        <p className="MainTemp">{Math.round(props.celcius)}</p>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={convertToFahrenheit} className="units-icon">
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="UnitsCallculation">
        <p className="MainTemp">{Math.round((props.celcius * 9) / 5 + 32)}</p>
        <span className="unit">
          <a href="/" onClick={convertToCelcius} className="units-icon">
            °C
          </a>{" "}
          |°F
        </span>
      </div>
    );
  }
}
