import React from "react";

export default function FormattedDate(props) {
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Thuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.apiDate.getDay()];
  let hours = props.apiDate.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }
  let minutes = props.apiDate.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let month = months[props.apiDate.getMonth()];
  let datyNumber = [props.apiDate.getDate()];

  return (
    <div>
      {month} {datyNumber}, {day}
    </div>
  );
}
