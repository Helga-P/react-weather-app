import React from "react";

export default function FutureForecast(props) {
  return (
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
  );
}
