import React from "react";
import OneD from "./img/01d.svg";
import OneN from "./img/01n.svg";
import TwoD from "./img/02d.svg";
import TwoN from "./img/02n.svg";
import ThreeD from "./img/03d.svg";
import ThreeN from "./img/03n.svg";
import FourD from "./img/04d.svg";
import FourN from "./img/04n.svg";
import NineD from "./img/09d.svg";
import NineN from "./img/09n.svg";
import TenD from "./img/10d.svg";
import TenN from "./img/10n.svg";
import ElevenD from "./img/11d.svg";
import ElevenN from "./img/11n.svg";
import ThirteenD from "./img/13d.svg";
import ThirteenN from "./img/13n.svg";
import FiftyD from "./img/50d.svg";
import FiftyN from "./img/50n.svg";

export default function Icons(props) {
  let iconsMapping = {
    "01d": OneD,
    "01n": OneN,
    "02d": TwoD,
    "02n": TwoN,
    "03d": ThreeD,
    "03n": ThreeN,
    "04d": FourD,
    "04n": FourN,
    "09d": NineD,
    "09n": NineN,
    "10d": TenD,
    "10n": TenN,
    "11d": ElevenD,
    "11n": ElevenN,
    "13d": ThirteenD,
    "13n": ThirteenN,
    "50d": FiftyD,
    "50n": FiftyN,
  };

  return (
    <img src={iconsMapping[props.code]} alt="SunAndRain" className="MainIcon" />
  );
}
