import React from "react";
import { Observation } from "./Observation";
import { Forecast } from "./Forecast";

export function Weather({ place, observationData, forecastData }) {
  return (
    <div>
      <p>Forecast of</p>
      <h1>{place}</h1>
      <div>
        <Observation data={observationData} />
        <Forecast data={forecastData} />
      </div>
    </div>
  );
}
