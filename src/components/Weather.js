import React from "react";
import { Forecast } from "./Forecast";
import { LastUpdated } from "./LastUpdated";

export function Weather({ location, forecastData, onLocateClick }) {
  return (
    <>
      <h1>Sääennuste</h1>

      {!location && (
        <>
          <button className="button" onClick={onLocateClick}>
            Hae sijainti
          </button>
        </>
      )}

      <Forecast data={forecastData && forecastData["items"]} />
      {forecastData && <LastUpdated ts={forecastData["fetchTs"]} />}
    </>
  );
}
