import React from "react";
import { Forecast } from "./Forecast";
import { LastUpdated } from "./LastUpdated";

export function Weather({ location, forecastData, onLocateClick }) {
  return (
    <>
      <h1>Sääennuste</h1>

      {!location && (
        <>
          ei sijaintia <button onClick={onLocateClick}>Paikanna</button>
        </>
      )}

      <Forecast data={forecastData && forecastData["items"]} />
      <LastUpdated ts={forecastData && forecastData["fetchTs"]} />
    </>
  );
}
