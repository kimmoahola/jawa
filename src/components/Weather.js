import React from "react";
import { Forecast } from "./Forecast";

export function Weather({ place, forecastData }) {
  return (
    <>
      <h1>{place}</h1>
      <Forecast data={forecastData} />
    </>
  );
}
