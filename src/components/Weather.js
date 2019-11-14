import React from "react";
import { Forecast } from "./Forecast";

export function Weather({ location, forecastData, onLocateClick }) {
  return (
    <>
      <h1>
        Sääennuste:{" "}
        {location ? `${location.lat},${location.lng}` : "ei sijaintia"}
      </h1>

      {!location && <button onClick={onLocateClick}>Paikanna</button>}

      <Forecast data={forecastData} />
    </>
  );
}
