import React from "react";
import { Observation } from "./Observation";
import { Forecast } from "./Forecast";

export function Weather({ place, observationData, forecastData }) {
  return (
    <div>
      <h1>{place}</h1>
      <div>
        <Observation data={observationData} />
        <Forecast data={forecastData} className="weather-item" />
      </div>
    </div>
  );
}
