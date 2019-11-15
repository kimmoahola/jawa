import React from "react";
import { Forecast } from "./Forecast";

export function Weather({ location, forecastData, onLocateClick }) {
  return (
    <>
      <h1>Sääennuste</h1>

      {!location && (
        <>
          ei sijaintia <button onClick={onLocateClick}>Paikanna</button>
        </>
      )}

      <Forecast data={forecastData} />
    </>
  );
}
